import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import { IWall, IWallPosition } from "../type";

import GltfObject from "./GltfObject";

export const WallPosition: IWallPosition = [
  // 전면
  // 좌측
  {
    position: [45, 11, 16],
    scale: [1, 10, 15],
    rotation: [Math.PI, -Math.PI, 0],
  },
  // 우측
  {
    position: [45, 11, -16],
    scale: [1, 10, 15],
    rotation: [Math.PI, Math.PI, 0],
  },
  // 후면
  // 좌측
  {
    position: [20, 11, -40],
    scale: [20, 10, 1],
    rotation: [-Math.PI, 0, 0],
  },
  // 우측
  {
    position: [-20, 11, -40],
    scale: [30, 20, 1],
    rotation: [-Math.PI, 0, 0],
  },
];
const url = S3_URL + "wall.gltf";
export default function Wall({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <mesh position={position}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={scale}
        rotation={rotation}
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
