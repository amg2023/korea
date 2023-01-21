import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Sang() {
  const { nodes, materials }: any = useGLTF(S3_URL + "sang.gltf");
  return (
    <mesh position={[30, 3.5, -30]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[60, 40, 50]}
        rotation={[-Math.PI, 0, 0]}
      />
    </mesh>
  );
}
