import PulseButton from "../common/button/PulseButton";
import useModalActions from "../../store/modal/query";
import * as S from "./style";
import JoyStick from "components/common/joystick/JoyStick";
import { useSizeEffect } from "utils/useSizeEffect";
import { useEffect, useState } from "react";
import JoyDiscription from "components/common/tooltip";
import { CancelButton } from "components/common/cancel/CancelButton";
import useTipActions from "store/tip/query";
import ToolTip from "components/common/tooltip";
import { useAtom } from "jotai";
import { threeAtom } from "store/three/atom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { modal, setModal } = useModalActions();
  const { tip, offTip } = useTipActions();
  const [three, setThree] = useAtom(threeAtom);
  const { width } = useSizeEffect();
  const navigate = useNavigate();
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
        width: "3rem",
        height: "2rem",
        fontSize: "0.8rem",
      });
  }, [width]);

  const onClickRegistertable = () => {
    setModal({ on: true, type: "registertable" });
  };

  return (
    <S.Footer>
      {!modal.on && (
        <S.TitleLeft>
          <div>
            AMG <span>2022</span>
          </div>
        </S.TitleLeft>
      )}
      {!modal.on && <JoyStick />}
      {!modal.on && tip.on && <ToolTip />}
      {!modal.on && (
        <S.TitleRight>
          <PulseButton
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
          />
        </S.TitleRight>
      )}
    </S.Footer>
  );
}
