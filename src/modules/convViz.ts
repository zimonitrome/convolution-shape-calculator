// Image → tensor overlay pipeline: bicubic resampling of the source image
// to the input tensor's spatial size, a bank of VGG/ResNet-style first-layer
// filters used as kernel weights, and the actual conv/deconv math whose
// result is painted onto the output tensor.

// Per-cell brightness (0..1) for every visible face of a tensor box. Each
// face shows the boundary slice of the underlying C×H×W data volume:
// front = channel 0, back = channel C-1, and the four sides are the
// x/y-boundary columns/rows across all channels.
export type VolumeOverlay = {
    width: number;
    height: number;
    channels: number;
    front: Float32Array;   // W*H, [y*W + x], channel 0
    back: Float32Array;    // W*H, [y*W + x], channel C-1
    right: Float32Array;   // C*H, [y*C + c], column x = W-1
    left: Float32Array;    // C*H, [y*C + c], column x = 0
    top: Float32Array;     // C*W, [c*W + x], row y = 0
    bottom: Float32Array;  // C*W, [c*W + x], row y = H-1
};

export type ImagePlanes = {
    width: number;
    height: number;
    r: Float32Array;
    g: Float32Array;
    b: Float32Array;
    lum: Float32Array;
};

// ---------------------------------------------------------------------------
// Bicubic resize (separable Catmull-Rom, a = -0.5)
// ---------------------------------------------------------------------------

function cubicWeight(t: number) {
    const a = -0.5;
    const at = Math.abs(t);
    if (at <= 1) return (a + 2) * at * at * at - (a + 3) * at * at + 1;
    if (at < 2) return a * at * at * at - 5 * a * at * at + 8 * a * at - 4 * a;
    return 0;
}

// For each output coordinate: 4 (clamped) source indices and their weights
function cubicTaps(srcSize: number, dstSize: number) {
    const idx = new Int32Array(dstSize * 4);
    const w = new Float32Array(dstSize * 4);
    for (let o = 0; o < dstSize; o++) {
        const s = (o + 0.5) * srcSize / dstSize - 0.5;
        const s0 = Math.floor(s) - 1;
        for (let t = 0; t < 4; t++) {
            idx[o * 4 + t] = Math.min(srcSize - 1, Math.max(0, s0 + t));
            w[o * 4 + t] = cubicWeight(s - (s0 + t));
        }
    }
    return { idx, w };
}

export function resizeBicubic(src: ImageData, W: number, H: number): ImagePlanes {
    const sW = src.width, sH = src.height, data = src.data;
    const tx = cubicTaps(sW, W);
    const ty = cubicTaps(sH, H);

    // Horizontal pass: sW×sH → W×sH
    const tmpR = new Float32Array(W * sH);
    const tmpG = new Float32Array(W * sH);
    const tmpB = new Float32Array(W * sH);
    for (let y = 0; y < sH; y++) {
        const rowOff = y * sW;
        for (let x = 0; x < W; x++) {
            let r = 0, g = 0, b = 0;
            for (let t = 0; t < 4; t++) {
                const si = (rowOff + tx.idx[x * 4 + t]) * 4;
                const wt = tx.w[x * 4 + t];
                r += data[si] * wt;
                g += data[si + 1] * wt;
                b += data[si + 2] * wt;
            }
            tmpR[y * W + x] = r;
            tmpG[y * W + x] = g;
            tmpB[y * W + x] = b;
        }
    }

    // Vertical pass: W×sH → W×H
    const r = new Float32Array(W * H);
    const g = new Float32Array(W * H);
    const b = new Float32Array(W * H);
    const lum = new Float32Array(W * H);
    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            let vr = 0, vg = 0, vb = 0;
            for (let t = 0; t < 4; t++) {
                const si = ty.idx[y * 4 + t] * W + x;
                const wt = ty.w[y * 4 + t];
                vr += tmpR[si] * wt;
                vg += tmpG[si] * wt;
                vb += tmpB[si] * wt;
            }
            const i = y * W + x;
            r[i] = Math.min(1, Math.max(0, vr / 255));
            g[i] = Math.min(1, Math.max(0, vg / 255));
            b[i] = Math.min(1, Math.max(0, vb / 255));
            lum[i] = 0.2126 * r[i] + 0.7152 * g[i] + 0.0722 * b[i];
        }
    }

    return { width: W, height: H, r, g, b, lum };
}

// ---------------------------------------------------------------------------
// Filter bank
// ---------------------------------------------------------------------------
// Procedurally generated Gabor edges, center-surround and color-opponent
// blobs — the filter shapes VGG's and ResNet's first conv layers famously
// learn. Real checkpoint weights can't follow the adjustable kernel_size
// anyway, so each filter is sampled at whatever size the slider says.
// Returned as 3 channel-group planes (input channels cycle R,G,B).

const NUM_TEMPLATES = 10;

