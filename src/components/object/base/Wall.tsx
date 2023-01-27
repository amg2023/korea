import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import { IWall, IWallPosition } from "../type";
import GltfObject from "./GltfObject";

export const WallPosition: IWallPosition = [
  // 후면
  {
    position: [0, 14, -40],
    scale: [0.3, 0.7, 1],
    rotation: [0, -Math.PI, 0],
  },
  // 우측
  {
    position: [44, 14, 0],
    scale: [0.3, 0.7, 1],
    rotation: [0, Math.PI / 2, 0],
  },
  // 좌측
  {
    position: [-44, 14, 0],
    scale: [0.3, 0.7, 1],
    rotation: [0, -Math.PI / 2, 0],
  },
];
const url = "./wall.gltf";
export default function Wall({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <group position={position} scale={scale} rotation={rotation}>
      <GltfObject nodes={nodes} materials={materials} />
    </group>
  );
}
useLoader.preload(GLTFLoader, url);
