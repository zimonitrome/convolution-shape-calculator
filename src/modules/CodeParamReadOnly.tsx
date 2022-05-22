import { Accessor, JSX, mergeProps } from "solid-js";
import { codeParamStyle, numberInputStyle } from "./CodeParam";

interface CodeParamProps {
    text: string;
    value: number;
}

export default (props: CodeParamProps) => {
    const outputStyle = { 
        width: "4ch", 
        "margin-right": "1ch",
        display: "inline-block",
        "text-align": "right"
    }

    return <>
        <div style={codeParamStyle}>
            <label><span style={{ opacity: 0.5 }}>{props.text}: </span><output style={outputStyle}>{props.value}</output></label>
            {/* <label><span style={{ opacity: 0.5 }}>{props.text}: </span><input disabled type="number" style={numberInputStyle} value={props.value} /></label> */}
        </div>
    </>;
}