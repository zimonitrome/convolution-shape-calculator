import * as THREE from "three";
import { Tensor, getTextSprite } from "./Tensor";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { isDark } from "../theme";
import { clamp, dispose, getBboxVertecies as getBboxVertices, world3DToCanvas2D } from "./utils";

function getFrustumGeometry(raidusTop: number, radiusBottom: number) {
    let preGeometry = new THREE.CylinderGeometry(raidusTop / Math.sqrt(2), radiusBottom / Math.sqrt(2), 1, 4, 1); // size of top can be changed
    preGeometry.rotateY(Math.PI / 4);
    let geometry = preGeometry.toNonIndexed(); // removes shared vertices
    geometry.computeVertexNormals(); // normals will be 'flat' normals
    return geometry;
}

function getBoxFrom8Points(points: Array<[number, number, number]>) {
    const vertexIndices = [
        3, 2, 7, 6, // front
        2, 1, 6, 5, // right
        1, 0, 5, 4, // back
        0, 3, 4, 7, // left
        // 5, 4, 6, 7, // top
        // 2, 3, 1, 0  // bottom
    ];

    const numVertices = vertexIndices.length;
    const dims = 3;
    const positions = new Float32Array(numVertices * dims);

    vertexIndices.forEach((vertexIdx, i) => {
        positions.set(points[vertexIdx], i * dims);
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, dims)
    );

    geometry.setIndex([
        0, 1, 2, 2, 1, 3,  // front
        4, 5, 6, 6, 5, 7,  // right
        8, 9, 10, 10, 9, 11, // back
        12, 13, 14, 14, 13, 15, // left
        // 16, 17, 18, 18, 17, 19, // top
        // 20, 21, 22, 22, 21, 23, // bottom
    ]);
    geometry.computeVertexNormals();

    return geometry;
}


function getThinBox({ w = 1, h = 1, d = 1 }) {
    let boxgeom = new THREE.BoxGeometry(w, h, d);
    let edgesgeom = new THREE.EdgesGeometry(boxgeom);
    var mat = new THREE.MeshStandardMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
    return new THREE.Mesh(boxgeom, mat)
}

function getBox({ w = 1, h = 1, d = 1, linewidth = 0.002 }) {
    let boxgeom = new THREE.BoxGeometry(w, h, d);
    let edgesgeom = new THREE.EdgesGeometry(boxgeom);

    let lines = new LineSegmentsGeometry().fromEdgesGeometry(edgesgeom);
    let borderColors = [];
    for (let i = 0; i < lines.attributes.instanceStart.count; i++) {
        borderColors.push(1, 1, 1, 1, 1, 1)
    }
    lines.setColors(borderColors);
    const element = document.getElementById("long")!;
    var mat = new LineMaterial({
        color: new THREE.Color(isDark() ? 0xcccccc : 0x000000).getHex(),
        linewidth: linewidth,
        vertexColors: true,
        worldUnits: false,
        resolution: new THREE.Vector2(element.clientWidth / element.clientHeight, 1)
    });
    return new THREE.Mesh(lines, mat)
}

function getCubeBoxOLD({ cubeW = 1, cubeH = 1, cubeC = 1, cubeScale = 0.3, cubeCenter = new THREE.Vector3(0, 0, 0), wSpan = [0, 1], hSpan = [0, 1], cSpan = [0, 1], aspect = 1, selfScale = 0.05 }) {
    const group = new THREE.Group();

    let h_spatial = cubeH == 1 ? 0.35 : Math.log(cubeH)
    let w_spatial = cubeW == 1 ? 0.35 : Math.log(cubeW)
    let c_spatial = cubeC == 1 ? 0.35 : Math.log(cubeC)

    let max_side = Math.max(h_spatial, w_spatial, c_spatial, 1.6)

    h_spatial = (h_spatial / max_side) * cubeScale
    w_spatial = (w_spatial / max_side) * cubeScale
    c_spatial = (c_spatial / max_side) * cubeScale

    let voxelSizeH = h_spatial / cubeH;
    let voxelSizeW = w_spatial / cubeW;
    let voxelSizeC = c_spatial / cubeC;

    let cubeLeftTopBack = cubeCenter.clone().sub(new THREE.Vector3(w_spatial / 2, -h_spatial / 2, c_spatial / 2));

    let boxFromW = cubeLeftTopBack.x + (wSpan[0] * voxelSizeW);
    let boxToW = cubeLeftTopBack.x + (wSpan[1] * voxelSizeW);
    let boxFromH = cubeLeftTopBack.y + (hSpan[0] * voxelSizeH);
    let boxToH = cubeLeftTopBack.y + (hSpan[1] * voxelSizeH);
    let boxFromC = cubeLeftTopBack.z + (cSpan[0] * voxelSizeC);
    let boxToC = cubeLeftTopBack.z + (cSpan[1] * voxelSizeC);

    let box = getBox({
        w: Math.abs(boxFromW - boxToW) + 0.01,
        h: Math.abs(boxFromH - boxToH) + 0.01,
        d: Math.abs(boxFromC - boxToC) + 0.01
    });

    box.position.set(cubeLeftTopBack.x - (boxFromW - boxToW) / 2, cubeLeftTopBack.y + (boxFromH - boxToH) / 2, cubeLeftTopBack.z - (boxFromC - boxToC) / 2);

    group.add(box);

    return box;
}

