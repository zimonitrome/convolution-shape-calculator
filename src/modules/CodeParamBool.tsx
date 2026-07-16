import { Signal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { codeParamStyle, LabelText } from "./CodeParam";

interface CodeParamBoolProps {
    text: string;
    signal: Signal<boolean>;
}

export default (props: CodeParamBoolProps) => {
    const [getter, setter] = props.signal;

    const valueStyle: JSX.CSSProperties = {
        "width": "6ch",
        "text-align": "right",
        "display": "inline-block",
        "cursor": "pointer",
        "text-decoration": "underline dotted",
    }

    return <>
        <div style={codeParamStyle}>
            <label style={{ "cursor": "pointer" }}>
                <LabelText text={props.text} />
                <span style={valueStyle}>{getter() ? "True" : "False"}</span>
                <input type="checkbox" checked={getter()} onInput={e => setter(e.currentTarget.checked)} style={{ "display": "none" }} />
            </label>
        </div>
    </>;
}
