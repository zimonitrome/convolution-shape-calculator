import { SVG } from '@svgdotjs/svg.js';
import { makeGridPattern } from './svg-utils/patterns';

export const SquareThing = (props: any) => {
    return <div ref={el => {
        const draw = SVG().addTo(el).size(300, 300);
        const inputGridPattern = makeGridPattern(draw, ['#FCBF49'], "#003049", 10)
        const rect = draw.rect(100, 100).attr({ fill: inputGridPattern });
    }}/>;
}