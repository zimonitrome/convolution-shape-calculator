import { G, SVG } from '@svgdotjs/svg.js';
import { createEffect, mergeProps, onMount } from 'solid-js';
import { inputChannels, inputHeight, inputWidth } from './InputShape';
import { logCube } from './svg-utils/logCubs';
import { makeGridPattern } from './svg-utils/patterns';

interface SvgCubeProps {
    channels: number;
    height: number;
    width: number;
    colors?: Array<string>;
    borderColor?: string;
}

export const SvgCube = (inProps: SvgCubeProps) => {
    const props = mergeProps({ colors: ['#FCBF49'], borderColor: "#003049" }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const draw = SVG().addTo(elem!).size("550px", "400px");
        const frontPattern = makeGridPattern(draw, [props.colors[0]], props.borderColor, 10);
        const sidePattern = makeGridPattern(draw, props.colors, props.borderColor, 10);
        let myLogCube: G | undefined = undefined;

        createEffect(() => {
            if (!!myLogCube)
                myLogCube.remove();
                
            let drawViewShape = draw.node.getBoundingClientRect()
            if (![props.channels, props.height, props.width].every(n => n >= 1))
                return;
            myLogCube = logCube({ draw, unitSize: 10, c: props.channels, h: props.height, w: props.width, cx: drawViewShape.width / 2, cy: drawViewShape.height / 2, patterns: [frontPattern, sidePattern] });
            myLogCube.addTo(draw);
        });
    })

    return <div ref={elem} />;
}