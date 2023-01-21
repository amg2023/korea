import * as S from "./style";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { keys, useControls } from "../../utils/useControls";
import { MouseEvent } from "react";
import { controlAtom } from "../../store/Control";
import { useAtom } from "jotai";

function JoyStick() {
  const [move, setMove] = useAtom(controlAtom);

  const onMouseDown = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const component = e.target as HTMLButtonElement;
    setMove((m) => ({
      ...m,
      [keys[component.value]]: true,
      stop: false,
    }));
    console.log(move);
  };
  const onMouseLeave = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const component = e.target as HTMLButtonElement;
    setMove((m) => ({
      ...m,
      [keys[component.value]]: false,
      stop: true,
    }));
    console.log(move);
  };
  return (
    <S.JoyStick>
      <button
        className="up"
        value="ArrowUp"
        onPointerDown={(e: any) => onMouseDown(e)}
        onPointerUp={(e: any) => onMouseLeave(e)}
      >
        ↥
      </button>
      <button
        className="down"
        value="ArrowDown"
        onPointerDown={(e: any) => onMouseDown(e)}
        onPointerUp={(e: any) => onMouseLeave(e)}
      >
        ↧
      </button>
      <button
        className="left"
        value="ArrowLeft"
        onPointerDown={(e: any) => onMouseDown(e)}
        onPointerUp={(e: any) => onMouseLeave(e)}
      >
        ↢
      </button>
      <button
        className="right"
        value="ArrowRight"
        onPointerDown={(e: any) => onMouseDown(e)}
        onPointerUp={(e: any) => onMouseLeave(e)}
      >
        ↣
      </button>
    </S.JoyStick>
  );
}

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
    <S.Info>
      <S.InfoInner>
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
      </S.InfoInner>

      <S.Title className="full">
        <S.TitleLeft>
          AMG <span>2023</span>
        </S.TitleLeft>
        <S.TitleRight>2023</S.TitleRight>
        <JoyStick />
      </S.Title>
    </S.Info>
  );
}
