import JoyButton, { JoyButtonProps } from "./JoyButton";
import { IJoyButton } from "./type";
import * as S from "./style";

export default function JoyStick() {
  return (
    <S.JoyStick>
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
