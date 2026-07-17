import { createEffect, mergeProps, onMount } from 'solid-js';
import * as THREE from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { isDark } from './theme';
import { outputWidth, outputHeight } from './OutputShape';
import { bias, dilation, kernelSize, layerType, outputChannels, padding, stride } from './Conv2d';
import { Tensor } from './threejs/Tensor';
import { canvas2DToWorld3D, clamp, getBboxVertecies, rotateAboutPoint, toRadians } from './threejs/utils';
import { Conv2D } from './threejs/Conv2D';
import { step } from './TimelineControl';


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
        const height = 1567;
        const aspect = width / height;
        const scene = new THREE.Scene();
        var d = 1;
        let camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 100000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        // Keep the pre-r152 look: colors were authored without color management
        THREE.ColorManagement.enabled = false;
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

        renderer.setClearColor(0x000000, 0);


        renderer.setSize(width, height);

        var canvas = renderer.domElement;
        elem!.appendChild(canvas);

        camera.lookAt(new THREE.Vector3(0, 0, 0));

        const updateCanvas = () => {
            const canvasColumn = document.getElementById("canvasColumn")!;
            const pipeline = document.getElementById("pipeline")!;

            let width = canvasColumn.clientWidth;
            let height = pipeline.clientHeight;

            if (!renderer.getSize(new THREE.Vector2()).equals(new THREE.Vector2(width, height))) {
                let aspect = width / height;

                camera.left = -d * aspect;
                camera.right = d * aspect;
                camera.top = d;
                camera.bottom = -d;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            }

            // Place each shape at the vertical center of its row div,
            // measured in canvas pixels and unprojected into the scene
            const canvasRect = canvas.getBoundingClientRect();
            const rowCenter = (id: string) => {
                const rect = document.getElementById(id)!.getBoundingClientRect();
                return canvas2DToWorld3D(canvas.width / 2, rect.top + rect.height / 2 - canvasRect.top, camera, canvas);
            };
            inputCube.position.copy(rowCenter("inputContainer"));
            conv.position.copy(rowCenter("convContainer"));
            outputCube.position.copy(rowCenter("outputContainer"));
        }

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
        document.addEventListener('touchmove', e => move(e, e.touches[0].clientX, e.touches[0].clientY), { passive: false });

        canvas.addEventListener('pointerdown', e => {
            e.preventDefault();
            const x = e.clientX;
            const y = e.clientY;
            if (!didHoverSomething(e, x, y))
                return;

            mouseDown = true;
            mouseX = x;
            mouseY = y;
        }, false);

        document.addEventListener('pointerup', e => {
            mouseDown = false;
        });
        document.addEventListener('touchend', e => {
            mouseDown = false;
        });

        // Hover objects
        const raycaster = new THREE.Raycaster();
        let hoveredTensors: Array<Tensor> = [];
        function onHover(e: Event, x: number, y: number) {
            // Fix element offset
            let rect = (e.target as HTMLElement).getBoundingClientRect();
            raycaster.setFromCamera(new THREE.Vector2(
                ((x - rect.left) / canvas.width) * 2 - 1,
                - ((y - rect.top) / canvas.height) * 2 + 1
            ), camera);
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

        function didHoverSomething(e: Event, x: number, y: number) {
            let rect = (e.target as HTMLElement).getBoundingClientRect();
            raycaster.setFromCamera(new THREE.Vector2(
                ((x - rect.left) / canvas.width) * 2 - 1,
                - ((y - rect.top) / canvas.height) * 2 + 1
            ), camera);
            const intersects = raycaster.intersectObject(scene, true);
            return intersects.length > 0;
        }

        canvas.addEventListener('pointermove', e => onHover(e, e.clientX, e.clientY));
        canvas.addEventListener('touchstart', e => onHover(e, e.touches[0].clientX, e.touches[0].clientY));


        // Intensities scaled by PI to match the legacy (pre-r155) lighting mode
        const ambLight = new THREE.AmbientLight(0xaaaaaa, 1.1 * Math.PI); // soft white light
        ambLight.position.set(12, 18, 15);
        scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.4 * Math.PI);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);

        let universalAngle: [number, number, number] = [toRadians(10), toRadians(25), 0];

        inputCube.scale.set(0.3, 0.3, 0.3);
        inputCube.rotation.set(...universalAngle);

        outputCube.scale.set(0.3, 0.3, 0.3);
        outputCube.rotation.set(...universalAngle);

        conv.rotation.set(...universalAngle);

        function animate() {
            updateCanvas();

            conv.update(scene, camera);

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();


        createEffect(() => {
            // The connections material survives rebuilds (update() reuses it),
            // so its color has to be set directly on theme change
            (conv.connections.material as LineMaterial).color.set(isDark() ? 0xcccccc : 0x000000);

            inputCube.assign(new Tensor({ ...props }));

            outputCube.assign(new Tensor({
                width: outputWidth(), height: outputHeight(), channels: outputChannels(),
                colors: ['#aaaacc', '#6677aa', '#ccddff', '#445577'], borderColor: "#223344"
            }));

            conv.assign(new Conv2D({
                inputTensor: inputCube, outputTensor: outputCube,
                kernelSize: kernelSize(), stride: stride(), padding: padding(), dilation: dilation(),
                bias: bias(), transposed: layerType() === "ConvTranspose2d", step: step()
            }));
            conv.update(scene, camera);
        });
    })

    return <div ref={elem} style={{ "width": "fit-content", margin: "0 auto" }} />;
}