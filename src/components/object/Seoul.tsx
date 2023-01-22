import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

// 서울
export default function Seoul() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "seoul.gltf");
  useEffect(() => {
    console.log(nodes, materials);
  }, []);

  return (
    <mesh position={[35, 10, 40]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.03, 0.015, 0.015]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