function getCubeBox({ tensor = new Tensor({}), wSpan = [0, 1], hSpan = [0, 1], cSpan = [0, 1], padding = 0.03 }) {
    const voxelSizeW = (tensor.boxWidth / tensor.width);
    const voxelSizeH = (tensor.boxHeight / tensor.height);
    const voxelSizeC = (tensor.boxDepth / tensor.depth);

    const kernelSizeW = voxelSizeW * (wSpan[1] - wSpan[0]);
    const kernelSizeH = voxelSizeH * (hSpan[1] - hSpan[0]);
    const kernelSizeC = voxelSizeC * (cSpan[1] - cSpan[0]);

    let box = getBox({
        w: kernelSizeW + padding,
        h: kernelSizeH + padding,
        d: kernelSizeC + padding
    });

    box.position.add(new THREE.Vector3(
        -tensor.boxWidth / 2 + kernelSizeW / 2 + wSpan[0] * voxelSizeW,
        tensor.boxHeight / 2 - kernelSizeH / 2 - hSpan[0] * voxelSizeH,
        tensor.boxDepth / 2 - kernelSizeC / 2 - cSpan[0] * voxelSizeC,
    ))

    return box;
}

function getDilatedCubeBox({ tensor = new Tensor({}), wSpan = [0, 1], hSpan = [0, 1], cSpan = [0, 1], padding = 0.03, dilation = 2 }) {
    let meshes = [];
    for (let w = wSpan[0]; w < wSpan[1]; w += dilation) {
        for (let h = hSpan[0]; h < hSpan[1]; h += dilation) {
            let cubeBox = getCubeBox({
                tensor,
                wSpan: [w, w + 1],
                hSpan: [h, h + 1],
                cSpan,
                padding
            })
            meshes.push(cubeBox)
        }
    }

    // mergeGeometries([]) returns undefined and would throw below; can
    // happen if the spans are NaN or empty
    if (meshes.length === 0)
        return getBox({ w: 0, h: 0, d: 0 });

    let combinedGeoms = mergeGeometries(meshes.map(b => {
        b.updateMatrixWorld();
        let box3 = b.geometry.boundingBox!;
        const dimensions = new THREE.Vector3().subVectors(box3.max, box3.min);
        const boxGeo = new THREE.BoxGeometry(dimensions.x, dimensions.y, dimensions.z);

        return boxGeo.applyMatrix4(b.matrixWorld);
    }), false);

    let lines = new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(combinedGeoms));
    let borderColors = [];
    for (let i = 0; i < lines.attributes.instanceStart.count; i++) {
        borderColors.push(1, 1, 1, 1, 1, 1)
    }
    lines.setColors(borderColors);
    const element = document.getElementById("long")!;
    var mat = new LineMaterial({
        color: new THREE.Color(isDark() ? 0xcccccc : 0x000000).getHex(),
        linewidth: 0.002,
        vertexColors: true,
        worldUnits: false,
        resolution: new THREE.Vector2(element.clientWidth / element.clientHeight, 1)
    });

    return new THREE.Mesh(lines, mat)
}

enum Direction {
    left = 0,
    right = 1
}

export class Conv2D extends THREE.Group {
    public inputTensor: Tensor;
    public weightTensor: Tensor;
    public outputTensor: Tensor;

    public inputTensorKernel: THREE.Mesh;
    public selfTensorKernel: THREE.Mesh;
    public outputTensorKernel: THREE.Mesh;

    public backgroundShape: THREE.Mesh;
    public connections: THREE.Mesh;
    public isValid: boolean = true;
    // public inputWeightConnection: THREE.Line3;

    // private outlinePass?: OutlinePass;

    // private inputSelfConnection?: THREE.Mesh = undefined;

