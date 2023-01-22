import { atom } from "jotai";
import { IControl } from "./type";

export const controlAtom = atom<IControl>({
  f: false,
  b: false,
  l: false,
  r: false,
  z: false,
  stop: false,
});
controlAtom.debugLabel = "control";
