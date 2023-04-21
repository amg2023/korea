import { useAtom } from "jotai";
import { raycastAtom } from "./atom";
import { modalAtom } from "store/modal/atom";
import { createToast } from "utils/toast";

export interface IMeta {
  env: {
    VITE_A: string;
    VITE_B: string;
    VITE_C: string;
  };
}

const { VITE_A, VITE_B, VITE_C } = (import.meta as unknown as IMeta).env;

export default function useRaycastActions() {
  const [raycast, setRaycast] = useAtom(raycastAtom);
  const [modal, setModal] = useAtom(modalAtom);

  const addRaycast = (ref: any) => {
    setRaycast({
      ref: [...raycast.ref, ref],
    });
  };

  const selectedName = (name: string) => {
    setRaycast({
      ...raycast,
      selected: name,
    });
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaycast({
      ...raycast,
      answer: e.target.value,
    });
  };

  const goNext = () => {
    if (raycast.step === 1) {
      if (raycast.answer.toUpperCase() === VITE_A) {
        new Promise((resolve) => {
          resolve(
            setRaycast({
              ...raycast,
              step: 2,
            })
          );
        })
          .then(() => {
            setModal({
              on: false,
              type: "",
            });
          })
          .then(() => {
            createToast("congratulations!, STEP 1");
          });
      } else {
        setRaycast({
          ...raycast,
          error: "answer is not correct",
        });
      }
    } else if (raycast.step === 2) {
      if (raycast.answer.toUpperCase() === VITE_B) {
        new Promise((resolve) => {
          resolve(
            setRaycast({
              ...raycast,
              step: 3,
            })
          );
        })
          .then(() => {
            setModal({
              on: false,
              type: "",
            });
          })
          .then(() => {
            createToast("congratulations!, STEP 2");
          });
      } else {
        setRaycast({
          ...raycast,
          error: "answer is not correct",
        });
      }
    } else if (raycast.step === 3) {
      if (raycast.answer.toUpperCase() === VITE_C) {
        new Promise((resolve) => {
          resolve(
            setRaycast({
              ...raycast,
              step: 4,
            })
          );
        })
          .then(() => {
            setModal({
              on: false,
              type: "",
            });
          })
          .then(() => {
            createToast("congratulations. TEST");
          });
      } else {
        setRaycast({
          ...raycast,
          error: "answer is not correct",
        });
      }
    }
  };

  return {
    raycast,
    addRaycast,
    selectedName,
    changeInput,
    goNext,
  };
}
