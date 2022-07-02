import { createEffect, mergeProps, onMount } from 'solid-js';
import * as THREE from "three";
import { outputWidth, outputHeight } from './OutputShape';
import { dilation, kernelSize, outputChannels, padding, stride } from './Conv2d';
import { Tensor } from './threejs/Tensor';
import { canvas2DToWorld3D, clamp, getBboxVertecies, rotateAboutPoint, toRadians } from './threejs/utils';
import { Conv2D } from './threejs/Conv2D';


interface Cube3DProps {
    channels: number;
    height: number;
    width: number;
    colors?: Array<string>;
    borderColor?: string;
}

export const ThreeCanvas = (inProps: Cube3DProps) => {
    const props = mergeProps({ colors: ['#FCBF49'], borderColor: "#003049" }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const width = 550;
        const height = 1367;
        const aspect = width / height;
        const scene = new THREE.Scene();
        var d = 1;
        let camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 100000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setClearColor(0x000000, 0);


        renderer.setSize(width, height);

        var canvas = renderer.domElement;
        elem!.appendChild(canvas);

        camera.lookAt(new THREE.Vector3(0, 0, 0));


        const updateCanvas = async () => {
            let width = elem!.parentElement!.clientWidth;
            let height = elem!.parentElement!.clientHeight;
            let aspect = width / height;

            camera.left = -d * aspect;
            camera.right = d * aspect;
            camera.top = d;
            camera.bottom = -d;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        }
        window.addEventListener("resize", updateCanvas, false);


        let inputCube = new Tensor({});
        scene.add(inputCube);

        let outputCube = new Tensor({});
        scene.add(outputCube);

        let conv = new Conv2D({});
        conv.scale.multiplyScalar(.3);
        scene.add(conv);

        // Handle rotation
        var mouseDown = false,
            mouseX = 0,
            mouseY = 0;

        function move(e: Event, x: number, y: number) {
            // Rotation
            if (!mouseDown) { return }
            e.preventDefault();
            var deltaX = x - mouseX,
                deltaY = y - mouseY;
            mouseX = x;
            mouseY = y;

            inputCube.rotation.y = inputCube.rotation.y + toRadians(deltaX);
            inputCube.rotation.x = clamp(inputCube.rotation.x + toRadians(deltaY), -Math.PI / 2.01, Math.PI / 2.01);

            conv.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z);
            outputCube.rotation.set(inputCube.rotation.x, inputCube.rotation.y, inputCube.rotation.z);
        }

        document.addEventListener('pointermove', e => move(e, e.clientX, e.clientY), false);
        document.addEventListener('touchmove', e => move(e, e.touches[0].clientX, e.touches[0].clientY), {passive: false});

        canvas.addEventListener('pointerdown', e => {
            e.preventDefault();
            mouseDown = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, false);

        document.addEventListener('pointerup', e => {
            mouseDown = false;
        });
        document.addEventListener('touchend', e => {
            mouseDown = false;
        });

        // Hover objects
        function onHover(e: Event, x: number, y: number) {
            // Fix element offset
            let rect = (e.target as HTMLElement).getBoundingClientRect();
            raycaster.setFromCamera({
                x: ((x - rect.left) / canvas.width) * 2 - 1,
                y: - ((y - rect.top) / canvas.height) * 2 + 1
            }, camera);
            const intersects = raycaster.intersectObject(scene, true);
            let newTensors: Array<Tensor> = [];
            for (const intersect of intersects) {
                if (intersect.object instanceof THREE.Mesh && intersect.object.parent instanceof Tensor)
                    newTensors.push(intersect.object.parent);
            }
            for (const tensor of hoveredTensors)
                tensor.toggleLabels(false);
            for (const tensor of newTensors)
                tensor.toggleLabels(true);
            hoveredTensors = newTensors;
        }

        const raycaster = new THREE.Raycaster();
        let hoveredTensors: Array<Tensor> = [];
        canvas.addEventListener('pointermove', e => onHover(e, e.clientX, e.clientY));
        canvas.addEventListener('touchstart', e => onHover(e, e.touches[0].clientX, e.touches[0].clientY));


        const ambLight = new THREE.AmbientLight(0xaaaaaa, 1.1); // soft white light
        ambLight.position.set(12, 18, 15);
        scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);

        function animate() {
            conv.update(scene, camera);

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        let pos;
        let universalAngle: [number, number, number] = [toRadians(10), toRadians(25), 0];

        // // TRANSFORMING TODO: MOVE!!!!
        pos = canvas2DToWorld3D(canvas.width / 2, 400 + 80 + 400 + 80 + 400 / 2, camera, canvas);
        outputCube.position.set(pos.x, pos.y, pos.z);
        outputCube.scale.set(0.3, 0.3, 0.3);
        outputCube.rotation.set(...universalAngle);

        pos = canvas2DToWorld3D(canvas.width / 2, 400 / 2, camera, canvas);
        inputCube.position.set(pos.x, pos.y, pos.z);
        inputCube.scale.set(0.3, 0.3, 0.3);
        inputCube.rotation.set(...universalAngle);

        pos = canvas2DToWorld3D(canvas.width / 2, 400 + 80 + 400 / 2, camera, canvas);
        conv.position.set(pos.x, pos.y, pos.z);
        conv.rotation.set(...universalAngle);


        createEffect(() => {
            updateCanvas();

            inputCube.assign(new Tensor({ ...props }));


            outputCube.assign(new Tensor({
                width: outputWidth(), height: outputHeight(), channels: outputChannels(),
                colors: ['#aaaacc', '#6677aa', '#ccddff', '#445577'], borderColor: "#223344"
            }));

            conv.assign(new Conv2D({
                inputTensor: inputCube, outputTensor: outputCube,
                kernelSize: kernelSize(), stride: stride(), padding: padding(), dilation: dilation()
            }));
            conv.update(scene, camera);
        });
    })

    return <div ref={elem} style={{ "width": "fit-content", margin: "0 auto" }} />;
}