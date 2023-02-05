import { atom } from "jotai";
import { ILoginFormAtom } from "./type";

export const loginFormAtom = atom<ILoginFormAtom>({
  name: "",
  password: "",
});
loginFormAtom.debugLabel = "login";
