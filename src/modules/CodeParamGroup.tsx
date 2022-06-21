import { JSX } from "solid-js";

export const InnerContainer = (props: any) => {
    const innerContainerStyle: JSX.CSSProperties = {
        "display": "flex",
        "flex-wrap": "wrap",
    }

    return <div style={innerContainerStyle}>
        {props.children.map((child: any, i: number, a: Array<any>) =>
            <div style={{ "display": "flex", "flex-direction": "row" }}>
                {child}{i < (a.length - 2) ? <>,&nbsp;</> : <></>}
            </div>
        )}
    </div>
}

export default (props: any) => {
    const outerContainerStyle: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "white-space": "nowrap",
        "font-size": "18pt",
        "flex-grow": 1,
        "margin": "15px"
    }

    return <div style={outerContainerStyle}>
        {props.children[0]}
        <InnerContainer>
            {props.children.slice(1)}
        </InnerContainer>
    </div>
}