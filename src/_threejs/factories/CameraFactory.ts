import { OrthographicCamera, PerspectiveCamera } from "three";

enum CameraTypes {
    perspective = "perspective",
    orthographic = "prthographic"
}

type CameraTypeProps = keyof typeof CameraTypes;

interface PerspectiveCameraProps {
    fov?: number;
    aspect?: number;
    near?: number;
    far?: number
}

interface OrthographicCameraProps {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    near?: number,
    far?: number
}


class CameraFactory {
    static createCamera(type: CameraTypeProps, config?: PerspectiveCameraProps | OrthographicCameraProps) {
        const near = config?.near || 0.1;
        const far = config?.far || 100;

        switch (type) {
            case 'perspective':
                const fov = (config as PerspectiveCameraProps | undefined)?.fov || 35;
                const aspect = (config as PerspectiveCameraProps | undefined)?.aspect || 1;
                return new PerspectiveCamera(fov, aspect, near, far);

            case "orthographic":
                const left = (config as OrthographicCameraProps | undefined)?.left || 1;
                const right = (config as OrthographicCameraProps | undefined)?.right || 1;
                const top = (config as OrthographicCameraProps | undefined)?.top || 2;
                const bottom = (config as OrthographicCameraProps | undefined)?.bottom || 1;
                return new OrthographicCamera(left, right, top, bottom, near, far);
            default:
                throw new Error("Unsupported camera type");
        }
    }
}

export default CameraFactory;
