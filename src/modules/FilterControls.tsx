import { createSignal } from "solid-js";

export const [outputChannels, setOutputChannels] = createSignal(16);
export const [kernelSize, setKernelSize] = createSignal(16);
export const [stride, setStride] = createSignal(3);
export const [padding, setPadding] = createSignal(3);
export const [dilation, setDilation] = createSignal(3);

export default (props: any) => {
    return <div>
          <input type="range" min="1" max="64" value="0" onInput={(e) => { setInputWidth(parseInt(e.currentTarget.value)) }}/>
          <output>{inputWidth()}</output>
          <input type="range" min="1" max="64" onChange={setInputHeight}/>
          <output>{inputHeight()}</output>
          <input type="range" min="1" max="64" onChange={setinputChannels}/>          
          <output>{inputChannels()}</output>
    </div>
}