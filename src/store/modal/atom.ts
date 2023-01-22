import { atom } from "jotai";
import { IModal } from "./type";

export const modalAtom = atom<IModal>({
  on: true,
  type: "",
});
modalAtom.debugLabel = "modal";
