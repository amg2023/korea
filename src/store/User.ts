import { atom } from "jotai";

export const userAtom = atom<any>({
  user: "",
  model: "",
  error: "",
});
userAtom.debugLabel = "user";
