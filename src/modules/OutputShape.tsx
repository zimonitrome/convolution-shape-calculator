import { createEffect, createSignal } from "solid-js";
import CodeParamGroup from "./CodeParamGroup";
import CodeParamReadOnly from "./CodeParamReadOnly";
import Container from "./Container";
import { dilation, kernelSize, layerType, outputChannels, outputPadding, padding, stride } from "./Conv2d";
import { inputHeight, inputWidth } from "./InputShape";

export const [outputHeight, setOutputHeight] = createSignal(NaN);
export const [outputWidth, setOutputWidth] = createSignal(NaN);

export default (props: any) => {

    createEffect(() => {
        // Main calculation of the app
        const outSize = (inSize: number) =>
            layerType() === "ConvTranspose2d"
                ? (inSize - 1) * stride() - 2 * padding() + dilation() * (kernelSize() - 1) + outputPadding() + 1
                : Math.floor((inSize + 2 * padding() - dilation() * (kernelSize() - 1) - 1) / stride() + 1);

        let outHeight = outSize(inputHeight());
        setOutputHeight(outHeight > 0 ? outHeight : NaN);
        let outWidth = outSize(inputWidth());
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