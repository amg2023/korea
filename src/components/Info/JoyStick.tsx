import { useSetAtom } from "jotai";
import { MouseEvent } from "react";
import { controlAtom } from "../../store/control/atom";
import { keys } from "../../utils/useControls";
import * as S from "./style";
import { AiOutlineDownCircle } from "react-icons/ai";

export default function JoyStick() {
  const setMove = useSetAtom(controlAtom);

  const onMouseDown = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const component = e.target as HTMLButtonElement;
    setMove((m) => ({
      ...m,
      [keys[component.value]]: true,
      stop: false,
    }));
  };

  const onMouseLeave = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const component = e.target as HTMLButtonElement;
    setMove((m) => ({
      ...m,
      [keys[component.value]]: false,
      stop: true,
    }));
  };

  return (
    <S.JoyStick>
      <button
        className="up"
        value="ArrowUp"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        ↥
      </button>
      <button
        className="down"
        value="ArrowDown"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        ↧
      </button>
      <button
        className="left"
        value="ArrowLeft"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        ↢
      </button>
      <button
        className="right"
        value="ArrowRight"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        ↣
      </button>
    </S.JoyStick>
  );
}
