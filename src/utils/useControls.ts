import { useEffect, useState } from "react";
import _ from "lodash";

type IKeys = {
  [name: string]: "f" | "b" | "l" | "r" | "z";
};

// 키 종류
const keys: IKeys = {
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
  const [move, setMove] = useState({
    f: false,
    b: false,
    l: false,
    r: false,
    z: false,
    stop: false,
  });

  useEffect(() => {
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
    // 이벤트 리스너
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keyup", keyUp);
    };
  }, []);
  return move;
};
