import { codeParamStyle, LabelText, numberInputStyle } from "./CodeParam";

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
            <label><LabelText text={props.text} /><output style={outputStyle}>{props.value}</output></label>
        </div>
    </>;
}