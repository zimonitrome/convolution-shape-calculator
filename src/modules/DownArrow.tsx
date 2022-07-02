import { JSX } from "solid-js/jsx-runtime";

export default () => {
    const style: JSX.CSSProperties = {
        "margin": "-15px",
        "position": "relative",
        "z-index": 1
    };

    return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="50" style={style}>
        <g transform="matrix(1.5,0,0,1.25,-15,-6.25)">
            <rect width="10" height="30" x="25" y="5" fill="#000000"></rect>
            <polygon points="15,30 45,30 30,45" fill="#000000"></polygon>
        </g>
    </svg>;
}