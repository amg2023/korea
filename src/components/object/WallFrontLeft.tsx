import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function WallFrontLeft() {
  const { nodes, materials }: any = useGLTF(S3_URL + "wall.gltf");
  return (
    <mesh position={[20, 11, 45]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[30, 20, 1]}
        rotation={[Math.PI, Math.PI, 0]}
      />
    </mesh>
  );
}
