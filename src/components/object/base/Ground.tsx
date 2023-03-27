import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";

const url = S3_URL + "ground.gltf";
export default function Ground({ _ref }: { _ref: any }) {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <mesh ref={_ref} rotation={[-Math.PI / 2, 0, 0]}>
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
