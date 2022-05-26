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

    let geometry = new THREE.BoxGeometry(w_spatial, h_spatial, c_spatial);

    // const material = new THREE.MeshMatcapMaterial({  });
    // var material = new THREE.LineBasicMaterial( { color: "blue" } );
    let material = new THREE.MeshPhongMaterial({
        color: 0xFF9800,
        specular: 0xffffff,
        shininess: 50,
        // shading: THREE.SmoothShading,
        polygonOffset: true,
        polygonOffsetFactor: 4, // positive value pushes polygon further away
        polygonOffsetUnits: 4,
        side: THREE.BackSide,
    });



    // const texture = new THREE.TextureLoader().load( 'https://i.imgur.com/84AS3MT.png' );
    // const material = new THREE.MeshMatcapMaterial( { map: texture } );

    // const loader = new SVGLoader();
    // loader.load("https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg", (data) => {
    //     console.log(data);
    // });

    // const loader = new THREE.TextureLoader();
    // var material = [
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://www.imgonline.com.ua/examples/texture-ground-tile-original.jpg")
    //     }),
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://i.pinimg.com/564x/a2/69/6a/a2696a38e19a9f79b7890c0aa3de1d7e--textures-patterns-d-texture.jpg")
    //     }),
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://i.imgur.com/84AS3MT.png")
    //     }),
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://i.imgur.com/84AS3MT.png")
    //     }),
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://i.imgur.com/84AS3MT.png")
    //     }),
    //     new THREE.MeshMatcapMaterial({
    //         map: loader.load("https://i.imgur.com/84AS3MT.png")
    //     })
    // ];

    // const colors = [0xff0000, 0x00ff00, 0x0000ff];
    const [data, width, height] = getGrid(colors);
    // console.log(texture);
    // texture.needsUpdate = true;
    // // texture.wrapS = THREE.RepeatWrapping;
    // // texture.wrapT = THREE.RepeatWrapping;
    // // texture.repeat.set(c, c);
    // // texture.transformUv(new THREE.Vector2(0.1, 0.5))
    // // texture.offset.x = 0;
    // // texture.
    // // console.log(texture);
    // texture.source.data.width = 30;

    // let material = [];
    // const nColors = colors.length;
    // const oneTileSize = 1 / nColors;
    // const rep = c * oneTileSize;
    // for (let i = 0; i <= 6; i++) {
    //     const texture = new THREE.DataTexture(data, width, height, );
    //     texture.needsUpdate = true;
    //     texture.repeat.set(rep, rep);
    //     texture.wrapS = THREE.RepeatWrapping;
    //     texture.wrapT = THREE.RepeatWrapping;
    //     switch (i) {
    //         case 0:
    //             break;
    //         case 1:
    //             // Right
    //             texture.center.set(1, -1)
    //             texture.rotation = Math.PI;
    //             break;
    //         case 2:
    //             texture.rotation = Math.PI / 2;
    //             break;
    //         case 3:
    //             // Bottom
    //             texture.center.set(-1, 1)
    //             texture.rotation = -Math.PI / 2;
    //             break;
    //         case 4: 
    //             // Front
    //             texture.repeat.set(oneTileSize, oneTileSize);
    //             break;
    //         case 5:
    //             // Back
    //             texture.repeat.set(oneTileSize, oneTileSize);
    //             texture.offset.x = ((c-1) % nColors) * oneTileSize;
    //             break;

    //         default:
    //             break;
    //     }
    //     material.push(
    //         new THREE.MeshBasicMaterial({
    //             map: texture
    //         })
    //     );
    // }


    const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // //// SVG OUTLINE
    // var geo = new THREE.EdgesGeometry(geometry); // or WireframeGeometry
    // var mat = new THREE.LineBasicMaterial({
    //     color: 0x000000,
    //     linewidth: 4,
    //     // side: 3
    // });
    // var wireframe = new THREE.LineSegments(geo, mat);
    // // wireframe.renderOrder = 1;
    // cube.add(wireframe);


    // const addLine = ( [x1, y1, z1, x2, y2, z2]: Array<number> ) => {
    //     var geometry = new THREE.BufferGeometry();
    //     // geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( [ x1, y1, z1, x2, y2, z2 ], 3 ) );
    //     geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [ x1, y1, z1, x2, y2, z2 ], 3 ) );
    //     const line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color : '#0000ff', linewidth : 5 } ) );
    //     // line.renderOrder = 1;
    //     cube.add( line );
    // }
    // addLine([-10,-10,-10, 20, 20, 20])


    // const mat = new THREE.LineBasicMaterial({
    //     color: Math.random() * 0x000000,
    //     linewidth: 10,
    //     side: THREE.FrontSide
    // });
    // // var geo = new THREE.BufferGeometry();
    // // geo.setAttribute('position', new THREE.Float32BufferAttribute([1,1,1,4,4,4], 3));
    // const line = new THREE.Line(geometry, mat);
    // line.scale.setScalar(1.2);
    // cube.add(line);


    // // // OPENGL OUTLINES
    // let edges = new THREE.EdgesGeometry(geometry);
    // let lines = new LineSegmentsGeometry().fromEdgesGeometry(edges);
    // let borderColors = [];
    // for (let i = 0; i<lines.attributes.instanceStart.count; i++) {
    //     borderColors.push(1, 1, 1, 1, 1, 1)
    // }
    // lines.setColors(borderColors);
    // var mat = new LineMaterial({
    //     color: new THREE.Color(borderColor).getHex(),
    //     // color: 0xffffff,
    //     linewidth: 0.02,
    //     vertexColors: true,
    //     worldUnits: true,

    // });
    // let outlineMesh = new THREE.Mesh(lines, mat)
    // // outlineMesh.renderOrder = 1;
    // cube.add(outlineMesh);

    // let geo = new LineGeometry().fromEdgesGeometry(edges);
    // // geo.setColors( [0xaa00bb] );
    // let matLine = new LineMaterial( {
    //     color: 0xffffff,
    //     linewidth: 5, // in world units with size attenuation, pixels otherwise
    //     vertexColors: true,
    //     //resolution:  // to be set by renderer, eventually
    //     dashed: false,
    //     alphaToCoverage: true,
    // } );
    // const line = new Line2( geo, matLine );
    // line.computeLineDistances();
    // line.scale.set( 1, 1, 1 );
    // cube.add( line );

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
            // console.log(inputChannels());
            // texture.repeat.set(props.channels, props.channels);
            // console.log(texture.repeat);

            // function updateGroupGeometry( mesh, geometry ) {
            // 	mesh.children[ 0 ].geometry.dispose();
            // 	mesh.children[ 1 ].geometry.dispose();
            // 	mesh.children[ 0 ].geometry = new WireframeGeometry( geometry );
            // 	mesh.children[ 1 ].geometry = geometry;
            // 	// these do not update nicely together if shared
            // }

            // cube.geometry.dispose();
            // cube.geometry = new THREE.BoxGeometry(props.channels, 1, 1)

            // cube.clear()
            // cube.
            // console.log(cube.children)
            // console.log(props.channels)

            let newcube = getCube(props.width, props.height, props.channels, props.colors, props.borderColor)
            for (let i = 0; i < cube.children.length; i++) {
                cube.children[i].geometry.dispose();
                cube.children[i] = newcube.children[i];
            }
            cube.geometry = newcube.geometry;
            cube.geometry.computeBoundingBox();
            // cube.geometry.computeBoundingSphere();
            cube.material = newcube.material;
            // cube = newcube;

            // cube = getCube(1, 1, 1);
            // scene.add(cube);

            // geometry.
            // geometry = new THREE.BoxGeometry(props.channels, 1, 1);
        });
    })

    return <div ref={elem} />;
}