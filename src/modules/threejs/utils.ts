import * as THREE from "three";

export function canvas2DToWorld3D(canvasX: number, canvasY: number, camera: THREE.Camera, canvas: HTMLCanvasElement) {
    let vector = new THREE.Vector3(
        (canvasX / canvas.width) * 2 - 1,
        - (canvasY / canvas.height) * 2 + 1,
        0
    );
    return vector.unproject(camera);
}

export function world3DToCanvas2D(worldPoint: THREE.Vector3, camera: THREE.Camera, canvas: HTMLCanvasElement | undefined = undefined): [number, number] {
    let canvasPoint = worldPoint.clone().project(camera);
    let x = (canvasPoint.x + 1);
    let y = - (canvasPoint.y - 1);

    if (canvas !== undefined) {
        x *= canvas.width / 2;
        y *= canvas.height / 2;
    }

    return [x, y]
}

export function getBboxVertecies(bbox: THREE.Box3) {
    const low = bbox.min;
    const high = bbox.max;

    return [
        new THREE.Vector3(low.x, low.y, low.z),      // Back  bottom left
        new THREE.Vector3(low.x, low.y, high.z),     // Back  bottom right
        new THREE.Vector3(high.x, low.y, high.z),    // Front bottom rigth
        new THREE.Vector3(high.x, low.y, low.z),     // Front bottom left

        new THREE.Vector3(low.x, high.y, low.z),     // Back  top    left
        new THREE.Vector3(low.x, high.y, high.z),    // Back  top    right
        new THREE.Vector3(high.x, high.y, high.z),   // Front top    right
        new THREE.Vector3(high.x, high.y, low.z),    // Front top    left
    ]
}

export function rotateAboutPoint(obj: THREE.Object3D, point: THREE.Vector3, axis: THREE.Vector3, theta: number, pointIsWorld: boolean = false) {
    pointIsWorld = (pointIsWorld === undefined) ? false : pointIsWorld;

    if (pointIsWorld) {
        obj.parent?.localToWorld(obj.position); // compensate for world coordinate
    }
    obj.position.sub(point); // remove the offset
    obj.position.applyAxisAngle(axis, theta); // rotate the POSITION
    obj.position.add(point); // re-add the offset

    if (pointIsWorld) {
        obj.parent?.worldToLocal(obj.position); // undo world coordinates compensation
    }

    obj.rotateOnAxis(axis, theta); // rotate the OBJECT
}

export const toRadians = (angle: number) => angle * (Math.PI / 180);

export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

export function dispose(object: any) {
    let itemsToDispose = [object];

    while (itemsToDispose.length > 0) {
        let item = itemsToDispose.shift();

        // This is not pretty....
        try {
            item.dispose();
        } catch { }

        try {
            itemsToDispose.push(...item.children);
        } catch { }

        try {
            itemsToDispose.push(...item.material);
        } catch { }

        try {
            item.material.map.dispose();
        } catch { }

        try {
            item.material.dispose();
        } catch { }

        try {
            item.geometry.dispose();
        } catch { }
    }
}