import { useSetAtom } from "jotai";
import { MouseEvent } from "react";
import { controlAtom } from "../../store/control/atom";
import { keys } from "../../utils/useControls";
import * as S from "./style";

export default function JoyStick() {
  const setMove = useSetAtom(controlAtom);

  const onMouseDown = (e: any) => {
    setMove((m) => ({
      ...m,
      [keys[e.target.id]]: true,
      stop: false,
    }));
  };

  const onMouseLeave = (e: any) => {
    setMove((m) => ({
      ...m,
      [keys[e.target.id]]: false,
      stop: true,
    }));
  };

  return (
    <S.JoyStick>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        id="ArrowUp"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
          className="up"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        id="ArrowDown"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          className="down"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        id="ArrowLeft"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
          className="left"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        id="ArrowRight"
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
          className="right"
        />
      </svg>
    </S.JoyStick>
  );
}
