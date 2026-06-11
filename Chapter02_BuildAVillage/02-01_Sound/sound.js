import "./Running Hell.mp3" as runningHell;

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new         BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    async function initAudio() {
        const audioEngine = await BABYLON.CreateAudioEngineAsync();
        await audioEngine.unlockAsync();

        // Audio engine is ready to play sounds ...
        BABYLON.CreateStreamingSoundAsync("Running Hell", runningHell, { loop: true, autoplay: true }, audioEngine);
    }

    initAudio();

    return scene;
}

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
