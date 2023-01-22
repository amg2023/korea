import * as S from "./style";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import JoyStick from "./JoyStick";

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
      <>
        <S.Location>
          <div className="title">{`${t("SOUTH KOREA")}`}</div>
          <div className="title">{`${t("LOCATION")}`}</div>
          <div className="sns">
            <FaFacebookSquare className="facebook" />
            <FaInstagramSquare className="facebook" />
            <FaWhatsappSquare className="facebook" />
          </div>
        </S.Location>
        <S.Control>
          <div className="button">
            <button onClick={onClick}>
              <p>{`${t("LANGUAGE")}`}</p>
            </button>
          </div>
        </S.Control>
      </>

      <>
        <S.TitleLeft>
          AMG <span>2023</span>
        </S.TitleLeft>
        <S.TitleRight>2023</S.TitleRight>
        <JoyStick />
      </>
    </>
  );
}
