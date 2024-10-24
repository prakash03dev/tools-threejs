import { PerspectiveCamera, type OrthographicCamera, type WebGLRenderer } from "three";

interface ConfigProps {
    camera: PerspectiveCamera | OrthographicCamera;
    renderer: WebGLRenderer;
    container: HTMLDivElement;
}

class ResizerClass {
    constructor(config: ConfigProps) {

        if (config.camera instanceof PerspectiveCamera) {
            config.camera.aspect = config.container.clientWidth / config.container.clientHeight;
        }

        config.camera.updateProjectionMatrix();
        config.renderer.setSize(config.container.clientWidth, config.container.clientHeight);
        config.renderer.setPixelRatio(window.devicePixelRatio);
    }
}

export default ResizerClass;
