import { usePlane } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Bungpung() {
  // const { nodes, materials } = useGLTF(S3_URL + "floor.gltf");
  const { nodes, materials }: any = useGLTF(S3_URL + "bungpung.gltf");
  useEffect(() => {
    console.log(nodes, materials);
  }, []);
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        material={materials["material_blacks"]}
        geometry={nodes["mesh_blacks"].geometry}
        position={[-20, 9, -35]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        material={materials["material_pictures"]}
        geometry={nodes["mesh_pictures"].geometry}
        position={[-20, 10.5, -34.8]}
        scale={[0.01, 0.01, 0.01]}
      />
    </group>
  );
}
