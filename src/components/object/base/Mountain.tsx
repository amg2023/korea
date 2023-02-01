import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { IMountainPosition, IWall } from "../type";

export const MountainPosition: IMountainPosition = [
  // 전면
  {
    scale: [100, 30, 20],
    rotation: [0, 0, 0],
    position: [2.2, -0.1, 15],
  },
  // 좌측
  {
    scale: [20, 30, 50],
    rotation: [0, 0, 0],
    position: [-12, -0.1, 1],
  },
  // 우측
  {
    scale: [20, 20, 50],
    rotation: [0, 0, 0],
    position: [19, -0.3, 1],
  },
];

const url = S3_URL + "crystal.gltf";
export default function Mountain({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <mesh scale={[1, 1, 1]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={scale}
        rotation={rotation}
        position={position}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
