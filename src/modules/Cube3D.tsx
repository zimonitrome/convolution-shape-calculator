import { createEffect, mergeProps, onMount } from 'solid-js';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ObjectControls } from 'threeJS-object-controls';
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry";
import { PlaneGeometry } from 'three';

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

function getTextSprite(text: string, position: [number, number, number], fontsize = 24, scale = 0.12, anchor: [number, number] = [0.5, 0.5]) {
    var textHeight = fontsize;
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
    context.fillText(text, textWidth / 2, textHeight);

    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(scale * textWidth / textHeight, scale, 1.0);
    sprite.position.set(...position);
    sprite.center.set(...anchor)
    return sprite;
}

function canvas2DToWorld3D_(canvasX: number, canvasY: number, camera: THREE.Camera, canvas: HTMLCanvasElement) {
    // get x,y coords into canvas where click occurred
    var rect = canvas.getBoundingClientRect();
    var x = canvasX - rect.left;
    var y = canvasY - rect.top;
    // convert x,y to clip space; coords from top left, clockwise:
    // (-1,1), (1,1), (-1,-1), (1, -1)
    var mouse = new THREE.Vector3();
    mouse.x = ((x / canvas.clientWidth) * 2) - 1;
    mouse.y = (-(y / canvas.clientHeight) * 2) + 1;
    mouse.z = 0.5; // set to z position of mesh objects
    // reverse projection from 3D to screen
    mouse.unproject(camera);
    // convert from point to a direction
    mouse.sub(camera.position).normalize();
    // scale the projected ray
    var distance = -camera.position.z / mouse.z,
        scaled = mouse.multiplyScalar(distance),
        coords = camera.position.clone().add(scaled);
    return coords;
}

function canvas2DToWorld3D(canvasX: number, canvasY: number, camera: THREE.Camera, canvas: HTMLCanvasElement, scene: THREE.Scene) {
    let vector = new THREE.Vector3();
    console.log(canvas.width);
    console.log(canvas.height);
    vector.set(
        (canvasX / canvas.width) * 2 - 1,
        - (canvasY / canvas.height) * 2 + 1,
        0
    );
    return vector.unproject(camera);


    // // var plane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 1));
    // var plane = new THREE.Plane().setFromNormalAndCoplanarPoint(camera.position.clone(), new THREE.Vector3(0,0,0));
    // // var plane = new THREE.Plane().setFromCoplanarPoints(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 1, 0), new THREE.Vector3(3, 2, 0));

    // scene.add(new THREE.PlaneHelper( plane, 1, 0xffff00 ));


    // const material = new THREE.LineBasicMaterial({
    //     color: 0x0000ff
    // });
    // const points = [];
    // points.push( camera.position.clone() );
    // points.push( new THREE.Vector3(0,0,0) );
    // const geometry = new THREE.BufferGeometry().setFromPoints( points );
    // const line = new THREE.Line( geometry, material );
    // scene.add( line );



    // var raycaster = new THREE.Raycaster();
    // var corner = new THREE.Vector2();
    // var cornerPoint = new THREE.Vector3();

    // corner.set(-1,0); // NDC of the bottom-left corner
    // raycaster.setFromCamera(corner, camera.clone());
    // raycaster.ray.intersectPlane(plane, cornerPoint);

    // console.log(raycaster)

    // return cornerPoint;
}

function getCube(w: number, h: number, c: number, colors: Array<string>, borderColor: string) {
    const group = new THREE.Group();
    // group.position.x = 0;
    // group.position.y = 0;
    // group.position.z = 0;

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
    let textureBack = getCanvasTexture([colors[(c - 1) % nColors]], borderColor, oneTileSize)
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
    group.add(cube);


    // // // OPENGL OUTLINES
    // let edges = new THREE.EdgesGeometry(geometry);
    // let lines = new LineSegmentsGeometry().fromEdgesGeometry(edges);
    // let borderColors = [];
    // for (let i = 0; i < lines.attributes.instanceStart.count; i++) {
    //     borderColors.push(1, 1, 1, 1, 1, 1)
    // }
    // lines.setColors(borderColors);
    // var mat = new LineMaterial({
    //     color: new THREE.Color(borderColor).getHex(),
    //     // color: 0xffffff,
    //     linewidth: 0.005,
    //     vertexColors: true,
    //     worldUnits: false
    // });
    // let outlineMesh = new THREE.Mesh(lines, mat)
    // group.add(outlineMesh);

    const outlineWidth = 0.02;
    const brCube = new THREE.Mesh(
        new THREE.BoxGeometry(w_spatial + outlineWidth, h_spatial + outlineWidth, c_spatial + outlineWidth),
        new THREE.MeshBasicMaterial({ color: borderColor, side: THREE.BackSide })
    );
    brCube.renderOrder = -1;
    group.add(
        brCube
    )

    const fontsize = 24;
    const scale = 0.12;
    group.add(
        getTextSprite(`w = ${w}`, [0, -(h_spatial / 2 + 0.07), c_spatial / 2], fontsize, scale, [0, 1]),
        getTextSprite(`c = ${c}`, [-(w_spatial / 2 + 0.05), -(h_spatial / 2 + 0.05), 0], fontsize, scale, [1, 1]),
        getTextSprite(`h = ${h}`, [w_spatial / 2 + 0.09, 0, c_spatial / 2], fontsize, scale, [0, 0.5]),
    );

    return group
}

