import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import { ICrystalPosition, IWall } from "../type";
import GltfObject from "./GltfObject";

export const CrystalPosition: ICrystalPosition = [
  // 전면
  {
    scale: [50, 30, 20],
    rotation: [0, 0, 0],
    position: [4, -0.1, 17],
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
export default function Crystal({ position, scale, rotation }: IWall) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  return (
    <mesh>
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
