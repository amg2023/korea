import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { controlAtom } from "../store/Control";

type IKeys = {
  [name: string]: "f" | "b" | "l" | "r" | "z";
};

// 키 종류
export const keys: IKeys = {
  KeyW: "f",
  ArrowUp: "f",
  KeyS: "b",
  ArrowDown: "b",
  KeyA: "l",
  ArrowLeft: "l",
  KeyD: "r",
  ArrowRight: "r",
  KeyZ: "z",
};

export const useControls = () => {
  const [move, setMove] = useAtom(controlAtom);
  const keyDown = (e: KeyboardEvent) => {
    setMove((m) => ({
      ...m,
      [keys[e.code]]: true,
      stop: false,
    }));
  };
  const keyUp = (e: KeyboardEvent) => {
    setMove((m) => ({
      ...m,
      [keys[e.code]]: false,
      stop: true,
    }));
  };

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
