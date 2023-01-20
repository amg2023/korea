import { RefObject } from "react";
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
