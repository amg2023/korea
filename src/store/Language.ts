import { atom } from "jotai";

export const languageAtom = atom<{ language: string }>({
  language: "ENGLISH",
});
languageAtom.debugLabel = "language";
