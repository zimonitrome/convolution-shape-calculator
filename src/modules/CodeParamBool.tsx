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
        "width": "5ch",
        "text-align": "right",
        "display": "inline-block",
    }

    return <>
        <div style={codeParamStyle}>
            <label style={{ "cursor": "pointer" }}>
                <LabelText text={props.text} />
                <input type="checkbox" checked={getter()} onInput={e => setter(e.currentTarget.checked)}
                    style={{ "cursor": "pointer", "vertical-align": "middle", "font-size": "inherit", "width": "1em", "height": "0.9em" }} />
                <span style={valueStyle}>{getter() ? "True" : "False"}</span>
            </label>
        </div>
    </>;
}
