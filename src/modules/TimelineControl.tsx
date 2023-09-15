import { createEffect, createSignal, JSX } from "solid-js";
import { outputChannels } from "./Conv2d";
import { outputHeight, outputWidth } from "./OutputShape";

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
            interval = setInterval(() => setStep((step() + 1) % (totalSteps())), 500);
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
        if ([outputHeight(), outputChannels(), outputWidth()].some(isNaN)) {
            setTotalSteps(NaN);
            setStep(0);
            return;
        }

        setTotalSteps(outputHeight()*outputChannels()*outputWidth()-1);

        if(step() > totalSteps()) {
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
        <input type="range" min="0" max={totalSteps() || 0} id="timelineControl" value={step()} onInput={e => setStep(parseInt(e.currentTarget.value))} style={{"width": "100%"}}/>
    </div>
}