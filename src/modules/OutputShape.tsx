import { createEffect, createSignal } from "solid-js";
import CodeParamGroup from "./CodeParamGroup";
import CodeParamReadOnly from "./CodeParamReadOnly";
import Container from "./Container";
import { dilation, kernelSize, outputChannels, padding, stride } from "./Conv2d";
import { inputHeight, inputWidth } from "./InputShape";

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
            <CodeParamReadOnly text="channels" value={outputChannels()} />
            <CodeParamReadOnly text="height" value={outputHeight()} />
            <CodeParamReadOnly text="width" value={outputWidth()} />
            )
        </CodeParamGroup>
        <div style={{ "min-width": "550px", "min-height": "400px" }} />
    </Container>
}