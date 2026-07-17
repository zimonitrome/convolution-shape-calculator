import { createEffect, createSignal, Show } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

// Uploaded images are downscaled to this before the bicubic pass so a phone
// photo doesn't sit in memory at full resolution
const MAX_SOURCE_SIDE = 512;

// Default image: a simple scene with edges in every orientation and strong
// color regions, so the edge/color-opponent filters have something to bite on
function makeDefaultImage(): ImageData {
    const S = 128;
    const canvas = document.createElement("canvas");
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext("2d")!;

    // Sky
    const sky = ctx.createLinearGradient(0, 0, 0, S);
    sky.addColorStop(0, "#5aa9dd");
    sky.addColorStop(1, "#d9eefa");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, S, S);

    // Sun
    ctx.fillStyle = "#ffd94a";
    ctx.beginPath();
    ctx.arc(100, 28, 15, 0, 2 * Math.PI);
    ctx.fill();

    // Hill
    ctx.fillStyle = "#5aa054";
    ctx.beginPath();
    ctx.ellipse(64, 150, 100, 60, 0, 0, 2 * Math.PI);
    ctx.fill();

    // House
    ctx.fillStyle = "#c94f42";
    ctx.fillRect(32, 60, 36, 32);
    ctx.fillStyle = "#5b3a29";
    ctx.beginPath();
    ctx.moveTo(26, 60);
    ctx.lineTo(74, 60);
    ctx.lineTo(50, 38);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#4a2f1f";
    ctx.fillRect(46, 74, 10, 18);
    ctx.fillStyle = "#ffe9a8";
    ctx.fillRect(36, 66, 8, 8);

    return ctx.getImageData(0, 0, S, S);
}

export type ImageChoice = "none" | "default" | "custom";

export const [imageChoice, setImageChoice] = createSignal<ImageChoice>("none");
const [customImage, setCustomImage] = createSignal<ImageData | undefined>(undefined);

let defaultImage: ImageData | undefined;

// The image shown on the tensors, or undefined when overlays are off
export const sourceImage = (): ImageData | undefined => {
    switch (imageChoice()) {
        case "none": return undefined;
        case "custom": return customImage() ?? (defaultImage ??= makeDefaultImage());
        default: return defaultImage ??= makeDefaultImage();
    }
};

function imageDataFromBitmap(bitmap: ImageBitmap): ImageData {
    const scale = Math.min(1, MAX_SOURCE_SIDE / Math.max(bitmap.width, bitmap.height));
    const w = Math.max(1, Math.round(bitmap.width * scale));
    const h = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(bitmap, 0, 0, w, h);
    return ctx.getImageData(0, 0, w, h);
}

// Compact picker for the top bar: none by default, the built-in image when
// enabled, or an uploaded one
export const ImagePicker = (props: { controlStyle: JSX.CSSProperties }) => {
    let fileInput: HTMLInputElement | undefined;
    let thumb: HTMLCanvasElement | undefined;

    createEffect(() => {
        const img = sourceImage();
        if (!img || !thumb) return;
        const ctx = thumb.getContext("2d")!;
        const tmp = document.createElement("canvas");
        tmp.width = img.width;
        tmp.height = img.height;
        tmp.getContext("2d")!.putImageData(img, 0, 0);
        // Cover-fit the thumbnail
        const scale = Math.max(thumb.width / img.width, thumb.height / img.height);
        const w = img.width * scale, h = img.height * scale;
        ctx.clearRect(0, 0, thumb.width, thumb.height);
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(tmp, (thumb.width - w) / 2, (thumb.height - h) / 2, w, h);
    });

    function onSelect(e: Event & { currentTarget: HTMLSelectElement }) {
        const value = e.currentTarget.value as ImageChoice;
        if (value === "custom" && customImage() === undefined) {
            // Snap the select back until a file actually loads
            e.currentTarget.value = imageChoice();
            fileInput!.click();
            return;
        }
        setImageChoice(value);
    }

    async function onFile(e: Event & { currentTarget: HTMLInputElement }) {
        const file = e.currentTarget.files?.[0];
        e.currentTarget.value = "";
        if (!file) return;
        try {
            const bitmap = await createImageBitmap(file);
            setCustomImage(imageDataFromBitmap(bitmap));
            setImageChoice("custom");
            bitmap.close();
        } catch {
            // Not a decodable image; keep the current one
        }
    }

    return <label style={{ "display": "flex", "align-items": "center", "gap": "1ch" }}>
        <span style={{ "opacity": 0.4 }}>image: </span>
        <select value={imageChoice()} onInput={onSelect} style={props.controlStyle}>
            <option value="none">none</option>
            <option value="default">default</option>
            <option value="custom">custom…</option>
        </select>
        <Show when={sourceImage()}>
            <canvas
                ref={thumb}
                width={34}
                height={34}
                title="Click to upload a custom image"
                onClick={() => fileInput!.click()}
                style={{
                    "cursor": "pointer",
                    "outline": "1px solid #888",
                    "border-radius": "0.5ch",
                    "display": "block",
                }}
            />
        </Show>
        <input
            ref={fileInput}
            type="file"
            accept="image/*"
            style={{ "display": "none" }}
            onChange={onFile}
        />
    </label>;
};
