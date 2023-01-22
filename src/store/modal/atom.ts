import { atom } from "jotai";
import { IModal } from "./type";

export const modalAtom = atom<IModal>({
  on: false,
  type: "",
});
modalAtom.debugLabel = "modal";
