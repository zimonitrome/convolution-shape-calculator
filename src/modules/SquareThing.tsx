import { G, SVG } from '@svgdotjs/svg.js';
import { createEffect, from, observable, onMount } from 'solid-js';
import { inputChannels, inputHeight, inputWidth, setInputWidth } from './InputControls';
import { logCube } from './svg-utils/logCubs';
import { makeGridPattern } from './svg-utils/patterns';

export const SquareThing = (props: any) => {
    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const draw = SVG().addTo(elem!).size("550px", "400px");
        const frontPattern = makeGridPattern(draw, ['#FCBF49'], "#003049", 10);
        const sidePattern = makeGridPattern(draw, ['#FCBF49', '#F77F00', '#EAE2B7', '#D62828'], "#003049", 10);
        let myLogCube: G | undefined = undefined;

        createEffect(() => {
            if (!!myLogCube)
                myLogCube.remove();
                
            let drawViewShape = draw.node.getBoundingClientRect() //elem.getBoundingClientRect()
            console.log(drawViewShape)
            myLogCube = logCube({ draw, unitSize: 10, h: inputHeight(), w: inputWidth(), c: inputChannels(), cx: drawViewShape.width / 2, cy: drawViewShape.height / 2, patterns: [frontPattern, sidePattern] });
            myLogCube.addTo(draw);
        });
    })

    return <div ref={elem} />;
}