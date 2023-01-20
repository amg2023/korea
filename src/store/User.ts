import { atom } from "jotai";
import { IJoiner } from "../components/Chat/type";

export const userAtom = atom<IJoiner>({
  user: "",
  model: "",
  error: "",
});
userAtom.debugLabel = "user";
