import { createEffect, createSignal, For, JSX } from "solid-js";
import { layerType, outputChannels } from "./Conv2d";
import { inputHeight, inputWidth } from "./InputShape";
import { outputHeight, outputWidth } from "./OutputShape";

// Conv2d visits every output position once per filter; ConvTranspose2d
// visits every input position once per filter
const stepsPerFilter = () =>
    layerType() === "ConvTranspose2d"
        ? inputWidth() * inputHeight()
        : outputWidth() * outputHeight();

export const [step, setStep] = createSignal(0);
export const [totalSteps, setTotalSteps] = createSignal(1);
export const [isPlaying, setPlaying] = createSignal(false);

const PlayButton = () => {
    const style: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "Segoe UI Symbol",
        "width": "3ch",
        "height": "3ch",
        "font-size": "18pt",
        "padding": 0,
        "border": "1px solid #888",
        "border-radius": "0.5ch",
    };

    let interval: number | undefined = undefined;

    function onClick() {
        setPlaying(!isPlaying());
        if (isPlaying() && interval == undefined) {
            interval = window.setInterval(() => {
                // Don't advance while the output shape is invalid:
                // (step + 1) % NaN would poison step with NaN
                if (!Number.isFinite(totalSteps())) return;
                setStep((step() + 1) % (totalSteps() + 1));
            }, 500);
        }
        else {
            clearInterval(interval);
            interval = undefined;
        }
    }

    return <button style={style} onclick={onClick}>
        <div style={{
            "transform": isPlaying() ? "scaleX(3)" : "scaleX(0.9) scaleY(0.9) translateX(3%) translateY(-5%)"
        }}>{isPlaying() ? 'ǁ' : '▶'}</div>
    </button>
}

export default (props: any) => {
    // One tick per filter, at the step where that filter starts
    const filterStartSteps = () => {
        if (!Number.isFinite(stepsPerFilter()) || !Number.isFinite(outputChannels()))
            return [];
        return Array.from({ length: outputChannels() }, (_, k) => k * stepsPerFilter());
    };

    const outerContainerStyle: JSX.CSSProperties = {
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "display": "flex",
        "flex-direction": "row",
        "align-items": "center",
        "font-size": "18pt",
        "margin": "15px"
    }
    
    createEffect(()=>{
        // The output dims must be valid in both modes for anything to render
        if ([outputHeight(), outputChannels(), outputWidth(), stepsPerFilter()].some(isNaN)) {
            setTotalSteps(NaN);
            setStep(0);
            return;
        }

        setTotalSteps(stepsPerFilter()*outputChannels()-1);

        // Negated comparison so a NaN step is also caught and reset
        if (!(step() <= totalSteps())) {
            setStep(totalSteps());
        }
    });

    return <div style={outerContainerStyle}>
        <PlayButton />
        <label for="timelineControl" style={{"display": "flex", "margin": "0 1ch"}}>
            <div style={{"width": `${totalSteps().toString().length}ch`, "text-align": "right"}}>{step()}</div>
            <div style={{"width": "3ch"}}>/</div>
            <div>{totalSteps()}</div>
        </label>
        <input type="range" min="0" max={totalSteps() || 0} id="timelineControl" list="timelineTicks" value={step()} onInput={e => setStep(parseInt(e.currentTarget.value))} style={{"width": "100%"}}/>
        <datalist id="timelineTicks">
            <For each={filterStartSteps()}>
                {startStep => <option value={startStep}></option>}
            </For>
        </datalist>
    </div>
}