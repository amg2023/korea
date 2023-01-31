import { useSetAtom } from "jotai";
import { MouseEvent, Ref, useRef } from "react";
import { controlAtom } from "../../../store/control/atom";
import { keys } from "../control/useControls";
import * as S from "./style";
import { IJoyButton } from "./type";

export const JoyButtonProps = [
  { className: "up", value: "ArrowUp", icon: "↥" },
  { className: "down", value: "ArrowDown", icon: "↧" },
  { className: "left", value: "ArrowLeft", icon: "↢" },
  { className: "right", value: "ArrowRight", icon: "↣" },
  { className: "z", value: "KeyZ", icon: "GREET" },
];

export default function JoyButton({ className, value, icon }: IJoyButton) {
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

  const ref = useRef<HTMLButtonElement>();

  const onClick = () => {
    ref.current?.classList.add("click");
    setTimeout(() => {
      ref.current?.classList.remove("click");
    }, 300);
  };

  return (
    <S.JoyButton className={className} onClick={onClick}>
      <button
        ref={ref as Ref<HTMLButtonElement>}
        value={value}
        onPointerDown={(e) => onMouseDown(e)}
        onPointerUp={(e) => onMouseLeave(e)}
      >
        {icon}
      </button>
    </S.JoyButton>
  );
}
