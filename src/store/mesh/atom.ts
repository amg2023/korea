import { atom } from "jotai";
import { IMesh } from "./type";

export const meshAtom = atom<any>({});
meshAtom.debugLabel = "mesh";
