import { JSX } from "solid-js";

export default (props: any) => {
    const outerContainerStyle: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "white-space": "nowrap",
        "font-size": "18pt",
    }

    const innerContainerStyle: JSX.CSSProperties = {
        "display": "flex",
        "flex-wrap": "wrap",
    }

    return <div style={outerContainerStyle}>
        {props.children[0]}
        <div style={innerContainerStyle}>
            {props.children.slice(1)}
        </div>
    </div>
}