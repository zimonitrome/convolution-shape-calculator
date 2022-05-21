// Good links 
// https://towardsdatascience.com/a-comprehensive-introduction-to-different-types-of-convolutions-in-deep-learning-669281e58215
// https://cs231n.github.io/convolutional-networks/#:~:text=Implementation%20as%20Matrix%20Multiplication

function grid({ draw, unitSize = 10, width = 4, height = 4, cx = 0, cy = 0, pattern = inputGridPattern }) {
    var rect = new SVG.Rect({
        width: unitSize * width,
        height: unitSize * height,
        fill: '#ffcfe2'
    })

    rect.transform({
        position: { x: cx, y: cy },
        origin: "center center"
    })

    rect.fill(pattern).stroke({ color: '#003049', width: 1, linecap: "round"}).radius(0.5)

    return rect
}

function cube({ draw, unitSize = 10, h = 6, w = 8, c = 3, cx = 0, cy = 0, draw_axes = false }) {
    hw_offset = (unitSize * c / 2)
    ch_offset = (unitSize * w / 2)
    cw_offset = (unitSize * h / 2)

    center = [cx, cy]

    hw_center = [center[0] + 0.8 * hw_offset, center[1] + Math.tan(20 * (Math.PI / 180)) * 0.8 * hw_offset]

    ch_center = [center[0] - 0.8 * ch_offset, center[1] + Math.tan(20 * (Math.PI / 180)) * 0.8 * ch_offset]

    cw_center = [center[0], center[1] - cw_offset]


    hw = grid({ draw: draw, unitSize: unitSize, width: w, height: h, cx: hw_center[0], cy: hw_center[1] });
    ch = grid({ draw: draw, unitSize: unitSize, width: c, height: h, cx: ch_center[0], cy: ch_center[1] });
    cw = grid({ draw: draw, unitSize: unitSize, width: w, height: c, cx: cw_center[0], cy: cw_center[1] });

    // hw.skew(0, -20)
    hw.transform({
        // translate: [hw_offset, 0],
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

    if (draw_axes) {
        draw.line(...center, ...ch_center)
            .stroke({ color: '#f00', width: 4, linecap: 'round' })

        draw.line(...center, ...hw_center)
            .stroke({ color: '#090', width: 4, linecap: 'round' })

        draw.line(...center, ...cw_center)
            .stroke({ color: '#00f', width: 4, linecap: 'round' })
    }

    return new SVG.G().add(hw).add(ch).add(cw)
}

function logCube({ draw, unitSize = 10, h = 6, w = 8, c = 3, cx = 0, cy = 0, patterns=[inputGridPattern, inputGridPattern] }) {
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
    let hw = grid({ draw: draw, unitSize: unitSize, width: w, height: h, cx: hw_center[0], cy: hw_center[1], pattern: patterns[0] });
    let ch = grid({ draw: draw, unitSize: unitSize, width: c, height: h, cx: ch_center[0], cy: ch_center[1], pattern: patterns[1] });
    let cw = grid({ draw: draw, unitSize: unitSize, width: c, height: w, cx: cw_center[0], cy: cw_center[1], pattern: patterns[1] });

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
    let cube = new SVG.G().add(hw).add(ch).add(cw).add(c_text).add(w_text).add(h_text)

    return cube
}

function animateCube(cube1, cube2, time = 1000, delay = 500) {
    let [a1, b1, c1] = cube1.children()
    let [a2, b2, c2] = cube2.children()
    a1.animate(time, delay).ease('<>').size(a2.width(), a2.height()).transform(a2.transform())
    b1.animate(time, delay).ease('<>').size(b2.width(), b2.height()).transform(b2.transform())
    c1.animate(time, delay).ease('<>').size(c2.width(), c2.height()).transform(c2.transform())
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

let c = h = w = 0;
let draw;
let draw2;
let inputCube = undefined;
let outputCube = undefined;
let cube2 = undefined;
let inputGridPattern = undefined;
let inputGridPatternChannel = undefined;
let unitSize = 10;

function $(query) {
    return document.querySelectorAll(query);
}

function onUpdate() {
    c = Math.round(Math.pow(2, $("#channelsInput")[0].value));
    h = Math.round(Math.pow(2, $("#heightInput")[0].value));
    w = Math.round(Math.pow(2, $("#widthInput")[0].value));

    if (!!inputCube) {
        inputCube.remove()
    }
    if (!!outputCube) {
        outputCube.remove()
    }

    let drawViewShape = draw.parent().node.getBoundingClientRect()
    inputCube = logCube({ draw: draw, unitSize: unitSize, h: h, w: w, c: c, cx: drawViewShape.width / 2, cy: drawViewShape.height / 2, patterns: [inputGridPattern, inputGridPatternChannel] })
    inputCube.addTo(draw);

    // Do the calculation
    outputChannels = $("output[for=\"outputChannelsInput\"]")[0].value
    kernalSize = $("#kernalSizeInput")[0].value
    stride = $("#strideInput")[0].value
    padding = $("#paddingInput")[0].value
    dilation = $("#dilationInput")[0].value
    h_out = Math.floor((h + 2 * padding - dilation * (kernalSize - 1) - 1) / stride + 1)
    w_out = Math.floor((w + 2 * padding - dilation * (kernalSize - 1) - 1) / stride + 1)
    if (h_out <= 0) h_out = NaN
    if (w_out <= 0) w_out = NaN
    $("#outputHeightOutput")[0].value = h_out
    $("#outputWidthOutput")[0].value = w_out
    
    if (!!h_out && !!w_out) {
        let draw2ViewShape = draw2.parent().node.getBoundingClientRect()
        outputCube = logCube({ draw: draw2, unitSize: unitSize, h: h_out, w: w_out, c: outputChannels, cx: draw2ViewShape.width / 2, cy: draw2ViewShape.height / 2, patterns: [outputGridPattern, outputGridPatternChannel]})
        outputCube.addTo(draw2);
    }
}

function makeGridPattern(draw, colors, borderColor="#000", unitSize=10) {
    width = colors.length
    return draw.pattern(width * unitSize, unitSize, function (add) {
        colors.forEach((color, i) => {
            add.rect({ width: unitSize, height: unitSize, x: i * unitSize, y: 0 }).fill(color);
            add.line((i+1)*unitSize, 0, (i+1)*unitSize, unitSize).stroke({ color: borderColor, width: 1 }); // Right vertical line    
        })

        add.line(0, unitSize, width * unitSize, unitSize).stroke({ color: borderColor, width: 1 }); // Bottom horizontal line
    })
}

function main() {
    $("input").forEach(elem => {
        elem.addEventListener("input", onUpdate);
        elem.dispatchEvent(new Event('input'));
    });

    draw = SVG().addTo('#inputCanvas').size('100%', '100%');
    draw2 = SVG().addTo('#outputCanvas').size('100%', '100%');
    inputGridPattern = makeGridPattern(draw, ['#FCBF49'], borderColor="#003049", unitSize)
    inputGridPatternChannel = makeGridPattern(draw, ['#FCBF49', '#F77F00', '#EAE2B7', '#D62828'], borderColor="#003049", unitSize)

    outputGridPattern = makeGridPattern(draw, ['#aaaacc'], borderColor="#223344", unitSize)
    outputGridPatternChannel = makeGridPattern(draw, ['#aaaacc', '#6677aa', '#ccddff', '#445577'], borderColor="#223344", unitSize)

    onUpdate();

    // setInterval(() => {
    //     c = randomInt(16)
    //     h = randomInt(16)
    //     w = randomInt(16)

    //     cube2 = logCube({ draw: draw, h: h, w: w, c: c, cx: 300, cy: 300 })
    //     // let cube2 = cube({draw: draw, h: h, w: w, c: c, cx: 300, cy: 300})
    //     animateCube(mainCube, cube2, 500, 0)
    // }, 1000)

}
window.onload = main;


function onRangeInput(elem, scale="linear") {
    let value = 0;
    switch (scale) {
        case "pow2":
            value = Math.round(Math.pow(2, elem.value))
            break;
    
        default:
            value = elem.value;
            break;
    }
    const outputElems = document.querySelectorAll(`output[for="${elem.id}"]`);
    outputElems.forEach(outElem => outElem.value = value);
}