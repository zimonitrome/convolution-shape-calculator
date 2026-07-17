import { createSignal, Show } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import CodeParam from "./CodeParam";
import CodeParamBool from "./CodeParamBool";
import CodeParamGroup from "./CodeParamGroup";
import CodeParamReadOnly from "./CodeParamReadOnly";
import Container from "./Container";
import { inputChannels } from "./InputShape";

export type LayerType = "Conv2d" | "ConvTranspose2d";

export const [layerType, setLayerType] = createSignal<LayerType>("Conv2d");
export const [outputChannels, setOutputChannels] = createSignal(16);
export const [kernelSize, setKernelSize] = createSignal(3);
export const [stride, setStride] = createSignal(2);
export const [padding, setPadding] = createSignal(0);
export const [outputPadding, setOutputPadding] = createSignal(0);
export const [dilation, setDilation] = createSignal(1);
export const [bias, setBias] = createSignal(true);


const ParamsCount = () => {
    const total = () =>
        outputChannels() * inputChannels() * kernelSize() * kernelSize()
        + (bias() ? outputChannels() : 0);

    const style: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "font-size": "18pt",
        "opacity": 0.4,
        "text-align": "left",
        "white-space": "nowrap",
        "margin": "15px",
        "align-self": "flex-start",
    }

    const Term = (p: { value: number, name: string }) =>
        <span title={p.name} style={{ "cursor": "help" }}>{p.value}</span>;

    return <Show when={Number.isFinite(total())}>
        <div style={style}>
            params = <Term value={outputChannels()} name="output_channels" /> × <Term
                value={inputChannels()} name="input_channels" /> × <Term
                value={kernelSize()} name="kernel_size" /> × <Term
                value={kernelSize()} name="kernel_size" />
            <Show when={bias()}> + <Term value={outputChannels()} name="bias (one per filter)" /></Show> = {total()}
        </div>
    </Show>;
}

export default (props: any) => {
    return <Container id="convContainer">
        <div style={{ "display": "flex", "flex-direction": "column", "flex-grow": 1 }}>
        <CodeParamGroup>
            {[
                <span>{layerType()}(</span>,
                <CodeParamReadOnly text="input_channels" value={inputChannels()} />,
                <CodeParam text="output_channels" min={1} max={1024} scaling="pow2" signal={[outputChannels, setOutputChannels]} />,
                <CodeParam text="kernel_size" min={1} max={15} scaling="linear" signal={[kernelSize, setKernelSize]} />,
                <CodeParam text="stride" min={1} max={15} scaling="linear" signal={[stride, setStride]} />,
                <CodeParam text="padding" min={0} max={15} scaling="linear" signal={[padding, setPadding]} />,
                ...(layerType() === "ConvTranspose2d"
                    ? [<CodeParam text="output_padding" min={0} max={15} scaling="linear" signal={[outputPadding, setOutputPadding]} />]
                    : []),
                <CodeParam text="dilation" min={1} max={15} scaling="linear" signal={[dilation, setDilation]} />,
                <CodeParamBool text="bias" signal={[bias, setBias]} />,
                ")",
            ]}
        </CodeParamGroup>
        <ParamsCount />
        </div>
        <div style={{ "min-width": "550px", "min-height": "300px" }} />
    </Container>
}