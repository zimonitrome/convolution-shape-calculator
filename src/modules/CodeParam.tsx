import { JSX, mergeProps, Signal } from "solid-js";

interface CodeParamProps {
    text: string;
    signal: Signal<number>;
    min?: number;
    max?: number;
    scaling?: "pow2" | "linear";
}

export const codeParamStyle: JSX.CSSProperties = {
    "display": "flex",
    "flex-direction": "column",
    "width": "fit-content",
}

export const numberInputStyle: JSX.CSSProperties = {
    "border-style": "hidden",
    "background-color": "#00000000",
    "font": "inherit",
    "width": "5ch",
    // "direction": "rtl"
    "text-align": "right",
    "flex-basis": "100%"
}

export default (inProps: CodeParamProps) => {
    const props = mergeProps({ min: 0, max: 10, step: 1, scaling: "linear" }, inProps)

    let scale: (val: number) => number;
    let invScale: (val: number) => number;
    switch (props.scaling) {
        case "pow2":
            scale = (val: number) => Math.pow(2, val);
            invScale = (val: number) => Math.log2(val);
            break;
        default:
            scale = (val: number) => val;
            invScale = (val: number) => val;
            break;
    }

    const getter =
        () => props.signal[0]();
    const setter =
        (val: number) => props.signal[1](val);

    return <>
        <div style={codeParamStyle}>
            <label><span style={{ opacity: 0.5 }}>{props.text}: </span><input type="number" min={props.min} max={props.max} style={numberInputStyle} value={getter()} onInput={e => setter(parseInt(e.currentTarget.value))} /></label>
            <input type="range" min={invScale(props.min)} max={invScale(props.max)} step="1" value={invScale(getter())} onInput={e => setter(scale(parseInt(e.currentTarget.value)))}></input>
        </div>
    </>;
}