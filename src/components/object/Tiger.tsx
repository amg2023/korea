import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

const url = S3_URL + "tiger.gltf";

export default function Tiger() {
  const { nodes, materials } = useLoader(GLTFLoader, url, undefined, (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  });
  // const { nodes, materials }: IGltfReturn = useGLTF(url);
  return (
    <mesh position={[20, 10, 43]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.01, 0.007, 0.02]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
