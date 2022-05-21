// import { Pattern } from '@svgdotjs/svg.js';
import { Container, G, Line, Pattern, Rect } from '@svgdotjs/svg.js';
import type { Svg } from '@svgdotjs/svg.js';


export function makeGridPattern(draw: Svg, colors: Array<string>, borderColor = "#000", unitSize = 10) {
    const width = colors.length

    return draw.pattern(width * unitSize, unitSize, function (add) {
        colors.forEach((color, i) => {
            let rect = new Rect({ width: unitSize, height: unitSize, x: i * unitSize, y: 0 })
            rect.fill(color).addTo(add)

            add.line((i + 1) * unitSize, 0, (i + 1) * unitSize, unitSize).stroke({ color: borderColor, width: 1 }); // Right vertical line    
        })

        add.line(0, unitSize, width * unitSize, unitSize).stroke({ color: borderColor, width: 1 }); // Bottom horizontal line
    })
}

// const callback = (group: Pattern) => {
//     colors.forEach((color, i) => {
//         const rect = new Rect({ width: unitSize, height: unitSize, x: i * unitSize, y: 0 }).fill(color)
//         const verticalLine = new Line({ x1: (i + 1) * unitSize, y1: 0, x2: (i + 1) * unitSize, y2: unitSize }).stroke({ color: borderColor, width: 1 });
//         group.add(rect).add(verticalLine)
//     })
    
//     const horizontalLone = new Line({x1: 0, y1: unitSize, x2: width * unitSize, y2: unitSize}).stroke({ color: borderColor, width: 1 }); // Bottom horizontal line
//     group.add(horizontalLone)
// }