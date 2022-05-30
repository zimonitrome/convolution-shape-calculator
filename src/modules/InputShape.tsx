import { createSignal, onMount } from "solid-js";
import CodeParam from "./CodeParam";
import CodeParamGroup from "./CodeParamGroup";
import Container from "./Container";
import { Cube3D } from "./Cube3D";

export const [inputWidth, setInputWidth] = createSignal(16);
export const [inputHeight, setInputHeight] = createSignal(16);
export const [inputChannels, setinputChannels] = createSignal(3);

export default (props: any) => {
    onMount(() => {
        const app = document.getElementById("App")!;
        const long = document.getElementById("long")!;

        new ResizeObserver(() => {
            long.style.height = `${app.clientHeight}px`;
        }).observe(app);
        // setTimeout(() => {
        //     document.getElementById("long")!.style.height = `${document.getElementById("App")?.clientHeight}px`;

        // }, 1000)
    });

    return <Container>
        {/* <div style={{"flex-grow": 1}}> */}
        <CodeParamGroup>
            input.shape = (
            <CodeParam text="channels" min={1} max={1024} scaling={"pow2"} signal={[inputChannels, setinputChannels]} />,&nbsp
            <CodeParam text="height" min={1} max={1024} scaling={"pow2"} signal={[inputHeight, setInputHeight]} />,&nbsp
            <CodeParam text="width" min={1} max={1024} scaling={"pow2"} signal={[inputWidth, setInputWidth]} />
            )
        </CodeParamGroup>
        {/* </div> */}
        <div style={{ "min-width": "550px", "min-height": "400px"}}>
            <div id="long" style={{ "position": "absolute", "min-width": "550px", "outline": "2px solid blue"}}>
                <Cube3D channels={inputChannels()} height={inputHeight()} width={inputWidth()} colors={['#FCBF49', '#F77F00', '#EAE2B7', '#D62828']} borderColor={"#003049"} />
                {/* <Cube3D channels={inputChannels()} height={inputHeight()} width={inputWidth()} colors={['#FCBF49', '#F77F00', '#EAE2B7', '#D62828']} borderColor={"#003049"} /> */}
            </div>
        </div>
        {/* <Cube3D channels={inputChannels()} height={inputHeight()} width={inputWidth()} colors={['#FCBF49', '#F77F00', '#EAE2B7', '#D62828']} borderColor={"#003049"} /> */}
    </Container>
}