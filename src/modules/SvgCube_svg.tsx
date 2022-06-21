import { G, SVG } from '@svgdotjs/svg.js';
import { createEffect, mergeProps, onMount } from 'solid-js';
import { inputChannels, inputHeight, inputWidth } from './InputShape';
import { logCube } from './svg-utils/logCubs';
import { makeGridPattern } from './svg-utils/patterns';
import * as THREE from "three";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry";
import { Line2 } from "three/examples/jsm/lines/Line2";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

interface SvgCubeProps {
    channels: number;
    height: number;
    width: number;
    colors?: Array<string>;
    borderColor?: string;
}

function getGrid(hexColors: Array<THREE.ColorRepresentation>, unitSize = 10): [Uint8Array, number, number] {
    const n_colors = hexColors.length;

    const height = unitSize;
    const width = unitSize * n_colors;
    const nPixels = height * width;

    const data = new Uint8Array(4 * nPixels);
    const colors = hexColors.map(hexColor => new THREE.Color(hexColor));

    for (let i = 0; i < nPixels; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        const stride = i * 4;

        // // Color separating lines
        // if (y == 0 || x % unitSize == 0)
        //     continue;

        const color = colors[Math.floor(x / unitSize)];
        data[stride] = 255 * color.r;
        data[stride + 1] = 255 * color.g;
        data[stride + 2] = 255 * color.b;
        data[stride + 3] = 255;
    }

    return [data, width, height];
}

function getCube(w: number, h: number, c: number, colors: Array<string>, borderColor: string) {
    let h_spatial = h == 1 ? 0.35 : Math.log(h)
    let w_spatial = w == 1 ? 0.35 : Math.log(w)
    let c_spatial = c == 1 ? 0.35 : Math.log(c)

    let max_side = Math.max(h_spatial, w_spatial, c_spatial, 1.6)

    h_spatial = (h_spatial / max_side)
    w_spatial = (w_spatial / max_side)
    c_spatial = (c_spatial / max_side)

    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(w_spatial, h_spatial, c_spatial),
        new THREE.MeshPhongMaterial({ color: borderColor })
    );


    // for (let c_ = 0; c_ <= c; c_++) {
    //     console.log(colors[c_ % colors.length]);
    //     const smallBoxMaterial = new THREE.MeshPhongMaterial({ color: colors[c_ % colors.length] })
    //     for (let h_ = 0; h_ <= h; h_++) {
    //         for (let w_ = 0; w_ <= w; w_++) {
    //             const smallBoxGeometry = new THREE.BoxGeometry(w_spatial / w, h_spatial / h, c_spatial / c);
    //             // smallBoxGeometry.setAttribute("position", new THREE.Float32BufferAttribute([w_ / w_spatial, h_ / h_spatial, c_ / c_spatial], 3));
    //             smallBoxGeometry.translate(w_ * (w_spatial / w), h_ * (h_spatial / h), c_ * (c_spatial / c));
    //             const smallCube = new THREE.Mesh(
    //                 smallBoxGeometry,
    //                 smallBoxMaterial
    //             );
    //             cube.add(smallCube);
    //         }
    //     }
    // }
    // const smallBoxGeometry = new THREE.BoxGeometry(1,1,1);
    // const smallBoxMaterial = new THREE.MeshPhongMaterial({ color: colors[0] });
    // smallBoxGeometry.translate( 0.5, 0.5, 0.5 );
    // // smallBoxGeometry.setAttribute("position", new THREE.Float32BufferAttribute([1,1,1,2,2,2], 3));
    // const smallCube = new THREE.Mesh(
    //     smallBoxGeometry,
    //     smallBoxMaterial
    // );
    // cube.add(smallCube);

    return cube
}

export const SvgCube = (inProps: SvgCubeProps) => {
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

        const renderer = new SVGRenderer();
        renderer.setClearColor(new THREE.Color(), 0);
        let controls = new OrbitControls(camera, renderer.domElement as any);
        // controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        // const renderer = new THREE.WebGLRenderer({
        //     antialias: true
        // });
        // const controls = new OrbitControls(camera, renderer.domElement);
        // renderer.setClearColor(0xDDDDDD);


        renderer.setSize(width, height);

        elem!.appendChild(renderer.domElement);


        let cube = getCube(1, 1, 1, props.colors, props.borderColor);
        scene.add(cube);


        // const ambLight = new THREE.AmbientLight(0xaaaaaa, 0.01); // soft white light
        // ambLight.position.set(12, 18, 15);
        // scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
        dirLight.position.set(12, 18, 15);
        scene.add(dirLight);
        const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.2);
        dirLight2.position.set(-20, -12, -18);
        scene.add(dirLight2);




        // Camera

        // camera.position.z = 100;
        camera.position.set(-20, 10, 20);
        camera.lookAt(scene.position);
        // cube.rotation.x = 3.14 / 4;
        // cube.rotation.y = 3.14 / 4;

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);

            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
        }
        animate();

        createEffect(() => {
            let newcube = getCube(props.width, props.height, props.channels, props.colors, props.borderColor)
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].geometry.dispose();
                cube.children[i] = newcube.children[i];
            }
            cube.geometry = newcube.geometry;
            cube.geometry.computeBoundingBox();
            // cube.geometry.computeBoundingSphere();
            cube.material = newcube.material;
        });
    })

    return <div ref={elem} />;
}