import { atom } from "jotai";

export const raycastAtom = atom<any>({
  stepA: [
    {
      name: "stepALampA",
      hint: "2lang",
      position: [20, -1, 20],
    },
    {
      name: "stepALampB",
      hint: "pokemon 2",
      position: [-20, -1, -20],
    },
  ],
  stepB: [
    {
      name: "stepBLampA",
      hint: "My",
      position: [20, -1, 20],
    },
    {
      name: "stepBLampB",
      hint: "name",
      position: [20, -1, -20],
    },
    {
      name: "stepBLampC",
      hint: "is",
      position: [-20, -1, 20],
    },
    {
      name: "stepBLampD",
      hint: "to2ng",
      position: [-20, -1, -20],
    },
  ],
  selected: "",
  answer: "",
  error: "",
  step: 1,
});
raycastAtom.debugLabel = "raycast";
