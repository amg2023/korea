import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Picture() {
  const { nodes, materials }: any = useGLTF(S3_URL + "picture.gltf");
  return (
    <mesh position={[-30, 8, 37]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.015, 0.015, 0.015]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
