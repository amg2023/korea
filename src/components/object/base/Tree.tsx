import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { IMountainPosition, ITreePosition, IWall } from "../type";
import { useGLTF } from "@react-three/drei";

export const TreePosition: ITreePosition = [
  // 전면
  {
    scale: [2, 2, 2],
    position: [-30, -10, 50],
    rotation: [0, -Math.PI / 4, 0],
  },

  // 전면
  {
    scale: [2, 2, 2],
    position: [30, -10, 50],
    rotation: [0, Math.PI / 2, 0],
  },
];

const url = "./tree.glb";
export default function Tree({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useGLTF(url);
  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        scale={[10, 10, 10]}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={materials["material_sakura"]}
        geometry={(nodes["mesh_sakura"] as any).geometry}
      />
      <mesh
        castShadow
        receiveShadow
        scale={[0.04, 0.04, 0.04]}
        position={[0, 12, 2]}
        rotation={[0, Math.PI / 2, 0]}
        material={materials["material_tree"]}
        geometry={(nodes["mesh_tree"] as any).geometry}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
