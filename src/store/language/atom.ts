import { atom } from "jotai";
import { ILanguage } from "./type";

export const languageAtom = atom<ILanguage>({
  language: "ENGLISH",
});
languageAtom.debugLabel = "language";
