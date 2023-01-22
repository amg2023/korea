import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";

// 페이스북
export default function Facebook() {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "facebook.gltf");
  useEffect(() => {
    console.log(nodes, materials);
  }, []);

  return (
    <mesh position={[-10, 15, -38]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[0.02, 0.01, 0.01]}
        rotation={[0, Math.PI, 0]}
      />
    </mesh>
  );
}
