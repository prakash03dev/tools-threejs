import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3, type Object3DEventMap } from "three";

interface ConfigProps {
    size?: Vector3
}

class CubeClass {
    cube: Mesh<BoxGeometry, MeshBasicMaterial, Object3DEventMap>
    constructor(config: ConfigProps) {
        const size = config.size || new Vector3(2, 2, 2);

        const geometry = new BoxGeometry(size.x, size.y, size.z);
        const material = new MeshBasicMaterial();

        this.cube = new Mesh(geometry, material);
    }
}

export default CubeClass;
