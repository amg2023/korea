import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

// 인스타
export default function Instargram() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "instargram.gltf");

  return (
    <mesh position={[-25, 15, -38]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.02, 0.01, 0.01]}
        rotation={[0, Math.PI, 0]}
      />
    </mesh>
  );
}
