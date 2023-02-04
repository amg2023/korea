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
        width: "5rem",
        height: "2.5rem",
        fontSize: "1rem",
      });
  }, [width]);

  const onClickRegistertable = () => {
    setModal({ on: true, type: "registertable" });
  };

  const navigate = useNavigate();

  const onToggleThree = () => {
    setThree({
      on: !three.on,
    });
    if (three.on) {
      navigate("");
    } else {
      navigate("/?q=three");
    }
  };

  return (
    <S.Footer>
      {!modal.on && (
        <S.TitleLeft>
          {three.on && (
            <div>
              AMG <span>2022</span>
            </div>
          )}
          <PulseButton
            style={{
              width: "8rem",
              height: "3rem",
              fontSize: "1rem",
              fontWeight: "200",
              textShadow: "0 0 10px black",
              background: "white",
              boxShadow: "0 0 10px white",
              color: "black",
              zIndex: 300,
            }}
            title={!three.on ? "2D (go 3D)" : "3D (go 2D)"}
            onClick={onToggleThree}
          />
        </S.TitleLeft>
      )}
      {!modal.on && three.on && <JoyStick />}
      {!modal.on && tip.on && three.on && <ToolTip />}
      {!modal.on && three.on && (
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
