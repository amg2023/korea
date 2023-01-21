import { atom } from "jotai";

export const controlAtom = atom<{
  f: boolean;
  b: boolean;
  l: boolean;
  r: boolean;
  z: boolean;
  stop: boolean;
}>({
  f: false,
  b: false,
  l: false,
  r: false,
  z: false,
  stop: false,
});
controlAtom.debugLabel = "control";
