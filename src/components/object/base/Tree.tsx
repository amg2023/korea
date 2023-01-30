import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { IMountainPosition, ITreePosition, IWall } from "../type";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const TreePosition: ITreePosition = [
  // // 전면
  {
    scale: [0.1, 0.1, 0.1],
    position: [50, -4, 60],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    scale: [0.1, 0.1, 0.1],
    position: [-30, -4, 27],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    scale: [0.1, 0.1, 0.1],
    position: [30, -4, 27],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
  {
    scale: [0.1, 0.1, 0.1],
    position: [-20, -4, 50],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
  },
  {
    scale: [0.1, 0.1, 0.1],
    position: [-30, -4, -27],
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    scale: [0.1, 0.1, 0.1],
    position: [30, -4, -27],
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  },
];

const url = S3_URL + "tree.glb";
export default function Tree({ position, scale, rotation }: IWall) {
  const ref = useRef<any>();
  const { nodes, materials } = useGLTF(url);

  return (
    <mesh scale={scale} position={position} rotation={rotation} ref={ref}>
      <GltfObject nodes={nodes} materials={materials} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
