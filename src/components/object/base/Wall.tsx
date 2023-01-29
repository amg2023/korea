import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IWall, IWallPosition } from "../type";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";

export const WallPosition: IWallPosition = [
  // 후면
  {
    position: [0, 15, -40],
    scale: [0.37, 0.8, 1],
    rotation: [0, -Math.PI, 0],
  },
  // 우측
  {
    position: [44, 15, 0],
    scale: [0.37, 0.8, 1],
    rotation: [0, Math.PI / 2, 0],
  },
  // 좌측
  {
    position: [-44, 15, 0],
    scale: [0.37, 0.8, 1],
    rotation: [0, -Math.PI / 2, 0],
  },
];
const url = S3_URL + "wall.gltf";
export default function Wall({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
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
useLoader.preload(GLTFLoader, url);
