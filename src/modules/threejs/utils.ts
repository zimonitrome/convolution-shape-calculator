import * as THREE from "three";

export function canvas2DToWorld3D(canvasX: number, canvasY: number, camera: THREE.Camera, canvas: HTMLCanvasElement, scene: THREE.Scene) {
    let vector = new THREE.Vector3();
    vector.set(
        (canvasX / canvas.width) * 2 - 1,
        - (canvasY / canvas.height) * 2 + 1,
        0
    );
    return vector.unproject(camera);
}

export function getBboxVertecies(bbox: THREE.Box3) {
    const low = bbox.min;
    const high = bbox.max;

    return [
        new THREE.Vector3(low.x, low.y, low.z),
        new THREE.Vector3(high.x, low.y, low.z),
        new THREE.Vector3(low.x, high.y, low.z),
        new THREE.Vector3(low.x, low.y, high.z),
        new THREE.Vector3(high.x, high.y, low.z),
        new THREE.Vector3(high.x, low.y, high.z),
        new THREE.Vector3(low.x, high.y, high.z),
        new THREE.Vector3(high.x, high.y, high.z),
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