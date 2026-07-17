import * as THREE from "three";
import { isDark } from "../theme";
import { dispose } from "./utils";
import type { VolumeOverlay } from "../convViz";

function getCanvasTexture(hexColors: Array<string>, borderColor = "#000000", unitSize = 64) {
    const n_colors = hexColors.length;
    let canvas = document.createElement("canvas");
    canvas.height = unitSize;
    canvas.width = n_colors * unitSize;
    var ctx = canvas.getContext("2d")!;

    ctx.fillStyle = borderColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    hexColors.forEach((color, i) => {
        ctx.fillStyle = color;
        ctx.fillRect(i * unitSize + 1, 1, unitSize - 2, unitSize - 2);
    })
    return new THREE.CanvasTexture(canvas);
}

// Full-face texture with one cell per data element. `cellFn(u, v)` supplies
// each cell's palette color and brightness, with u running along the
// texture's x axis and v downward from the top row (uv.y = 1).
function getGridTexture(
    cellsU: number, cellsV: number,
    cellFn: (u: number, v: number) => { color: THREE.Color; value: number },
    borderColor: string
) {
    const small = document.createElement("canvas");
    small.width = cellsU;
    small.height = cellsV;
    const smallCtx = small.getContext("2d")!;
    const img = smallCtx.createImageData(cellsU, cellsV);
    for (let v = 0; v < cellsV; v++) {
        for (let u = 0; u < cellsU; u++) {
            const { color, value } = cellFn(u, v);
            // Brightness floor so the cell hue stays readable on black pixels
            const m = 0.08 + 0.92 * Math.min(1, Math.max(0, value));
            const i = (v * cellsU + u) * 4;
            img.data[i] = color.r * m * 255;
            img.data[i + 1] = color.g * m * 255;
            img.data[i + 2] = color.b * m * 255;
            img.data[i + 3] = 255;
        }
    }
    smallCtx.putImageData(img, 0, 0);

    // Upscale to give cells some size, capped so big tensors don't produce
    // gigantic canvases
    const cell = Math.max(1, Math.min(32, Math.floor(2048 / Math.max(cellsU, cellsV))));
    const canvas = document.createElement("canvas");
    canvas.width = cellsU * cell;
    canvas.height = cellsV * cell;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(small, 0, 0, canvas.width, canvas.height);

    // Cell borders like the plain tile texture, skipped when cells are too
    // small for a border to read
    if (cell >= 6) {
        ctx.fillStyle = borderColor;
        for (let x = 0; x <= cellsU; x++) ctx.fillRect(x * cell - 1, 0, 2, canvas.height);
        for (let y = 0; y <= cellsV; y++) ctx.fillRect(0, y * cell - 1, canvas.width, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    if (cell <= 2) texture.magFilter = THREE.NearestFilter;
    return texture;
}

export function getTextSprite(text: string, position: [number, number, number], fontsize = 24, scale = 0.12, anchor: [number, number] = [0.5, 0.5]) {
    var textHeight = Math.round(fontsize*1.2);
    var canvas = document.createElement('canvas');
    var preContext = canvas.getContext('2d')!;
    preContext.font = `Bold ${textHeight}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;
    var textWidth = preContext.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = textHeight;

    var context = canvas.getContext('2d')!;

    context.fillStyle = isDark() ? "#e8e8e8" : "rgba(0, 0, 0, 1.0)";
    context.font = `Bold ${textHeight}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;
    context.textAlign = "center";
    context.fillText(text, textWidth / 2, textHeight/1.2);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(scale * textWidth / textHeight, scale, 1.0);
    sprite.position.set(...position);
    sprite.center.set(...anchor);
    return sprite;
}

export class Tensor extends THREE.Group {
    public height: number = 0;
    public width: number = 0;
    public channels: number = 0;

    public boxHeight: number = 0;
    public boxWidth: number = 0;
    public boxDepth: number = 0;

    public boxMesh: THREE.Mesh = new THREE.Mesh();
    public labels: Array<THREE.Sprite> = [];

    constructor({ width = 1, height = 1, channels = 1, colors = ["#ffffff"], borderColor = "#000000",  scaleMultiplier = 1, overlay = undefined as VolumeOverlay | undefined }) {
        super();

        if ([width, height, channels].some(val => !val)) {
            this.visible = false;
            return;
        }

        // Define properties of the tensor
        this.height = height;
        this.width = width;
        this.channels = channels;

        // Calculate spatial dimensions of the box
        const heightSpatial = height == 1 ? 0.35 : Math.log(height);
        const widthSpatial = width == 1 ? 0.35 : Math.log(width);
        const channelsSpatial = channels == 1 ? 0.35 : Math.log(channels);

        const max_side = Math.max(heightSpatial, widthSpatial, channelsSpatial, 1.6)

        this.boxHeight = scaleMultiplier * (heightSpatial / max_side)
        this.boxWidth = scaleMultiplier * (widthSpatial / max_side)
        this.boxDepth = scaleMultiplier * (channelsSpatial / max_side)

        // Create geometry
        const boxGeometry = new THREE.BoxGeometry(this.boxWidth, this.boxHeight, this.boxDepth);

        // Create material
        const nColors = colors.length;
        const oneTileSize = 32;
        let textureSide = getCanvasTexture(colors, borderColor, oneTileSize);
        let textureFront = getCanvasTexture([colors[0]], borderColor, oneTileSize);
        let textureBack = getCanvasTexture([colors[(this.channels - 1) % nColors]], borderColor, oneTileSize)
        textureSide.wrapS = THREE.RepeatWrapping;
        textureSide.wrapT = THREE.RepeatWrapping;
        textureFront.wrapS = THREE.RepeatWrapping;
        textureFront.wrapT = THREE.RepeatWrapping;
        textureBack.wrapS = THREE.RepeatWrapping;
        textureBack.wrapT = THREE.RepeatWrapping;
        textureSide.anisotropy = 16;
        textureFront.anisotropy = 16;
        textureBack.anisotropy = 16;
        // Per-face data textures when a volume overlay matching this tensor's
        // shape is supplied. Cell lookups bake in the UV orientation of each
        // BoxGeometry face (u along texture x, v downward from uv.y = 1):
        // right u: front→back, left u: back→front, top v: back→front,
        // bottom v: front→back, back u: mirrored x.
        const W = this.width, H = this.height, C = this.channels;
        const useOverlay = overlay !== undefined
            && overlay.width === W && overlay.height === H && overlay.channels === C;
        const channelColor = (c: number) => new THREE.Color(colors[c % nColors]);
        const overlayTexture = (i: number, o: VolumeOverlay) => {
            switch (i) {
                case 0: // Right
                    return getGridTexture(C, H, (u, v) =>
                        ({ color: channelColor(u), value: o.right[v * C + u] }), borderColor);
                case 1: // Left
                    return getGridTexture(C, H, (u, v) =>
                        ({ color: channelColor(C - 1 - u), value: o.left[v * C + (C - 1 - u)] }), borderColor);
                case 2: // Top
                    return getGridTexture(W, C, (u, v) =>
                        ({ color: channelColor(C - 1 - v), value: o.top[(C - 1 - v) * W + u] }), borderColor);
                case 3: // Bottom
                    return getGridTexture(W, C, (u, v) =>
                        ({ color: channelColor(v), value: o.bottom[v * W + u] }), borderColor);
                case 4: // Front
                    return getGridTexture(W, H, (u, v) =>
                        ({ color: channelColor(0), value: o.front[v * W + u] }), borderColor);
                default: // Back
                    return getGridTexture(W, H, (u, v) =>
                        ({ color: channelColor(C - 1), value: o.back[v * W + (W - 1 - u)] }), borderColor);
            }
        };

        let boxMaterial = [];
        for (let i = 0; i <= 6; i++) {
            let texture;
            if (useOverlay && i <= 5) {
                texture = overlayTexture(i, overlay!);
                boxMaterial.push(new THREE.MeshStandardMaterial({ map: texture }));
                continue;
            }
            // TODO: Break out and reuse same material for opposing sides
            switch (i) {
                case 0:
                    // Right
                    texture = textureSide.clone();
                    texture.repeat.set(this.channels / nColors, this.height);
                    break;
                case 1:
                    // Left
                    texture = textureSide.clone();
                    texture.center.set(1, -1)
                    texture.rotation = Math.PI;
                    texture.repeat.set(this.channels / nColors, this.height);
                    break;
                case 2:
                    // Top
                    texture = textureSide.clone();
                    texture.rotation = Math.PI / 2;
                    texture.repeat.set(this.channels / nColors, this.width);
                    break;
                case 3:
                    // Bottom
                    texture = textureSide.clone();
                    texture.center.set(-1, 1)
                    texture.rotation = -Math.PI / 2;
                    texture.repeat.set(this.channels / nColors, this.width);
                    break;
                case 4:
                    // Front
                    texture = textureFront;
                    texture.repeat.set(this.width, this.height);
                    break;
                case 5:
                    // Back
                    texture = textureBack;
                    texture.repeat.set(this.width, this.height);
                    break;

                default:
                    texture = textureFront.clone();
                    break;
            }
            boxMaterial.push(
                new THREE.MeshStandardMaterial({
                    map: texture
                })
            );
        }

        this.boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        this.add(this.boxMesh);


        // Create box outline
        const outlineWidth = 0.02;
        const backgroundBox = new THREE.Mesh(
            new THREE.BoxGeometry(this.boxWidth + outlineWidth, this.boxHeight + outlineWidth, this.boxDepth + outlineWidth),
            new THREE.MeshBasicMaterial({ color: borderColor, side: THREE.BackSide })
        );
        backgroundBox.renderOrder = -1;
        this.add(backgroundBox);


        // Add text
        const fontsize = 48;
        const scale = 0.12;
        this.labels = [
            getTextSprite(`w = ${this.width}`, [0, -(this.boxHeight / 2 + 0.07), this.boxDepth / 2], fontsize, scale, [0, 1]),
            getTextSprite(`h = ${this.height}`, [this.boxWidth / 2 + 0.09, 0, this.boxDepth / 2], fontsize, scale, [0, 0.5]),
            getTextSprite(`c = ${this.channels}`, [-(this.boxWidth / 2 + 0.05), -(this.boxHeight / 2 + 0.05), 0], fontsize, scale, [1, 1]),
        ]
        this.toggleLabels(false);
        this.add(...this.labels);
    }

    public toggleLabels(visible: boolean) {
        for (let label of this.labels) {
            label.visible = visible;
        }
    }

    public assign(other: Tensor) {
        this.height = other.height;
        this.width = other.width;
        this.channels = other.channels;

        this.boxHeight = other.boxHeight;
        this.boxWidth = other.boxWidth;
        this.boxDepth = other.boxDepth;

        this.boxMesh = other.boxMesh;
        this.labels = other.labels;

        dispose(this);
        this.remove(...this.children);
        if (other.children.length > 0)
            this.add(...other.children);
    }

    get depth() {
        return this.channels;
    }
}