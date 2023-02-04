import PulseButton from "components/common/button/PulseButton";
import { Ref, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const buttonStyle = {
  width: "10rem",
  height: "4rem",
  fontSize: "1.6rem",
  fontWeight: "200",
  textShadow: "0 0 10px black",
  background: "white",
  boxShadow: "0 0 2px white",
  color: "black",
};

export default function MainArea() {
  const pageARef = useRef<HTMLDivElement>();
  const buttonRef = useRef<HTMLDivElement>();
  const navigate = useNavigate();

  useEffect(() => {
    pageARef?.current?.classList.add("start");
    setTimeout(() => {
      buttonRef?.current?.classList.add("start");
    }, 1000);
  }, []);

  const onGoRegister = () => {
    navigate("/korea/register");
  };

  return (
    <S.SMainArea className="page A" ref={pageARef as Ref<HTMLDivElement>}>
      <div className="wrapper">
        <div className="base one"></div>
        <div className="base two"></div>
        <div className="base three"></div>
      </div>
      <div className="wrapper-inner">
        <div className="left">
          <h1>AMG KOREA 2022</h1>
        </div>
        <div className="right">
          <h1>SOUTH KOREA, SEOUL</h1>
          <h1 className="day">APRIL 26~30 2023</h1>
        </div>
        <div className="underButton" ref={buttonRef as Ref<HTMLDivElement>}>
          <PulseButton
            style={buttonStyle}
            title={"REGISTER"}
            onClick={onGoRegister}
          />
          <a href="#B" className="anchor">
            <PulseButton style={buttonStyle} title={"TIMETABLE"} />
          </a>
        </div>
      </div>
    </S.SMainArea>
  );
}
