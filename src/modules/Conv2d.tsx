import { createSignal } from "solid-js";
import CodeParam from "./CodeParam";
import CodeParamGroup from "./CodeParamGroup";
import CodeParamReadOnly from "./CodeParamReadOnly";
import Container from "./Container";
import { inputChannels } from "./InputShape";

export const [outputChannels, setOutputChannels] = createSignal(16);
export const [kernelSize, setKernelSize] = createSignal(3);
export const [stride, setStride] = createSignal(2);
export const [padding, setPadding] = createSignal(0);
export const [dilation, setDilation] = createSignal(1);


export default (props: any) => {
    return <Container>
        <CodeParamGroup>
            Conv2d(
            <CodeParamReadOnly text="input_channels" value={inputChannels()} />,&nbsp
            <CodeParam text="output_channels" min={1} max={1024} scaling="pow2" signal={[outputChannels, setOutputChannels]} />,&nbsp
            <CodeParam text="kernel_size" min={1} max={15} scaling="linear" signal={[kernelSize, setKernelSize]} />,&nbsp
            <CodeParam text="stride" min={1} max={15} scaling="linear" signal={[stride, setStride]} />,&nbsp
            <CodeParam text="padding" min={0} max={15} scaling="linear" signal={[padding, setPadding]} />,&nbsp
            <CodeParam text="dilation" min={1} max={15} scaling="linear" signal={[dilation, setDilation]} />
            )
        </CodeParamGroup>
    </Container>
}