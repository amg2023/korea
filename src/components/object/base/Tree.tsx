import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { ITreePosition, IWall } from "../type";
import { useGLTF } from "@react-three/drei";

export const TreePosition: ITreePosition = [];
const url = S3_URL + "tree.glb";
export default function Tree({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useGLTF(url);
  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <GltfObject nodes={nodes} materials={materials} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
