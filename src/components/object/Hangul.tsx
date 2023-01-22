import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

// 한글
export default function Hangul() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "hangul.gltf");
  useEffect(() => {
    console.log(nodes, materials);
  }, []);

  return (
    <mesh position={[-15, 10, 38]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.04, 0.015, 0.015]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
