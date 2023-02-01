import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { IMountainPosition, ITreePosition, IWall } from "../type";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const TreePosition: ITreePosition = [
  // // 전면
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [30, -4, 60],
  //   rotation: [-Math.PI / 2, 0, Math.PI / 2],
  // },
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [-30, -4, 60],
  //   rotation: [-Math.PI / 2, 0, Math.PI / 2],
  // },
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [-35, -4, 35],
  //   rotation: [-Math.PI / 2, 0, 0],
  // },
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [35, -4, 35],
  //   rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  // },
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [-35, -4, -35],
  //   rotation: [-Math.PI / 2, 0, 0],
  // },
  // {
  //   scale: [0.08, 0.08, 0.08],
  //   position: [35, -4, -35],
  //   rotation: [-Math.PI / 2, 0, -Math.PI / 2],
  // },
];
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
