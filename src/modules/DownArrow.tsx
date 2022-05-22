import { G, MatrixTransformParam, SVG } from '@svgdotjs/svg.js';
import { JSX, mergeProps, onMount } from 'solid-js';

export default (inProps: {width?: number, height?: number}) => {
    const props = mergeProps({ width: 40, height: 40 }, inProps)

    let elem: HTMLDivElement | undefined = undefined;

    onMount(() => {
        const draw = SVG().addTo(elem!).size(props.width, props.height);
        
        let group = draw.group();
        group.rect(10, 30).move(15, 0).fill("#000");
        group.polygon([[5, 25], [35, 25], [20, 40]]).fill("#000");

        group.center(props.width/2, props.height/2).scale(props.width / 40, props.height / 40)
    })

    return <div ref={elem}/>;
}