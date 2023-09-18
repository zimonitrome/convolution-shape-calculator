## ThreeJS resources
* https://discourse.threejs.org/t/ldraw-like-edges/17100
* https://github.com/gkjohnson/threejs-sandbox/tree/master/conditional-lines

* https://r105.threejsfundamentals.org/threejs/lessons/threejs-custom-buffergeometry.html
* https://jsfiddle.net/62zfgybv/1/

## TODO:
- [ ] Add the other filters to conv
   - [ ] A little done. We 
- [ ] Add bias
- [ ] List number of parameters in layer
- [ ] Shrink page height
    - [ ] Depend shape placement and canvas height on div heights (inputshape div, conv div, outputshape div) https://github.com/zimonitrome/convolution-shape-calculator/blob/main/src/modules/ThreeCanvas.tsx#L48
    - [x] Make arrow smaller/overlap
- [x]  Animate
    - [x]  Calculate number of steps for each conv configuration
    - [x]  Add animation step as a slider
- [ ]  Add deconvolution
- [ ]  BUG: Some parameters depend on output shape. When they are not set, things crash.
   - [ ]  BUG: Extending dilated convolution too much permanently crashes app.
- [ ]  BUG: OpenGL(?) sometimes crashes on Linux.

Maybe TODO:
- [ ]  Make lines transparent if they are behind and object
    - [ ]  Otherwise: Think of how to better display lines
    - [ ]  Maybe make lines non-intersecting
