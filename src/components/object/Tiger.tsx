import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Tiger() {
  const { nodes, materials }: any = useGLTF(S3_URL + "tiger.gltf");
  return (
    <mesh position={[30, 10, 38]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.01, 0.007, 0.02]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
