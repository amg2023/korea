import useTipActions from "store/tip/query";
import { useSizeEffect } from "utils/useSizeEffect";
import { CancelButton } from "../cancel/CancelButton";
import Discription from "./Discription";
import JoyDiscriptionButton, { JoyDiscriptionPCProps } from "./JoyButton";
import JoyButton, { JoyDiscriptionProps } from "./JoyButton";
import * as S from "./style";
import { IJoyDiscription } from "./type";

export default function JoyDiscription() {
  const { tip, offTip } = useTipActions();
  const { width } = useSizeEffect();
  return (
    <S.JoyStick>
      <S.JoyStickInner>
        <CancelButton
          className="cancel"
          onClick={() => {
            offTip();
          }}
        />
        <Discription />
        {width > 800
          ? JoyDiscriptionPCProps.map((item: IJoyDiscription, key: number) => {
              return (
                <JoyDiscriptionButton
                  key={key}
                  className={item.className}
                  value={item.value}
                  icon={item.icon}
                />
              );
            })
          : JoyDiscriptionProps.map((item: IJoyDiscription, key: number) => {
              return (
                <JoyDiscriptionButton
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
