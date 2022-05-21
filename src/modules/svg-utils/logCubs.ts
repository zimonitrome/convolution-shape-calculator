import { Pattern, Svg, G } from "@svgdotjs/svg.js"
import { grid } from "./grid"

interface logCubeAttr {
    draw: Svg,
    unitSize: number,
    h: number,
    w: number,
    c: number,
    cx: number,
    cy: number,
    patterns: [Pattern, Pattern]
}

export function logCube({ draw, unitSize = 10, h = 6, w = 8, c = 3, cx = 0, cy = 0, patterns }: logCubeAttr) {
    // Decide the drawn width/height/dept of the cube
    let h_spatial = h == 1 ? 0.35 : Math.log(h)
    let w_spatial = w == 1 ? 0.35 : Math.log(w)
    let c_spatial = c == 1 ? 0.35 : Math.log(c)

    let max_side = Math.max(h_spatial, w_spatial, c_spatial, 1.6)

    h_spatial = 20*(h_spatial / max_side)
    w_spatial = 20*(w_spatial / max_side)
    c_spatial = 20*(c_spatial / max_side)

    // Center of the cube
    let center = [cx, cy]

    // Base offset used for the center of each side of the cube
    let hw_offset = (unitSize * c_spatial / 2)
    let ch_offset = (unitSize * w_spatial / 2)
    let cw_offset = (unitSize * h_spatial / 2)

    // Center of each side of the cube
    let hw_center = [center[0] + 0.8 * hw_offset, center[1] + Math.tan(20 * (Math.PI / 180)) * 0.8 * hw_offset]
    let ch_center = [center[0] - 0.8 * ch_offset, center[1] + Math.tan(20 * (Math.PI / 180)) * 0.8 * ch_offset]
    let cw_center = [center[0], center[1] - cw_offset]

    // Get the rectangle/grid of each side
    let hw = grid({ unitSize: unitSize, width: w, height: h, cx: hw_center[0], cy: hw_center[1], pattern: patterns[0] });
    let ch = grid({ unitSize: unitSize, width: c, height: h, cx: ch_center[0], cy: ch_center[1], pattern: patterns[1] });
    let cw = grid({ unitSize: unitSize, width: c, height: w, cx: cw_center[0], cy: cw_center[1], pattern: patterns[1] });

    // Rotate sides to align the patterns correctly
    hw.transform({
        scale: [w_spatial / w, h_spatial / h],
    }, true)
    ch.transform({
        scale: [-c_spatial / c, h_spatial / h],
    }, true)
    cw.transform({
        rotate: -90
    }, true)
        .transform({
            scale: [w_spatial / w, c_spatial / c],
        }, true)

    // Skew the sides make them look like a cube
    hw.transform({
        skew: [0, -20],
        scaleX: 0.8
    }, true)

    ch.transform({
        skew: [0, 20],
        scaleX: 0.8
    }, true)

    cw.transform({
        scale: [0.8, Math.tan(20 * (Math.PI / 180)) * 0.8],
    }, true).transform({
        skew: [90 - 20, -20]
    }, true)

    
    // Add the text to all sides of the cube
    let fontSettings = {
        weight: "bold",
        family: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace', 
        size: 24,
    }

    let c_text = draw
        .text(`c = ${c}`)
        .font(fontSettings)
        .center(ch_center[0]-40, ch_center[1]+cw_offset+40)

    let w_text = draw
        .text(`w = ${w}`)
        .font(fontSettings)
        .center(hw_center[0]+40, hw_center[1]+cw_offset+40)

    let h_text = draw
        .text(`h = ${h}`)
        .font({...fontSettings, anchor:"start"})
        // .anchor("left center")
        .move(hw_center[0]+(center[0]-ch_center[0])+30, hw_center[1]+(center[1]-ch_center[1] - fontSettings.size / 2))

    // Group the drawn objects
    let cube = new G().add(hw).add(ch).add(cw).add(c_text).add(w_text).add(h_text)

    return cube
}