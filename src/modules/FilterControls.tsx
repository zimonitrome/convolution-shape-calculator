import { createSignal } from "solid-js";

export const [outputChannels, setOutputChannels] = createSignal(16);
export const [kernelSize, setKernelSize] = createSignal(16);
export const [stride, setStride] = createSignal(3);
export const [padding, setPadding] = createSignal(3);
export const [dilation, setDilation] = createSignal(3);

export default (props: any) => {
    return <div>
          <input type="range" min="1" max="64" value={outputChannels()} onInput={(e) => { setOutputChannels(parseInt(e.currentTarget.value)) }}/>
          <output>{outputChannels()}</output>

          <input type="range" min="1" max="64" value={kernelSize()} onInput={(e) => { setKernelSize(parseInt(e.currentTarget.value)) }}/>
          <output>{kernelSize()}</output>

          <input type="range" min="1" max="64" value={stride()} onInput={(e) => { setStride(parseInt(e.currentTarget.value)) }}/>
          <output>{stride()}</output>

          <input type="range" min="1" max="64" value={padding()} onInput={(e) => { setPadding(parseInt(e.currentTarget.value)) }}/>
          <output>{padding()}</output>

          <input type="range" min="1" max="64" value={dilation()} onInput={(e) => { setDilation(parseInt(e.currentTarget.value)) }}/>
          <output>{dilation()}</output>
    </div>
}