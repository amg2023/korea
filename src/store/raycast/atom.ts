import { atom } from "jotai";

export const raycastAtom = atom<any>({
  stepA: [
    {
      name: "stepALampA",
      hint: "2lang",
      position: [14, -1, 14],
    },
    {
      name: "stepALampB",
      hint: "pokemon 2",
      position: [-14, -1, -14],
    },
  ],
  stepB: [
    {
      name: "stepBLampA",
      hint: "My",
      position: [15, -1, 15],
    },
    {
      name: "stepBLampB",
      hint: "name",
      position: [15, -1, -15],
    },
    {
      name: "stepBLampC",
      hint: "is",
      position: [-15, -1, 15],
    },
    {
      name: "stepBLampD",
      hint: "to2ng",
      position: [-15, -1, -15],
    },
  ],
  selected: "",
  answer: "",
  error: "",
  step: 1,
});
raycastAtom.debugLabel = "raycast";
