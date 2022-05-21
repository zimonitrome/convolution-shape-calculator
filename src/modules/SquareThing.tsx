import * as SVG from 'svgjs';

export const SquareThing = (props) => {
    const mainElement = <div></div>;

    console.log(mainElement);

    setTimeout(()=>{
        const draw = SVG(window.document.body).size(300, 300);
        const rect = draw.rect(100, 100).attr({ fill: '#f06' });
    }, 2000)

    return <></>;
}