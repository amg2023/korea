import * as S from "./style";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { useAtom } from "jotai";
import { languageAtom } from "../../store/Language";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import langKo from "../../lang/lang.ko.json";

export default function Info() {
  const { t, i18n } = useTranslation();

  const onClick = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ko");
    } else {
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    console.log(i18n.language);
  }, [i18n, t]);

  return (
    <S.Info>
      <S.InfoInner>
        <S.Location>
          <div className="title">{`${t("SOUTH KOREA")}`}</div>
          <div className="title">{`${t("LOCATION")}`}</div>
          <div>
            <FaFacebookSquare className="facebook" />
            <FaInstagramSquare className="facebook" />
          </div>
          <div className="contribute">
            <p>{`${t("MADE")}`}</p>
          </div>
          <div className="contribute">
            <p>{`${t("CONTRIBUTE")}`}</p>
          </div>
        </S.Location>
        <S.Control>
          <div className="title">LAMGUAGE: {`${t("LANGUAGE")}`}</div>
          <div className="button">
            <button onClick={onClick}>
              <p>{`${t("CHANGE")}`}</p>
            </button>
          </div>
        </S.Control>
      </S.InfoInner>

      <S.Title className="full">
        <S.TitleLeft>AMG</S.TitleLeft>
        <S.TitleRight>2023</S.TitleRight>
      </S.Title>
    </S.Info>
  );
}
