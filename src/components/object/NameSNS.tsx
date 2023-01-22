import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

export default function NameSNS() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "sns.gltf");

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
