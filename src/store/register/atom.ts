import { atom } from "jotai";
import { IRegisterFormAtom } from "./type";

export const registerFormAtom = atom<IRegisterFormAtom>({
  name: "",
  email: "",
  password: "",
});
registerFormAtom.debugLabel = "register";