export const Cube3D = (inProps: SvgCubeProps) => {
    const props = mergeProps({ colors: ['#FCBF49'], borderColor: "#003049" }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const width = 550;
        const height = 1000;
        const aspect = width / height;
        const scene = new THREE.Scene();
        var d = 1;
        const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 100000);
        // const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setClearColor(0x000000, 0);


        renderer.setSize(width, height);

        var canvas = renderer.domElement
        elem!.appendChild(canvas);

        camera.position.set(-20, 10, 20);
        camera.lookAt(new THREE.Vector3(0,0,0));



        let cube = getCube(1, 1, 1, props.colors, props.borderColor);
        // cube.position.set(pos.x, pos.y, 0)
        // cube.cen
        // new THREE.Box3().setFromObject( cube ).ce
        // cube.scale.set(0.3, 0.3, 0.3);
        // cube.position.set(-(bbox.min.x + bbox.max.x) / 2, -(bbox.min.y + bbox.max.y) / 2, 0);
        // var pivot = new THREE.Group();
        // pivot.add(cube);
        // pivot.position.set(pos.x, pos.y, 0)
        // scene.add(pivot);



        scene.add(cube);

        // let cube2 = getCube(1, 1, 1, props.colors, props.borderColor);
        // // cube2.position.set(0, -1, 0)
        // scene.add(cube2);

        // const controls = new ObjectControls(camera, renderer.domElement, [cube, ...cube.children]);

        // const controls = new OrbitControls(camera, renderer.domElement);

        var mouseDown = false,
            mouseX = 0,
            mouseY = 0;


        function toRadians(angle: number) {
            return angle * (Math.PI / 180);
        }
        function clamp(val: number, min: number, max: number) {
            return Math.min(Math.max(val, min), max)
        }
        function rotateAboutPoint(obj: THREE.Object3D, point: THREE.Vector3, axis: THREE.Vector3, theta: number, pointIsWorld: boolean = false) {
            pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld;

            obj.position.sub(point); // remove the offset
            obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
            obj.position.add(point); // re-add the offset

            obj.rotateOnAxis(axis, theta); // rotate the OBJECT
        }
        document.addEventListener('mousemove', function (evt) {
            if (!mouseDown) { return }
            //console.log('drag')
            evt.preventDefault();
            var deltaX = evt.clientX - mouseX,
                deltaY = evt.clientY - mouseY;
            mouseX = evt.clientX;
            mouseY = evt.clientY;

            rotateAboutPoint(cube, cube.position.clone(), new THREE.Vector3(0, 1, 0), toRadians(deltaX), false)

        }, false);

        canvas.addEventListener('mousedown', function (evt) {
            evt.preventDefault();
            mouseDown = true;
            mouseX = evt.clientX;
            mouseY = evt.clientY;
        }, false);

        document.addEventListener('mouseup', function (evt) {
            mouseDown = false;
        });

        console.log(cube)





        const ambLight = new THREE.AmbientLight(0xaaaaaa, 1.1); // soft white light
        ambLight.position.set(12, 18, 15);
        scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // const helper = new THREE.CameraHelper( camera.clone() );
        // scene.add( helper );



        var bbox = new THREE.Box3().setFromObject(cube);
        let pos = canvas2DToWorld3D(canvas.width / 2, 400/2, camera, canvas, scene);
        
        // scene.add(new THREE.PlaneHelper( new THREE.Plane().setFromNormalAndCoplanarPoint(camera.position, new THREE.Vector3(0,0,0)), 1, 0xffff00 ));
        // console.log(pos)
        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 16), new THREE.MeshPhongMaterial({ color: 0x0000ff }))
        // sphere.position.set(pos.x, pos.y, pos.z);
        // scene.add(sphere)

        createEffect(() => {
            // Only render if reasonable input values
            if ([props.width, props.height, props.channels].some(val => !val)) {
                cube.visible = false;
                return;
            }
            else {
                cube.visible = true;
            }



            let newcube = getCube(props.width, props.height, props.channels, props.colors, props.borderColor)
            cube.remove(...cube.children);
            cube.add(...newcube.children);
            cube.position.set(pos.x, pos.y, pos.z);
            cube.scale.set(0.4, 0.4, 0.4)

        });
    })

    return <div ref={elem} style={{ "width": "fit-content", margin: "0 auto" }} />;
}