    constructor({
        inputTensor = new Tensor({}), outputTensor = new Tensor({}),
        kernelSize = 3, stride = 2, padding = 0, dilation = 1, bias = true,
        transposed = false, step = 0
    }) {
        super();

        this.inputTensor = inputTensor;
        this.outputTensor = outputTensor;

        // With missing/invalid dimensions (e.g. dilation pushed the output
        // shape below 1, or a cleared parameter field) no kernel outline can
        // be placed. Build inert placeholders instead of NaN geometry: a
        // throw inside the render effect kills Solid's update propagation
        // and leaves the whole app in a stale, inconsistent state.
        this.isValid = [inputTensor, outputTensor].every(t => t.width > 0 && t.height > 0 && t.depth > 0)
            && [kernelSize, stride, padding, dilation, step].every(Number.isFinite);

        // Conv2d steps over output positions, ConvTranspose2d over input
        // positions (each input pixel stamps a kernel onto the output)
        const gridW = transposed ? inputTensor.width : outputTensor.width;
        const gridH = transposed ? inputTensor.height : outputTensor.height;

        // The timeline step can briefly outlive a shrunken shape; never let
        // the target outline point outside the tensors
        if (this.isValid)
            step = clamp(step, 0, gridW * gridH * outputTensor.depth - 1);

        // Create background trapezoid/frustum shape; conv narrows from many
        // input cells to one output cell, transposed conv widens
        this.backgroundShape = new THREE.Mesh(
            transposed ? getFrustumGeometry(0.7, 1) : getFrustumGeometry(1, 0.7),
            new THREE.MeshStandardMaterial({
                color: new THREE.Color("hsl(0, 100%, 70%)"),
                // opacity: 0.6,
                // transparent: true,
                side: THREE.BackSide,
                depthTest: false,
                // blending: THREE.blending
            })
        );
        // Skew in one direction
        this.backgroundShape.scale.multiply(new THREE.Vector3(1, 1, 1.5));
        this.backgroundShape.position.add(new THREE.Vector3(0, -0.2, 0));
        this.backgroundShape.renderOrder = 0;
        this.add(this.backgroundShape);

        const outZPos = Math.floor(step / (gridW * gridH));
        const colorPalettes = [
            ["#E22030", "#00AEAC", "#136371", "#F2B995"],
            ["#705A5E", "#058ED9", "#F4EBD9", "#A39A92"],
            ["#F2B705", "#F2760C", "#F29F05", "#F2D492"],
            ["#77685D", "#F2D492", "#F2B705", "#F2760C"],
        ]

        // Create filter/kernel tensor box
        const palette = this.isValid ? colorPalettes[outZPos % colorPalettes.length] : colorPalettes[0];
        this.weightTensor = new Tensor({
            width: kernelSize, height: kernelSize, channels: inputTensor.channels,
            colors: palette, borderColor: isDark() ? "#c9d9e2" : "#1E3A4B",
            scaleMultiplier: 0.7
        });
        this.weightTensor.renderOrder = 0.5;
        this.add(this.weightTensor);

        // Faded previews of the previous/next filter beside the current one,
        // so a color change reads as "next filter in the stack" rather than a
        // random swap. Only the immediate neighbors are shown, since
        // output_channels can be in the hundreds.
        const numFilters = outputTensor.depth;
        const ghostScale = 0.55;
        const ghostOpacity = 0.35;
        for (const dir of [-1, 1]) {
            const filterIdx = outZPos + dir;
            if (!(filterIdx >= 0 && filterIdx < numFilters)) continue;

            const ghost = new Tensor({
                width: kernelSize, height: kernelSize, channels: inputTensor.channels,
                colors: colorPalettes[filterIdx % colorPalettes.length], borderColor: isDark() ? "#c9d9e2" : "#1E3A4B",
                scaleMultiplier: 0.7
            });
            // No w/h/c hover labels on ghosts
            ghost.remove(...ghost.labels);
            ghost.labels = [];

            ghost.scale.multiplyScalar(ghostScale);
            const ghostOffsetX = dir * ((this.weightTensor.boxWidth + ghostScale * ghost.boxWidth) / 2 + 0.14);
            ghost.position.set(ghostOffsetX, 0, 0);
            ghost.traverse(obj => {
                if (!(obj instanceof THREE.Mesh)) return;
                // Above the background frustum (0), below the current kernel (0.5)
                obj.renderOrder = 0.25;
                const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
                for (const material of materials) {
                    material.transparent = true;
                    material.opacity = ghostOpacity;
                    material.depthWrite = false;
                }
            });
            this.add(ghost);

            // "···" when there are more filters beyond the shown neighbor
            const moreIdx = filterIdx + dir;
            if (moreIdx >= 0 && moreIdx < numFilters) {
                const dots = getTextSprite("···", [0, 0, 0], 48, 0.09);
                dots.material.opacity = ghostOpacity;
                // Don't punch a hole in the ghost behind: the sprite's
                // transparent quad must not write depth
                dots.material.depthWrite = false;
                // Same edge-to-edge gap as between the main filter and a ghost
                dots.position.set(
                    ghostOffsetX + dir * (ghostScale * ghost.boxWidth / 2 + 0.14 + dots.scale.x / 2),
                    0,
                    0
                );
                this.add(dots);
            }
        }

        // Bias: one scalar per filter, drawn as a 1x1x1 cube added ("+") to
        // the current filter, below its bottom-right corner
        if (bias) {
            const biasTensor = new Tensor({
                width: 1, height: 1, channels: 1,
                colors: [palette[0]], borderColor: isDark() ? "#c9d9e2" : "#1E3A4B",
                scaleMultiplier: 0.7
            });
            const kernelHalfH = this.weightTensor.boxHeight / 2;
            biasTensor.position.set(0, -(kernelHalfH + 0.28), 0);

            // Replace the w/h/c hover labels with a single "bias" label
            biasTensor.remove(...biasTensor.labels);
            const biasLabel = getTextSprite(
                "bias",
                [0, -(biasTensor.boxHeight / 2 + 0.04), 0],
                48, 0.12, [0.5, 1]
            );
            biasLabel.visible = false;
            biasTensor.labels = [biasLabel];
            biasTensor.add(biasLabel);
            this.add(biasTensor);

            this.add(getTextSprite(
                "+",
                [0, -(kernelHalfH + 0.14), 0],
                48, 0.16
            ));
        }

        // Label showing which filter is currently applied, shown on hover
        // together with the tensor's w/h/c labels
        if (Number.isFinite(numFilters) && numFilters >= 1) {
            const filterLabel = getTextSprite(
                `filter ${outZPos + 1}/${numFilters}`,
                [0, this.weightTensor.boxHeight / 2 + 0.15, 0],
                48, 0.12, [0.5, 0]
            );
            filterLabel.visible = false;
            this.weightTensor.labels.push(filterLabel);
            this.weightTensor.add(filterLabel);
        }

        if (this.isValid) {
            const physicalKernelSize = kernelSize + (kernelSize-1)*(dilation-1);
            const gridX = step % gridW;
            const gridY = Math.floor(step / gridW) % gridH;

            // A kernel-sized (dilation-aware) outline over a tensor
            const kernelBox = (tensor: Tensor, x: number, y: number, cSpan: [number, number]) =>
                dilation > 1
                    ? getDilatedCubeBox({
                        tensor,
                        wSpan: [x, x + physicalKernelSize],
                        hSpan: [y, y + physicalKernelSize],
                        cSpan,
                        dilation
                    })
                    : getCubeBox({
                        tensor,
                        wSpan: [x, x + physicalKernelSize],
                        hSpan: [y, y + physicalKernelSize],
                        cSpan
                    });

            if (transposed) {
                // One input position spreads over a kernel-sized output
                // region, top-left at gridX*stride - padding
                this.inputTensorKernel = getCubeBox({
                    tensor: inputTensor,
                    wSpan: [gridX, gridX + 1],
                    hSpan: [gridY, gridY + 1],
                    cSpan: [0, inputTensor.channels]
                });
                this.outputTensorKernel = kernelBox(
                    outputTensor,
                    gridX * stride - padding,
                    gridY * stride - padding,
                    [outZPos, outZPos + 1]
                );
            }
            else {
                // A kernel-sized input region reduces to one output position
                this.inputTensorKernel = kernelBox(
                    inputTensor,
                    gridX * stride - padding,
                    gridY * stride - padding,
                    [0, inputTensor.channels]
                );
                this.outputTensorKernel = getCubeBox({
                    tensor: outputTensor,
                    wSpan: [gridX, gridX + 1],
                    hSpan: [gridY, gridY + 1],
                    cSpan: [outZPos, outZPos + 1]
                });
            }
            inputTensor.add(this.inputTensorKernel);
            outputTensor.add(this.outputTensorKernel);

            // Self kernel outline
            this.selfTensorKernel = getCubeBox({
                tensor: this.weightTensor, wSpan: [0, this.weightTensor.width],
                hSpan: [0, this.weightTensor.height], cSpan: [0, this.weightTensor.channels]
            })
            this.weightTensor.add(this.selfTensorKernel);
        }
        else {
            // Invisible degenerate outlines so the fields stay populated
            // without introducing NaN geometry
            this.inputTensorKernel = getBox({ w: 0, h: 0, d: 0 });
            this.inputTensorKernel.visible = false;
            this.selfTensorKernel = getBox({ w: 0, h: 0, d: 0 });
            this.selfTensorKernel.visible = false;
            this.outputTensorKernel = getBox({ w: 0, h: 0, d: 0 });
            this.outputTensorKernel.visible = false;
        }

        // Degenerate segment instead of [] to avoid a NaN bounding sphere
        let geometry = new LineSegmentsGeometry().setPositions([0, 0, 0, 0, 0, 0]);
        this.connections = new THREE.Mesh(
            geometry,
            new LineMaterial({
                color: isDark() ? 0xcccccc : 0x000000,
                linewidth: 0.005,
                depthTest: false,
                // LineMaterial's default resolution changed from (1,1) to (0,0)
                // in newer three.js, which makes lines invisible unless set
                resolution: new THREE.Vector2(1, 1)
            })
        );
    }

