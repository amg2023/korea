import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IWallName, IWallPosition } from "../type";
import { S3_URL } from "data/constant";
import { useEffect } from "react";
import { Mesh } from "three";
import { isBrowser } from "react-device-detect";

export const WallPosition: IWallPosition = [
  // 후면
  {
    name: "WallBack",
    position: [0, 14, isBrowser ? -60 : -75],
    scale: [0.37, 0.8, 1],
    rotation: [0, -Math.PI, 0],
  },
  // 우측
  {
    name: "WallRight",
    position: [isBrowser ? 64 : 79, 14, 0],
    scale: [0.37, 0.8, 1],
    rotation: [0, Math.PI / 2, 0],
  },
  // 좌측
  {
    name: "WallLeft",
    position: [isBrowser ? -64 : -79, 14, 0],
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
