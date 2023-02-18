import JoyButton, { JoyButtonProps } from "./JoyButton";
import { IJoyButton } from "./type";
import * as S from "./style";
import { useAtomValue } from "jotai";
import { threeAtom } from "store/three/atom";

export default function JoyStick() {
  const three = useAtomValue(threeAtom);

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
