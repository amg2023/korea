import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";

const url = S3_URL + "roof.gltf";
export default function Roof() {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <GltfObject
      nodes={nodes}
      materials={materials}
      position={[0, -160, -0]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}
useLoader.preload(GLTFLoader, url);
