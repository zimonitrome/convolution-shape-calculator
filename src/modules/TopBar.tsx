import { JSX } from "solid-js";
import { layerType, setLayerType, LayerType } from "./Conv2d";
import { ImagePicker } from "./ImageInput";
import { isDark, setTheme } from "./theme";

const controlStyle: JSX.CSSProperties = {
    "font": "inherit",
    "color": "inherit",
    "background": "transparent",
    "border": "1px solid #888",
    "border-radius": "0.5ch",
    "padding": "2px 8px",
    "cursor": "pointer",
};

export default () => {
    const barStyle: JSX.CSSProperties = {
        "width": "100%",
        "box-sizing": "border-box",
        "display": "flex",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "justify-content": "space-between",
        "align-items": "center",
        "gap": "15px",
        "padding": "8px 15px",
        "border-bottom": "1px solid #888",
        "font-weight": "bold",
        "font-family": "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",
        "font-size": "12pt",
    };

    return <div style={barStyle}>
        <span>Convolution Shape Calculator</span>
        <div style={{ "display": "flex", "align-items": "center", "gap": "15px" }}>
            <ImagePicker controlStyle={controlStyle} />
            <label>
                <span style={{ "opacity": 0.4 }}>layer: </span>
                <select
                    value={layerType()}
                    onInput={e => setLayerType(e.currentTarget.value as LayerType)}
                    style={controlStyle}
                >
                    <option value="Conv2d">Conv2d</option>
                    <option value="ConvTranspose2d">ConvTranspose2d</option>
                </select>
            </label>
            <button
                title="Toggle dark mode"
                onClick={() => setTheme(isDark() ? "light" : "dark")}
                style={{ ...controlStyle, "width": "4.5ch", "height": "4.5ch", "padding": 0 }}
            >
                {isDark() ? "☀" : "☾"}
            </button>
        </div>
    </div>;
}
