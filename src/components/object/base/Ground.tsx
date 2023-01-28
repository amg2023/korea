import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";

const url = S3_URL + "ground.gltf";
export default function Ground() {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.3, 0],
    args: [100, 100, 10],
    type: "Static",
  }));

  return (
    <mesh ref={ref as any}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[1, 1, 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
