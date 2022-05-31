import { createEffect, mergeProps, onMount } from 'solid-js';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry";
import { Float32BufferAttribute, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Uint16BufferAttribute } from 'three';
import { outputWidth, outputHeight } from './OutputShape';
import { dilation, kernelSize, outputChannels, padding, stride } from './Conv2d';
import { Tensor } from './threejs/Tensor';
import { canvas2DToWorld3D, getBboxVertecies, rotateAboutPoint, toRadians } from './threejs/utils';

interface Cube3DProps {
    channels: number;
    height: number;
    width: number;
    colors?: Array<string>;
    borderColor?: string;
}

function getConv2d(inputChannels: number, outputChannels: number, kernelSize: number, stride: number, padding: number, dilation: number) {
    const group = new THREE.Group();

    // TODO: Break out into frustum class
    let preGeometry = new THREE.CylinderGeometry(1 / Math.sqrt(2), 0.7 / Math.sqrt(2), 1, 4, 1); // size of top can be changed
    preGeometry.rotateY(Math.PI / 4);
    let geometry = preGeometry.toNonIndexed(); // removes shared vertices
    geometry.computeVertexNormals(); // normals will be 'flat' normals
    let mesh = new THREE.Mesh(geometry, new MeshStandardMaterial({ color: 0xff0000, opacity: 0.6, transparent: true, side: THREE.BackSide }));
    // mesh.scale.set( 1.5, 1, 1 );
    mesh.scale.multiply(new THREE.Vector3(1, 1, 1.5));
    mesh.renderOrder = -1;
    group.add(mesh);


    let cube = new Tensor({
        width: kernelSize, height: kernelSize, channels: inputChannels,
        colors: ["#E22030", "#00AEAC", "#136371", "#F2B995"], borderColor: "#1E3A4B",
        labels: false
    });
    cube.scale.multiplyScalar(0.7);
    cube.renderOrder = 1;
    group.add(cube);


    return group

}

function getThinBox({ w = 1, h = 1, d = 1 }) {
    let boxgeom = new THREE.BoxGeometry(w, h, d);
    let edgesgeom = new THREE.EdgesGeometry(boxgeom);
    var mat = new THREE.LineBasicMaterial({
        color: 0x000000,
    });
    return new THREE.LineSegments(edgesgeom, mat)
}

function getBox({ w = 1, h = 1, d = 1, linewidth = 0.002, aspect = 1 }) {
    let boxgeom = new THREE.BoxGeometry(w, h, d);
    let edgesgeom = new THREE.EdgesGeometry(boxgeom);

    let lines = new LineSegmentsGeometry().fromEdgesGeometry(edgesgeom);
    let borderColors = [];
    for (let i = 0; i < lines.attributes.instanceStart.count; i++) {
        borderColors.push(1, 1, 1, 1, 1, 1)
    }
    lines.setColors(borderColors);
    var mat = new LineMaterial({
        color: new THREE.Color(0x000000).getHex(),
        linewidth: linewidth,
        vertexColors: true,
        worldUnits: false,
        resolution: new THREE.Vector2(1 * aspect, 1)
    });
    return new THREE.Mesh(lines, mat)
}

function getCubeBox({ cubeW = 1, cubeH = 1, cubeC = 1, cubeScale = 0.3, cubeCenter = new THREE.Vector3(0, 0, 0), wSpan = [0, 1], hSpan = [0, 1], cSpan = [0, 1], aspect = 1, selfScale = 0.05 }) {
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

    let box = getBox({ w: Math.abs(boxFromW - boxToW) + 0.01, h: Math.abs(boxFromH - boxToH) + 0.01, d: Math.abs(boxFromC - boxToC) + 0.01, aspect: aspect });

    // box.position.set((boxFromW + boxToW) / 2, (boxFromH + boxToH) / 2, (boxFromC + boxToC) / 2);
    box.position.set(cubeLeftTopBack.x - (boxFromW - boxToW) / 2, cubeLeftTopBack.y + (boxFromH - boxToH) / 2, cubeLeftTopBack.z - (boxFromC - boxToC) / 2);
    // box.position.set(cubeCenter.x, cubeCenter.y, cubeCenter.z);
    // box.scale.add(new THREE.Vector3(0.1, 0.1, 0.1))
    // box.scale.x

    group.add(box);

    return box;
}

