import * as S from "./style";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import JoyStick from "./JoyStick";
import {
  FACEBOOK_URL,
  INSTARGRAM_URL,
  WHATSAPP_URL,
} from "../../data/constant";
import Clock from "./Clock";
import { KeyArray } from "./Key";
import { IKey } from "./type";
import KeyIcon from "./Key";
import Paypal from "../common/button/Paypal.js";
import PulseButton from "../common/button/PulseButton";
import useModalActions from "../../store/modal/query";

export default function Info() {
  const { modal, setModal } = useModalActions();

  const onClickTimetable = () => {
    setModal({ on: true, type: "timetable" });
  };

  const onClickRegistertable = () => {
    setModal({ on: true, type: "registertable" });
  };

  return (
    <>
      <S.Location>
        <div className="title">
          <PulseButton
            width={"5rem"}
            height={"2rem"}
            title={"TIMETABLE"}
            margin={"0 1rem 0 0"}
            onClick={onClickTimetable}
          />
          <PulseButton width={"5rem"} height={"2rem"} title={"TIP"} />
        </div>

        <div className="sns">
          <a href={FACEBOOK_URL}>
            <FaFacebookSquare />
          </a>
          <a href={INSTARGRAM_URL}>
            <FaInstagramSquare />
          </a>
          <a href={WHATSAPP_URL}>
            <FaWhatsappSquare />
          </a>
        </div>
      </S.Location>
      <S.Control>
        <div className="title">
          <h5> SOUTH KOREA | </h5>
          <h5> SEOUL | </h5>
          <h5> APRIL 26-30, 2023 | </h5>
          <h5>We are preparing to open.</h5>
        </div>
        <div>
          <Clock />
        </div>
      </S.Control>
      {/* <S.TitleLeft>
        AMG <span>2022</span>
      </S.TitleLeft>
      <S.TitleRight>2022</S.TitleRight> */}
      {!modal.on && (
        <S.TitleLeft>
          <div>
            AMG <span>2022</span>
          </div>
        </S.TitleLeft>
      )}

      {!modal.on && <JoyStick />}
      {!modal.on && (
        <S.TitleRight>
          <PulseButton
            style={{
              width: "5rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "200",
              textShadow: "0 0 10px black",
              background: "linear-gradient(45deg,#ee0979,#ff6a00)",
              boxShadow: "0 0 10px #ee0979",
              color: "black",
              zIndex: 100,
            }}
            title={"REGISTER"}
            onClick={onClickRegistertable}
          />
        </S.TitleRight>
      )}
    </>
  );
}
