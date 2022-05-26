import { createEffect, mergeProps, onMount } from 'solid-js';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry";

interface SvgCubeProps {
    channels: number;
    height: number;
    width: number;
    colors?: Array<string>;
    borderColor?: string;
}

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

function getTextSprite(text: string, position: [number, number, number], fontsize=24, scale=0.12, anchor:[number,number]=[0.5,0.5]) {
    var textHeight = fontsize;
    var canvas = document.createElement('canvas');
    var preContext = canvas.getContext('2d')!;
    preContext.font = `Bold ${textHeight}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;
    var textWidth = preContext.measureText( text ).width;
    canvas.width = textWidth;
    canvas.height = textHeight;
    
    var context = canvas.getContext('2d')!;

    context.fillStyle = "rgba(0, 0, 0, 1.0)";
    context.font = `Bold ${textHeight}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;
    context.textAlign = "center";
    context.fillText( text, textWidth/2, textHeight);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(scale*textWidth/textHeight,scale,1.0);
    sprite.position.set(...position);
    sprite.center.set(...anchor)
    return sprite;
}

function getCube(w: number, h: number, c: number, colors: Array<string>, borderColor: string) {
    let h_spatial = h == 1 ? 0.35 : Math.log(h)
    let w_spatial = w == 1 ? 0.35 : Math.log(w)
    let c_spatial = c == 1 ? 0.35 : Math.log(c)

    let max_side = Math.max(h_spatial, w_spatial, c_spatial, 1.6)

    h_spatial = (h_spatial / max_side)
    w_spatial = (w_spatial / max_side)
    c_spatial = (c_spatial / max_side)

    let geometry = new THREE.BoxGeometry(w_spatial, h_spatial, c_spatial);


    const nColors = colors.length;
    const oneTileSize = 32;
    let textureSide = getCanvasTexture(colors, borderColor, oneTileSize);
    let textureFront = getCanvasTexture([colors[0]], borderColor, oneTileSize);
    let textureBack = getCanvasTexture([colors[(c-1) % nColors]], borderColor, oneTileSize)
    textureSide.wrapS = THREE.RepeatWrapping;
    textureSide.wrapT = THREE.RepeatWrapping;
    textureFront.wrapS = THREE.RepeatWrapping;
    textureFront.wrapT = THREE.RepeatWrapping;
    textureBack.wrapS = THREE.RepeatWrapping;
    textureBack.wrapT = THREE.RepeatWrapping;
    textureSide.anisotropy = 16;
    textureFront.anisotropy = 16;
    textureBack.anisotropy = 16;
    let material = [];
    for (let i = 0; i <= 6; i++) {
        let texture;
        // TODO: Break out and reuse same material for opposing sides
        switch (i) {
            case 0:
                // Right
                texture = textureSide.clone();
                texture.repeat.set(c / nColors, h);
                break;
            case 1:
                // Left
                texture = textureSide.clone();
                texture.center.set(1, -1)
                texture.rotation = Math.PI;
                texture.repeat.set(c / nColors, h);
                break;
            case 2:
                // Top
                texture = textureSide.clone();
                texture.rotation = Math.PI / 2;
                texture.repeat.set(c / nColors, w);
                break;
            case 3:
                // Bottom
                texture = textureSide.clone();
                texture.center.set(-1, 1)
                texture.rotation = -Math.PI / 2;
                texture.repeat.set(c / nColors, w);
                break;
            case 4:
                // Front
                texture = textureFront;
                texture.repeat.set(w, h);
                break;
            case 5:
                // Back
                texture = textureBack;
                texture.repeat.set(w, h);
                break;

            default:
                texture = textureFront.clone();
                break;
        }
        material.push(
            new THREE.MeshStandardMaterial({
                map: texture
            })
        );
    }

    const cube = new THREE.Mesh(geometry, material);


    // // OPENGL OUTLINES
    let edges = new THREE.EdgesGeometry(geometry);
    let lines = new LineSegmentsGeometry().fromEdgesGeometry(edges);
    let borderColors = [];
    for (let i = 0; i<lines.attributes.instanceStart.count; i++) {
        borderColors.push(1, 1, 1, 1, 1, 1)
    }
    lines.setColors(borderColors);
    var mat = new LineMaterial({
        color: new THREE.Color(borderColor).getHex(),
        // color: 0xffffff,
        linewidth: 0.005,
        vertexColors: true,
        worldUnits: false
    });
    let outlineMesh = new THREE.Mesh(lines, mat)
    cube.add(outlineMesh);

    const outlineWidth = 0.02;
    const brCube = new THREE.Mesh(
        new THREE.BoxGeometry(w_spatial+outlineWidth, h_spatial+outlineWidth, c_spatial+outlineWidth), 
        new THREE.MeshBasicMaterial({color: borderColor, side: THREE.BackSide})
    );
    brCube.renderOrder = -1;
    cube.add(
        brCube
    )
    
    const fontsize=24;
    const scale = 0.12;
    cube.add(
        getTextSprite(`w = ${w}`, [0, -(h_spatial/2+0.07), c_spatial/2], fontsize, scale, [0,1]),
        getTextSprite(`c = ${c}`, [-(w_spatial/2+0.05), -(h_spatial/2+0.05), 0], fontsize, scale, [1, 1]),
        getTextSprite(`h = ${h}`, [w_spatial/2+0.09, 0, c_spatial/2], fontsize, scale, [0, 0.5]),
    );

    return cube
}

export const Cube3D = (inProps: SvgCubeProps) => {
    const props = mergeProps({ colors: ['#FCBF49'], borderColor: "#003049" }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const width = 550;
        const height = 400;
        const aspect = width / height;
        const scene = new THREE.Scene();
        var d = 1;
        const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
        // const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        const controls = new OrbitControls(camera, renderer.domElement);
        renderer.setClearColor(0x000000, 0);


        renderer.setSize(width, height);

        elem!.appendChild(renderer.domElement);

        let cube = getCube(1, 1, 1, props.colors, props.borderColor);
        scene.add(cube);

        const ambLight = new THREE.AmbientLight(0xaaaaaa, 1.1); // soft white light
        ambLight.position.set(12, 18, 15);
        scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);

        camera.position.set(-20, 10, 20);
        camera.lookAt(scene.position);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        createEffect(() => {
            if ([props.width, props.height, props.channels].some(val => !val)) {
                cube.visible = false;
                return;
            }
            else {
                cube.visible = true;
            }

            let newcube = getCube(props.width, props.height, props.channels, props.colors, props.borderColor)
            for (let i = 0; i < cube.children.length; i++) {
                (cube.children[i] as THREE.Mesh).geometry.dispose();
                cube.children[i] = newcube.children[i];
            }
            cube.geometry = newcube.geometry;
            cube.geometry.computeBoundingBox();
            cube.material = newcube.material;

        });
    })

    return <div ref={elem} style={{"width": "fit-content", margin: "0 auto"}} />;
}