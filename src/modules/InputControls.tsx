import { createSignal, JSX, ComponentProps, mergeProps, Accessor, Signal } from "solid-js";

export const [inputWidth, setInputWidth] = createSignal(16, { equals: false });
export const [inputHeight, setInputHeight] = createSignal(16);
export const [inputChannels, setinputChannels] = createSignal(3);

interface CodeParamProps {
    text: string;
    signal: Signal<number>;
    min?: number;
    max?: number;
    step?: number;
    scaling?: "pow2" | "linear";
}

const CodeParam = (inProps: CodeParamProps) => {
    const props = mergeProps({min: 0, max: 10, step: 1, scaling: "linear"}, inProps)
    const codeParamStyle: JSX.CSSProperties = {
        "display": "flex",
        "flex-direction": "column",
        "width": "fit-content",
    }

    const inputStyle: JSX.CSSProperties = {
        "border-style": "hidden",
        "background-color": "#00000000",
        "font": "inherit",
        "width": "5ch",
        // "direction": "rtl"
        "text-align": "right"
    }

    const getter = props.signal[0];
    const setter: JSX.EventHandlerUnion<HTMLInputElement, InputEvent> = (e) => props.signal[1](parseInt(e.currentTarget.value));

    return <>
        <div style={codeParamStyle}>
            <label><span style={{ opacity: 0.5 }}>{props.text}: </span><input type="number" style={inputStyle} value={getter()} onInput={setter} /></label>
            <input type="range" min="0" max="10" step="1" value={getter()} onInput={setter}></input>
        </div>
    </>;
}

export default (props: any) => {
    const codeStyle: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "white-space": "nowrap",
        "font-size": "18pt",
    }

    return <div style={codeStyle}>
        input.shape = (
        <CodeParam text="channels" signal={[inputChannels, setinputChannels]}/>,&nbsp
        <CodeParam text="height" signal={[inputHeight, setInputHeight]}/>,&nbsp
        <CodeParam text="width" signal={[inputWidth, setInputWidth]}/>
        )
    </div>
}