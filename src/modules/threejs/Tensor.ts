import * as THREE from "three";
import { dispose } from "./utils";

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

function getTextSprite(text: string, position: [number, number, number], fontsize = 24, scale = 0.12, anchor: [number, number] = [0.5, 0.5]) {
    var textHeight = Math.round(fontsize*1.2);
    var canvas = document.createElement('canvas');
    var preContext = canvas.getContext('2d')!;
    preContext.font = `Bold ${textHeight}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;
    var textWidth = preContext.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = textHeight;

    var context = canvas.getContext('2d')!;

    context.fillStyle = "rgba(0, 0, 0, 1.0)";
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

    constructor({ width = 1, height = 1, channels = 1, colors = ["#ffffff"], borderColor = "#000000",  scaleMultiplier = 1}) {
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
        let boxMaterial = [];
        for (let i = 0; i <= 6; i++) {
            let texture;
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