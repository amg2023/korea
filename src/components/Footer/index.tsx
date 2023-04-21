import PulseButton from "../common/button/PulseButton";
import useModalActions from "../../store/modal/query";
import * as S from "./style";
import JoyStick from "components/common/joystick/JoyStick";
import { useSizeEffect } from "utils/useSizeEffect";
import { useEffect, useState } from "react";
import useTipActions from "store/tip/query";
import ToolTip from "components/common/tooltip";
import { MAIN_PAGE } from "data/constant";
import { GradientText } from "components/common/text/Text";

export default function Footer() {
  const { modal } = useModalActions();
  const { tip } = useTipActions();
  const { width } = useSizeEffect();
  const [style, setStyle] = useState({
    width: "6rem",
    height: "3rem",
    fontSize: "1rem",
  });

  useEffect(() => {
    if (width > 1000)
      setStyle({
        width: "6rem",
        height: "3rem",
        fontSize: "1rem",
      });
    else if (width > 800)
      setStyle({
        width: "4rem",
        height: "2.2rem",
        fontSize: "0.7rem",
      });
  }, [width]);

  const onClickRegistertable = () => {
    window.location.href = MAIN_PAGE;
  };

  return (
    <S.Footer>
      {!modal.on && (
        <S.TitleLeft>
          <GradientText>AMG</GradientText>
          <GradientText>2022</GradientText>
        </S.TitleLeft>
      )}
      {!modal.on && <JoyStick />}
      {!modal.on && tip.on && <ToolTip />}
      {!modal.on && (
        <S.TitleRight>
          {/* <PulseButton
            style={{
              ...style,
              fontWeight: "200",
              textShadow: "0 0 10px black",
              background: "linear-gradient(45deg,#ee0979,#ff6a00)",
              boxShadow: "0 0 10px #ee0979",
              color: "black",
            }}
            title={"REGISTER"}
            onClick={onClickRegistertable}
          /> */}
        </S.TitleRight>
      )}
    </S.Footer>
  );
}