export function getFilterKernel(filterIdx: number, k: number): Float32Array[] {
    const template = ((filterIdx % NUM_TEMPLATES) + NUM_TEMPLATES) % NUM_TEMPLATES;
    // Repeats of the bank get a higher spatial frequency so no two filters
    // in a big layer are pixel-identical
    const freq = 0.5 * (1 + 0.4 * (Math.floor(filterIdx / NUM_TEMPLATES) % 3));

    const n = k * k;
    const coord = (i: number) => k === 1 ? 0 : ((i + 0.5) / k) * 2 - 1;

    const sample = (fn: (x: number, y: number) => number) => {
        const plane = new Float32Array(n);
        for (let y = 0; y < k; y++)
            for (let x = 0; x < k; x++)
                plane[y * k + x] = fn(coord(x), coord(y));
        return plane;
    };

    const gabor = (thetaDeg: number, phase: number) => {
        const th = thetaDeg * Math.PI / 180;
        const cos = Math.cos(th), sin = Math.sin(th);
        return sample((x, y) => {
            const xp = x * cos + y * sin;
            const yp = -x * sin + y * cos;
            return Math.exp(-(xp * xp + yp * yp) / (2 * 0.5 * 0.5))
                * Math.cos(2 * Math.PI * freq * xp + phase);
        });
    };

    const gaussian = (sigma: number) =>
        sample((x, y) => Math.exp(-(x * x + y * y) / (2 * sigma * sigma)));

    const zeroMean = (plane: Float32Array) => {
        let mean = 0;
        for (const v of plane) mean += v;
        mean /= plane.length;
        return plane.map(v => v - mean);
    };

    const ODD = -Math.PI / 2, EVEN = 0;
    let groups: Float32Array[];
    const achromatic = (plane: Float32Array) => {
        const p = zeroMean(plane);
        return [p, p.slice(), p.slice()];
    };
    const colorBlob = (weights: [number, number, number]) => {
        const env = gaussian(0.5);
        return weights.map(w => env.map(v => v * w));
    };

    switch (template) {
        case 0: groups = achromatic(gabor(0, ODD)); break;    // vertical edge
        case 1: groups = achromatic(gabor(90, ODD)); break;   // horizontal edge
        case 2: groups = achromatic(gabor(45, ODD)); break;
        case 3: groups = achromatic(gabor(135, ODD)); break;
        case 4: groups = achromatic(gabor(0, EVEN)); break;   // vertical bar
        case 5: groups = achromatic(gabor(90, EVEN)); break;  // horizontal bar
        case 6: {
            // Center-surround (difference of Gaussians), balanced to zero sum
            const center = gaussian(0.25);
            const surround = gaussian(0.6);
            let sc = 0, ss = 0;
            for (let i = 0; i < n; i++) { sc += center[i]; ss += surround[i]; }
            const plane = center.map((v, i) => v / sc - surround[i] / ss);
            groups = [plane, plane.slice(), plane.slice()];
            break;
        }
        case 7: groups = colorBlob([1, -1, 0]); break;        // red–green opponent
        case 8: groups = colorBlob([-0.5, -0.5, 1]); break;   // blue–yellow opponent
        default: groups = achromatic(gabor(45, EVEN)); break;
    }

    let maxAbs = 0;
    for (const plane of groups)
        for (const v of plane)
            maxAbs = Math.max(maxAbs, Math.abs(v));

    // Degenerate at this kernel size (e.g. an odd Gabor sampled at k=1):
    // fall back to a color-opponent blob, which never collapses
    if (maxAbs < 1e-6) {
        groups = colorBlob([1, -1, 0]);
        maxAbs = 1;
    }

    return groups.map(plane => plane.map(v => v / maxAbs));
}

// ---------------------------------------------------------------------------
// Volume overlays
// ---------------------------------------------------------------------------

// Sample the six boundary faces of a C×H×W volume. For signed data the
// values are mapped to brightness around mid-gray with one shared scale, so
// channels stay comparable to each other.
function buildVolume(
    W: number, H: number, C: number,
    sample: (c: number, y: number, x: number) => number,
    signed: boolean
): VolumeOverlay {
    const front = new Float32Array(W * H);
    const back = new Float32Array(W * H);
    const right = new Float32Array(C * H);
    const left = new Float32Array(C * H);
    const top = new Float32Array(C * W);
    const bottom = new Float32Array(C * W);

    for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++) {
            front[y * W + x] = sample(0, y, x);
            back[y * W + x] = C === 1 ? front[y * W + x] : sample(C - 1, y, x);
        }
    for (let y = 0; y < H; y++)
        for (let c = 0; c < C; c++) {
            right[y * C + c] = sample(c, y, W - 1);
            left[y * C + c] = W === 1 ? right[y * C + c] : sample(c, y, 0);
        }
    for (let c = 0; c < C; c++)
        for (let x = 0; x < W; x++) {
            top[c * W + x] = sample(c, 0, x);
            bottom[c * W + x] = H === 1 ? top[c * W + x] : sample(c, H - 1, x);
        }

    const faces = [front, back, right, left, top, bottom];
    if (signed) {
        let maxAbs = 0;
        for (const face of faces)
            for (const v of face)
                maxAbs = Math.max(maxAbs, Math.abs(v));
        const scale = maxAbs > 1e-9 ? 0.5 / maxAbs : 0;
        for (const face of faces)
            for (let i = 0; i < face.length; i++)
                face[i] = 0.5 + face[i] * scale;
    }

    return { width: W, height: H, channels: C, front, back, right, left, top, bottom };
}

