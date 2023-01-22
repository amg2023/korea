import { ThreeEvent } from "@react-three/fiber";
import { Material } from "three";
import { Object3DExtends } from "../Three/types";

export type IWall = {
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
};

export type IWallPosition = IWall[];

export type IGltfObject = {
  nodes: {
    [name: string]: Object3DExtends;
  };
  materials: {
    [name: string]: Material | Material[] | undefined;
  };
  scale?: [number, number, number];
  rotation?: [number, number, number];
  position?: [number, number, number];
  x?: number;
  z?: number;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
};

export type ISelectGltf = {
  url: string;
  nameTag: string;
} & Omit<IGltfObject, "nodes" | "materials">;
