import { Ref, RefObject } from "react";
import {
  AnimationClip,
  BufferGeometry,
  Event,
  Group,
  Material,
  Object3D,
  Skeleton,
  Vector3,
} from "three";

export type IGom = {
  control: {
    f: boolean;
    b: boolean;
    l: boolean;
    r: boolean;
  };
  OuterRef: RefObject<Object3D<Event>>;
  position?: Vector3;
};

export interface Object3DExtends extends Object3D {
  geometry?: BufferGeometry;
  skeleton?: Skeleton;
}
// gltf 리턴 타입
export type IGltfReturn = {
  nodes?: {
    [name: string]: Object3DExtends;
  };
  materials?: {
    [name: string]: Material | Material[] | undefined;
  };
  animations?: AnimationClip[];
  scene?: Group;
};
// 아바타
export type IAvatar = {
  nodes: {
    [name: string]: Object3DExtends;
  };
  materials: {
    [name: string]: Material | Material[] | undefined;
  };
  x: number;
  z: number;
  innerRef: Ref<Group>;
};

export type ISmallTag = {
  height?: string;
  width?: string;
  bottom?: string;
  top?: string;
};
export type IName = {
  name: string;
};
export type INameTag = IName & ISmallTag;
