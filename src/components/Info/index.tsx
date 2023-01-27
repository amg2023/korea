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

  return (
    <>
      <S.Location>
        <div className="title">
          <p>SOUTH KOREA | SEOUL | APRIL 26-30, 2023</p>
        </div>

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

        {/* <div>
          <Paypal />
        </div> */}
        {KeyArray.map((item: IKey, i: number) => {
          return (
            <KeyIcon key={i} code={item.code} description={item.description} />
          );
        })}
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
        <div>
          <Clock />
        </div>
      </S.Control>
      {/* <S.TitleLeft>
        AMG <span>2022</span>
      </S.TitleLeft>
      <S.TitleRight>2022</S.TitleRight> */}
      {!modal.on && <JoyStick />}
    </>
  );
}
