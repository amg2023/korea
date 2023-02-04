import { IThree } from "./type";
import { atom } from "jotai";

export const threeAtom = atom<IThree>({
  on: false,
});
threeAtom.debugLabel = "three";
