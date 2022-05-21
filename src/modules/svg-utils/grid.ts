import { Rect, Pattern } from "@svgdotjs/svg.js"

interface gridAttr {
    unitSize: number,
    width: number,
    height: number,
    cx: number,
    cy: number,
    pattern: Pattern
}

export function grid({unitSize = 10, width = 4, height = 4, cx = 0, cy = 0, pattern} : gridAttr) {
    var rect = new Rect({
        width: unitSize * width,
        height: unitSize * height
    })
        .transform({
            position: { x: cx, y: cy },
            origin: "center center"
        })
        .fill(pattern)
        .stroke({ color: '#003049', width: 1, linecap: "round" })
        .radius(0.5)

    return rect
}