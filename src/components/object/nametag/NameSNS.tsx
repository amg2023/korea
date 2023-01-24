import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import GltfObject from "../base/GltfObject";

const url = S3_URL + "sns.gltf";
export default function NameSNS() {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <mesh position={[-25, 5, -38]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[2, 1.2, 0.2]}
        rotation={[0, Math.PI, 0]}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);