import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

export default function NameKorea() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "korea.gltf");
  return (
    <mesh position={[-3, 5, 39]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[2, 1.2, 0.2]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
