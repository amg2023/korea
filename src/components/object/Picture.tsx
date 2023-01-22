import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

// 전면 우측 그림
export default function Picture() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "ssirum.gltf");
  useEffect(() => {
    console.log(nodes, materials);
  }, []);

  return (
    <mesh position={[-30, 10, 37]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.015, 0.015, 0.015]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
}
