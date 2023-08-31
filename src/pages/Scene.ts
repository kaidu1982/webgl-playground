import {
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    MeshBuilder,
    StandardMaterial,
    Color3,
    HemisphericLight,
} from '@babylonjs/core';
const createScene = (canvas: HTMLCanvasElement) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight('light', Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
    const material = new StandardMaterial('box-material', scene);
    material.diffuseColor = Color3.Blue();
    box.material = material;

    //rgb(68,91,99)

    const ground = MeshBuilder.CreateGround(
        'ground',
        { width: 6, height: 6 },
        scene
    );
    const groundMaterial = new StandardMaterial('ground-material', scene);
    groundMaterial.diffuseColor = new Color3(68 / 255, 91 / 255, 99 / 255);
    ground.material = groundMaterial;

    engine.runRenderLoop(() => {
        scene.render();
    });
};

export { createScene };
