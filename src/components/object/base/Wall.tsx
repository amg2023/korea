import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IWall, IWallName, IWallPosition } from "../type";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { useAtom } from "jotai";
import { meshAtom } from "store/mesh/atom";
import { useEffect, useRef } from "react";
import { Mesh, BufferGeometry, Material } from "three";
import { Ref } from "react";
import { useState } from "react";

export const WallPosition: IWallPosition = [
  // 후면
  {
    name: "WallBack",
    position: [0, 15, -40],
    scale: [0.37, 0.8, 1],
    rotation: [0, -Math.PI, 0],
  },
  // 우측
  {
    name: "WallRight",
    position: [44, 15, 0],
    scale: [0.37, 0.8, 1],
    rotation: [0, Math.PI / 2, 0],
  },
  // 좌측
  {
    name: "WallLeft",
    position: [-44, 15, 0],
    scale: [0.37, 0.8, 1],
    rotation: [0, -Math.PI / 2, 0],
  },
];
const url = S3_URL + "wall.gltf";
export default function Wall({ position, scale, rotation, name }: IWallName) {
  const { nodes, materials, scene } = useLoader(GLTFLoader, url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.name = name;
      }
    });
  }, []);

  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        position={[0, 1.2, 0]}
        material={materials["material_hanzi"]}
        geometry={(nodes["mesh_hanzi"] as any).geometry}
      />
      <mesh
        castShadow
        receiveShadow
        material={materials["material_wall"]}
        geometry={(nodes["mesh_wall"] as any).geometry}
      />
    </group>
  );
}
// useLoader.preload(GLTFLoader, url);
