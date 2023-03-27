import { useAtom } from "jotai";
import { useEffect } from "react";
import { controlAtom } from "../../../store/control/atom";

type IKeys = {
  [name: string]: "f" | "b" | "l" | "r" | "z";
};

// 키 종류
export const keys: IKeys = {
  ArrowUp: "f",
  ArrowDown: "b",
  ArrowLeft: "l",
  ArrowRight: "r",
  KeyZ: "z",
};

export const useControls = () => {
  const [move, setMove] = useAtom(controlAtom);
  function keyDown(e: KeyboardEvent) {
    setMove((m) => ({
      ...m,
      [keys[e.code]]: true,
      stop: false,
    }));
  }
  function keyUp(e: KeyboardEvent) {
    setMove((m) => ({
      ...m,
      [keys[e.code]]: false,
      stop: true,
    }));
  }

  useEffect(() => {
    // 이벤트 리스너
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keyup", keyUp);
    };
  }, []);
  return { move, keyDown, keyUp, setMove };
};
