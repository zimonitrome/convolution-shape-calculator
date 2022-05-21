import { createSignal } from "solid-js";

export const [inputWidth, setInputWidth] = createSignal(16);
export const [inputHeight, setInputHeight] = createSignal(16);
export const [inputChannels, setinputChannels] = createSignal(3);

export default (props: any) => {
    return <div>
          <input type="range" min="1" max="64" value={inputWidth()} onInput={(e) => { setInputWidth(parseInt(e.currentTarget.value)) }}/>
          <output>{inputWidth()}</output>
          <input type="range" min="1" max="64" value={inputHeight()} onInput={(e) => { setInputHeight(parseInt(e.currentTarget.value)) }}/>
          <output>{inputHeight()}</output>
          <input type="range" min="1" max="64" value={inputChannels()} onInput={(e) => { setinputChannels(parseInt(e.currentTarget.value)) }}/>          
          <output>{inputChannels()}</output>
    </div>
}