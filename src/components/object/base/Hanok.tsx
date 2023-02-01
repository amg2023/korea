import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const url = S3_URL + "hanok.glb";
export default function Hanok() {
  const { nodes, materials } = useGLTF(url);
  useEffect(() => {
    console.log(nodes);
    console.log(materials);
  }, []);
  return (
    <mesh
      scale={[0.01, 0.01, 0.01]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 240]}
    >
      <GltfObject nodes={nodes} materials={materials} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
