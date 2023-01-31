import { ITip } from "./type";
import { atom } from "jotai";

export const tipAtom = atom<ITip>({
  on: true,
});
tipAtom.debugLabel = "tip";
