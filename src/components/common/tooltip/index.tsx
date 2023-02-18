import useTipActions from "store/tip/query";
import { useSizeEffect } from "utils/useSizeEffect";
import { CancelButton } from "../cancel/CancelButton";
import Discription from "./Discription";
import JoyDiscriptionButton, { JoyDiscriptionPCProps } from "./ToolTipButton";
import ToolTipButton from "./ToolTipButton";
import { JoyDiscriptionProps } from "./ToolTipButton";
import * as S from "./style";
import { IJoyDiscription } from "./type";

export default function ToolTip() {
  const { offTip } = useTipActions();
  const { width } = useSizeEffect();

  return (
    <S.SToolTip>
      <S.SToolTipInner>
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
                <ToolTipButton
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
      </S.SToolTipInner>
    </S.SToolTip>
  );
}
