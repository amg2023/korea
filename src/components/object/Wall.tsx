import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../common/control/constant";
import { IGltfReturn } from "../Three/types";
import GltfObject from "./GltfObject";
import { IWall, IWallPosition } from "./type";

export const WallPosition: IWallPosition = [
  // 전면
  // 좌측
  {
    position: [20, 11, 45],
    scale: [30, 20, 1],
    rotation: [Math.PI, Math.PI, 0],
  },
  // 우측
  {
    position: [-20, 11, 40],
    scale: [20, 10, 1],
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

export default function Wall({ position, scale, rotation }: IWall) {
  const { nodes, materials }: IGltfReturn = useGLTF(S3_URL + "wall.gltf");
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
