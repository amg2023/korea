import { MainEvents, Options } from "../../data/package";
import { atom } from "jotai";
import { IPay } from "./type";

export const payAtom = atom<IPay>({
  course: [...MainEvents],
  option: [...Options],
  form: {
    name: "",
    birth: "",
    email: "",
    phone: "",
    country: "",
    memberId: "",
  },
  validate: {
    name: false,
    birth: false,
    email: false,
    phone: false,
    country: false,
    memberId: false,
  },
  total: 0,
});
payAtom.debugLabel = "pay";
