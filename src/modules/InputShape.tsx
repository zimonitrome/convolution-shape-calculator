import { createSignal } from "solid-js";
import CodeParam from "./CodeParam";
import CodeParamGroup from "./CodeParamGroup";
import Container from "./Container";
import { SvgCube } from "./SvgCube";

export const [inputWidth, setInputWidth] = createSignal(16);
export const [inputHeight, setInputHeight] = createSignal(16);
export const [inputChannels, setinputChannels] = createSignal(3);

export default (props: any) => {
    return <Container>
        <CodeParamGroup>
            input.shape = (
            <CodeParam text="channels" min={1} max={1024} scaling={"pow2"} signal={[inputChannels, setinputChannels]} />,&nbsp
            <CodeParam text="height" min={1} max={1024} scaling={"pow2"} signal={[inputHeight, setInputHeight]} />,&nbsp
            <CodeParam text="width" min={1} max={1024} scaling={"pow2"} signal={[inputWidth, setInputWidth]} />
            )
        </CodeParamGroup>
        <SvgCube channels={inputChannels()} height={inputHeight()} width={inputWidth()} colors={['#FCBF49', '#F77F00', '#EAE2B7', '#D62828']} borderColor={"#003049"} />
    </Container>
}