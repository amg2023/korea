import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function WallBackLeft() {
  const { nodes, materials }: any = useGLTF(S3_URL + "wall.gltf");
  return (
    <mesh position={[20, 11, -40]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[20, 10, 1]}
        rotation={[-Math.PI, 0, 0]}
      />
    </mesh>
  );
}
