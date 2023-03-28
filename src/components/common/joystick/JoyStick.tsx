import JoyButton, { JoyButtonProps } from "./JoyButton";
import { IJoyButton } from "./type";
import { isBrowser } from "react-device-detect";
import * as S from "./style";

export default function JoyStick() {
  return (
    <S.JoyStick
      style={{
        display: isBrowser ? "none" : "flex",
      }}
    >
      <S.JoyStickInner>
        {JoyButtonProps.map((item: IJoyButton, key: number) => {
          return (
            <JoyButton
              key={key}
              className={item.className}
              value={item.value}
              icon={item.icon}
            />
          );
        })}
      </S.JoyStickInner>
    </S.JoyStick>
  );
}
