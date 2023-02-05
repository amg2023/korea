import { atom } from "jotai";
import { IUserAtom } from "./type";

export const userAtom = atom<IUserAtom>({
  user: null,
  error: "",
});
userAtom.debugLabel = "user";