// The resized image on the input tensor; channels cycle R,G,B
export function imageVolumeOverlay(planes: ImagePlanes, C: number): VolumeOverlay | undefined {
    if (!Number.isFinite(C) || C < 1) return undefined;
    const { width: W, height: H } = planes;
    const chan = C === 1 ? [planes.lum] : [planes.r, planes.g, planes.b];
    return buildVolume(W, H, C, (c, y, x) => chan[c % chan.length][y * W + x], false);
}

// One filter's weights on the kernel tensor, all input channels
export function weightVolumeOverlay(filterIdx: number, k: number, C: number): VolumeOverlay | undefined {
    if (!Number.isFinite(filterIdx) || !Number.isFinite(k) || k < 1 || !Number.isFinite(C) || C < 1)
        return undefined;
    const groups = getFilterKernel(filterIdx, k);
    return buildVolume(k, k, C, (c, y, x) => 0.5 + 0.5 * groups[c % 3][y * k + x], false);
}

// ---------------------------------------------------------------------------
// Convolution
// ---------------------------------------------------------------------------
// The input tensor's channels cycle R,G,B (a single channel means grayscale),
// so an arbitrary channel count collapses into the 3 weight groups with a
// per-group multiplicity; the normalization at the end absorbs the scale.

function channelGroups(C: number, planes: ImagePlanes) {
    if (!Number.isFinite(C) || C < 1) return [];
    if (C === 1) return [{ plane: planes.lum, group: 0, count: 1 }];
    return [planes.r, planes.g, planes.b].slice(0, Math.min(C, 3)).map((plane, g) => ({
        plane, group: g, count: Math.ceil((C - g) / 3),
    }));
}

// The whole layer output as a volume: output channel z is filter z applied
// to the image. Only the visible boundary faces are evaluated, so this stays
// cheap even for many output channels.
export function outputVolumeOverlay(
    planes: ImagePlanes, inC: number, outC: number, k: number,
    stride: number, padding: number, dilation: number,
    transposed: boolean, outW: number, outH: number
): VolumeOverlay | undefined {
    const { width: inW, height: inH } = planes;
    const chans = channelGroups(inC, planes);
    if (chans.length === 0) return undefined;

    const kernelCache = new Map<number, Float32Array[]>();
    const kernelFor = (z: number) => {
        let kern = kernelCache.get(z);
        if (!kern) {
            kern = getFilterKernel(z, k);
            kernelCache.set(z, kern);
        }
        return kern;
    };

    const convAt = (z: number, oy: number, ox: number) => {
        const kern = kernelFor(z);
        let acc = 0;
        for (const { plane, group, count } of chans) {
            const w = kern[group];
            let sub = 0;
            for (let ky = 0; ky < k; ky++) {
                const iy = oy * stride - padding + ky * dilation;
                if (iy < 0 || iy >= inH) continue;
                for (let kx = 0; kx < k; kx++) {
                    const ix = ox * stride - padding + kx * dilation;
                    if (ix < 0 || ix >= inW) continue;
                    // Center pixel values so zero-padding is neutral
                    sub += w[ky * k + kx] * (plane[iy * inW + ix] - 0.5);
                }
            }
            acc += sub * count;
        }
        return acc;
    };

    // Gather form of ConvTranspose2d: which input pixels reach (oy, ox)
    const convTransposeAt = (z: number, oy: number, ox: number) => {
        const kern = kernelFor(z);
        let acc = 0;
        for (const { plane, group, count } of chans) {
            const w = kern[group];
            let sub = 0;
            for (let ky = 0; ky < k; ky++) {
                const ty = oy + padding - ky * dilation;
                if (ty < 0 || ty % stride !== 0) continue;
                const iy = ty / stride;
                if (iy >= inH) continue;
                for (let kx = 0; kx < k; kx++) {
                    const tx = ox + padding - kx * dilation;
                    if (tx < 0 || tx % stride !== 0) continue;
                    const ix = tx / stride;
                    if (ix >= inW) continue;
                    sub += w[ky * k + kx] * (plane[iy * inW + ix] - 0.5);
                }
            }
            acc += sub * count;
        }
        return acc;
    };

    return buildVolume(outW, outH, outC, transposed ? convTransposeAt : convAt, true);
}
