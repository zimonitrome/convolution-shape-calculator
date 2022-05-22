import { JSX } from "solid-js";

export default (props: any) => {
    const codeStyle: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "justify-content": "center",
        "white-space": "nowrap",
        "font-size": "18pt",
    }

    return <div style={codeStyle}>
        {props.children}
    </div>
}