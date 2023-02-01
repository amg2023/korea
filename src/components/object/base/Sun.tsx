import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";

const url = S3_URL + "sun.gltf";
export default function Sun() {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <mesh>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[20, 20, 20]}
        rotation={[0, 0, 0]}
        position={[-4, 1.5, 20]}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
