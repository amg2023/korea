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

export default function Info() {
  const { t, i18n } = useTranslation();
  const onClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ko");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <>
      <S.Location>
        <div className="title">{`${t("SOUTH KOREA")}`}</div>
        <div className="title">{`${t("LOCATION")}`}</div>
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
        {/* <div>
          <Paypal />
        </div> */}
        {KeyArray.map((item: IKey, i: number) => {
          return (
            <KeyIcon key={i} code={item.code} description={item.description} />
          );
        })}
        <PulseButton width={"4rem"} height={"2rem"} />
      </S.Location>
      <S.Control>
        <div className="button">
          <button onClick={onClick}>
            <p>{`${t("LANGUAGE")}`}</p>
          </button>
        </div>
        <div>
          <Clock />
        </div>
      </S.Control>
      <S.TitleLeft>
        AMG <span>2022</span>
      </S.TitleLeft>
      <S.TitleRight>2022</S.TitleRight>
      <JoyStick />
    </>
  );
}
