import { Scene, WebGLRenderer, type OrthographicCamera, type PerspectiveCamera } from "three";
import CameraFactory from "./factories/CameraFactory";


interface ConfigProps {
    container: HTMLDivElement,
}

class WorldClass {
    camera: PerspectiveCamera | OrthographicCamera;
    scene: Scene;
    renderer: WebGLRenderer;

    constructor(config: ConfigProps) {
        const canvas = config.container.querySelector('[data-name="scene"]') as HTMLCanvasElement | undefined;
        this.camera = CameraFactory.createCamera("perspective");
        this.scene = new Scene();
        this.renderer = new WebGLRenderer();
    }

    render() {

    }
}

export default WorldClass;