    public update(scene: THREE.Object3D, camera: THREE.Camera) {
        if (!this.isValid) {
            scene.remove(this.connections);
            return;
        }

        let selfTensorKernelPoints = getBboxVertices(this.selfTensorKernel.geometry.boundingBox!)
        let inputTensorKernelPoints = getBboxVertices(this.inputTensorKernel.geometry.boundingBox!);
        let outputTensorKernelPoints = getBboxVertices(this.outputTensorKernel.geometry.boundingBox!);

        selfTensorKernelPoints = selfTensorKernelPoints.map(p => this.selfTensorKernel.localToWorld(p.clone()));
        inputTensorKernelPoints = inputTensorKernelPoints.map(p => this.inputTensorKernel.localToWorld(p.clone()));
        outputTensorKernelPoints = outputTensorKernelPoints.map(p => this.outputTensorKernel.localToWorld(p.clone()));

        let inputTensorKernelBottom4Points = inputTensorKernelPoints.slice(0, 4);
        let selfTensorKernelBottom4Points = selfTensorKernelPoints.slice(0, 4);
        let selfTensorKernelTop4Points = selfTensorKernelPoints.slice(4, 8);
        let outputTensorKernelTop4Points = outputTensorKernelPoints.slice(4, 8);

        let sortfunc = (p1: THREE.Vector3, p2: THREE.Vector3) => world3DToCanvas2D(p1, camera)[0] - world3DToCanvas2D(p2, camera)[0];

        let inputTensorKernelBottom4PointsSorted = inputTensorKernelBottom4Points.sort(sortfunc);
        let selfTensorKernelBottom4PointsSorted = selfTensorKernelBottom4Points.sort(sortfunc);
        let selfTensorKernelTop4PointsSorted = selfTensorKernelTop4Points.sort(sortfunc);
        let outputTensorKernelTop4PointsSorted = outputTensorKernelTop4Points.sort(sortfunc);

        let geometry = new LineSegmentsGeometry().setPositions([
            ...selfTensorKernelTop4PointsSorted[0].toArray(), ...inputTensorKernelBottom4PointsSorted[0].toArray(), // Line 1
            ...selfTensorKernelTop4PointsSorted[selfTensorKernelTop4PointsSorted.length - 1].toArray(), ...inputTensorKernelBottom4PointsSorted[inputTensorKernelBottom4PointsSorted.length - 1].toArray(), // Line 2

            ...selfTensorKernelBottom4PointsSorted[0].toArray(), ...outputTensorKernelTop4PointsSorted[0].toArray(), // Line 3
            ...selfTensorKernelBottom4PointsSorted[selfTensorKernelBottom4PointsSorted.length - 1].toArray(), ...outputTensorKernelTop4PointsSorted[outputTensorKernelTop4PointsSorted.length - 1].toArray(), // Line 4
        ]);

        scene.remove(this.connections);
        this.connections = new THREE.Mesh(
            geometry,
            this.connections.material
        );
        this.connections.renderOrder = 1;
        scene.add(this.connections);
    }

    public assign(other: Conv2D) {
        this.connections.parent?.remove(this.connections);
        this.connections.geometry.dispose();

        this.isValid = other.isValid;
        this.inputTensor = other.inputTensor
        this.weightTensor = other.weightTensor
        this.outputTensor = other.outputTensor

        this.inputTensorKernel = other.inputTensorKernel;
        this.selfTensorKernel = other.selfTensorKernel;
        this.outputTensorKernel = other.outputTensorKernel;

        dispose(this);
        this.remove(...this.children);
        if (other.children.length > 0)
            this.add(...other.children);
    }
}