import { createEffect, createSignal } from "solid-js";
import CodeParamGroup from "./CodeParamGroup";
import CodeParamReadOnly from "./CodeParamReadOnly";
import Container from "./Container";
import { dilation, kernelSize, outputChannels, padding, stride } from "./Conv2d";
import { inputHeight, inputWidth } from "./InputShape";
import { SvgCube } from "./SvgCube";

export const [outputHeight, setOutputHeight] = createSignal(NaN);
export const [outputWidth, setOutputWidth] = createSignal(NaN);

export default (props: any) => {

    createEffect(() => {
        // Main calculation of the app
        let outHeight = Math.floor(((inputHeight() + (2 * padding()) - (dilation() * (kernelSize() - 1)) - 1) / stride()) + 1);
        setOutputHeight(outHeight > 0 ? outHeight : NaN);
        let outWidth = Math.floor((inputWidth() + 2 * padding() - dilation() * (kernelSize() - 1) - 1) / stride() + 1);
        setOutputWidth(outWidth > 0 ? outWidth : NaN);
    })

    return <Container>
        <CodeParamGroup>
            output.shape = (
            <CodeParamReadOnly text="channels" value={outputChannels()} />,&nbsp
            <CodeParamReadOnly text="height" value={outputHeight()} />,&nbsp
            <CodeParamReadOnly text="width" value={outputWidth()} />
            )
        </CodeParamGroup>
        <SvgCube channels={outputChannels()} height={outputHeight()} width={outputWidth()} colors={['#aaaacc', '#6677aa', '#ccddff', '#445577']} borderColor={"#223344"} />
    </Container>
}