export const Cube3D = (inProps: Cube3DProps) => {
    const props = mergeProps({ colors: ['#FCBF49'], borderColor: "#003049" }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const width = 550;
        const height = 1367;
        const aspect = width / height;
        const scene = new THREE.Scene();
        var d = 1;
        let camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 100000);
        // const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        const updateCanvas = () => {
            let width = elem!.parentElement!.clientWidth;
            let height = elem!.parentElement!.clientHeight;
            let aspect = width / height;

            camera.left = -d * aspect;
            camera.right = d * aspect;
            camera.top = d;
            camera.bottom = -d;
            camera.updateProjectionMatrix();
            // camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 100000);

            renderer.setSize(width, height);
        }
        window.addEventListener("resize", updateCanvas, false);

        renderer.setClearColor(0x000000, 0);


        renderer.setSize(width, height);

        var canvas = renderer.domElement
        elem!.appendChild(canvas);

        camera.position.set(-20, 10, 20);
        camera.lookAt(new THREE.Vector3(0, 0, 0));



        let inputCube = new Tensor({});
        scene.add(inputCube);


        let conv = getConv2d(1, 1, 1, 1, 1, 1);
        conv.scale.multiplyScalar(.3)
        scene.add(conv);


        let outputCube = new Tensor({});
        scene.add(outputCube);


        // const controls = new ObjectControls(camera, renderer.domElement, [cube, ...cube.children]);
        // const controls = new OrbitControls(camera, renderer.domElement);


        var mouseDown = false,
            mouseX = 0,
            mouseY = 0;

        document.addEventListener('mousemove', function (evt) {
            if (!mouseDown) { return }
            evt.preventDefault();
            var deltaX = evt.clientX - mouseX,
                deltaY = evt.clientY - mouseY;
            mouseX = evt.clientX;
            mouseY = evt.clientY;

            rotateAboutPoint(inputCube, inputCube.position.clone(), new THREE.Vector3(0, 1, 0), toRadians(deltaX), false)
            rotateAboutPoint(inputCube, inputCube.position.clone(), new THREE.Vector3(1, 0, 0), toRadians(deltaY), false)

            conv.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z)
            outputCube.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z)
            // mesh.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z)

            selectBox.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z)
            // rotateAboutPoint(selectBox, inputCube.position.clone(), new THREE.Vector3(0, 1, 0), toRadians(deltaX), true)
            // rotateAboutPoint(selectBox, inputCube.position.clone(), new THREE.Vector3(1, 0, 0), toRadians(deltaY), true)

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

        let selectBox = getCubeBox({});
        scene.add(selectBox);



        let mesh = getThinBox({});
        mesh.scale.multiplyScalar(0.3);
        mesh.rotateY(0.1);
        scene.add(mesh);









        const ambLight = new THREE.AmbientLight(0xaaaaaa, 1.1); // soft white light
        ambLight.position.set(12, 18, 15);
        scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);



        function animate() {


            requestAnimationFrame(animate);
            renderer.render(scene, camera);

            // console.log(outputCube.position)
            mesh.geometry.attributes.position = new Float32BufferAttribute([
                0, 0, 0,
                // ...getBboxVertecies(conv.children[0]..geometry.boundingBox!)[0].toArray(),
                ...mesh.worldToLocal(selectBox.localToWorld(getBboxVertecies(selectBox.geometry.boundingBox!)[0])).toArray()
            ], 3)
        }
        animate();




        var bbox = new THREE.Box3().setFromObject(inputCube);



        createEffect(() => {
            updateCanvas();

            // Only render if reasonable input values
            if ([props.width, props.height, props.channels].some(val => !val)) {
                inputCube.visible = false;
                return;
            }
            else {
                inputCube.visible = true;
                // Update inputCube
                let newInputCube = new Tensor({...props})
                inputCube.remove(...inputCube.children);
                inputCube.add(...newInputCube.children);
                let pos = canvas2DToWorld3D(canvas.width / 2, 400 / 2, camera, canvas, scene);
                inputCube.position.set(pos.x, pos.y, pos.z);
                inputCube.scale.set(0.3, 0.3, 0.3);
            }



            scene.remove(selectBox);
            selectBox = getCubeBox({
                cubeW: props.width,
                cubeH: props.height,
                cubeC: props.channels,
                cubeCenter: inputCube.position,
                cubeScale: 0.3,
                wSpan: [0, kernelSize()],
                hSpan: [0, kernelSize()],
                cSpan: [0, props.channels],
                aspect: aspect
            });
            scene.add(selectBox);
            // selectBox.matrix = newSelectBox.matrix;
            // selectBox.geometry = newSelectBox.geometry;
            // selectBox.material = newSelectBox.material;
            // selectBox.remove(...selectBox.children);
            // selectBox.add(...newSelectBox.children);



            // Only render if reasonable input values
            if ([props.channels, outputChannels(), kernelSize(), stride()].some(val => !val)) {
                conv.visible = false;
                return;
            }
            else {
                conv.visible = true;
                // Update conv
                let newconv = getConv2d(props.channels, outputChannels(), kernelSize(), stride(), padding(), dilation());
                conv.remove(...conv.children);
                conv.add(...newconv.children);
                let pos = canvas2DToWorld3D(canvas.width / 2, 400 + 80 + 400 / 2, camera, canvas, scene);
                conv.position.set(pos.x, pos.y, pos.z);
                // conv.scale.set(0.3, 0.3, 0.3)
            }



            let pos = canvas2DToWorld3D(canvas.width / 2, 400 + 80 + 400 / 2, camera, canvas, scene);
            mesh.position.set(pos.x, pos.y, pos.z);


            // Only render if reasonable input values
            if ([outputWidth(), outputHeight(), outputChannels()].some(val => !val)) {
                outputCube.visible = false;
                return;
            }
            else {
                outputCube.visible = true;
                let newOutputCube = new Tensor({
                    width: outputWidth(), height: outputHeight(), channels: outputChannels(), 
                    colors:['#aaaacc', '#6677aa', '#ccddff', '#445577'], borderColor: "#223344"
                })
                outputCube.remove(...outputCube.children);
                outputCube.add(...newOutputCube.children);
                let pos = canvas2DToWorld3D(canvas.width / 2, 400 + 80 + 400 + 80 + 400 / 2, camera, canvas, scene);
                outputCube.position.set(pos.x, pos.y, pos.z);
                outputCube.scale.set(0.3, 0.3, 0.3)
            }



        });
    })

    return <div ref={elem} style={{ "width": "fit-content", margin: "0 auto" }} />;
}