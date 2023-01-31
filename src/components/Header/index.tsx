import * as S from "./style";

import { BsTable } from "react-icons/bs";
import { MdOutlineTipsAndUpdates, MdTipsAndUpdates } from "react-icons/md";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  FACEBOOK_URL,
  INSTARGRAM_URL,
  WHATSAPP_URL,
} from "../../data/constant";
import Clock from "./Clock";
import useModalActions from "../../store/modal/query";
import useTipActions from "store/tip/query";

export default function Header() {
  const { modal, setModal } = useModalActions();
  const { tip, onTip, offTip } = useTipActions();

  const onClickTimetable = () => {
    setModal({ on: true, type: "timetable" });
  };

  return (
    <S.Header>
      <S.HeaderLeft>
        <div className="facebook">
          <a href={FACEBOOK_URL}>
            <AiOutlineFacebook />
          </a>
        </div>
        <div className="instargram">
          <a href={INSTARGRAM_URL}>
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="whatsapp">
          <a href={WHATSAPP_URL}>
            <AiOutlineWhatsApp />
          </a>
        </div>

        <div className="title" onClick={onClickTimetable}>
          <p>TIMETABLE</p>
          <BsTable className="title-mark" />
        </div>
        <div className="title">
          {tip.on ? (
            <>
              <p className="title-p" onClick={offTip}>
                TIP ON
              </p>
              <MdTipsAndUpdates className="title-mark" onClick={offTip} />
            </>
          ) : (
            <>
              <p className="title-p" onClick={onTip}>
                TIP OFF
              </p>
              <MdOutlineTipsAndUpdates className="title-mark" onClick={onTip} />
            </>
          )}
        </div>
      </S.HeaderLeft>

      <S.HeaderRight>
        <h5 className="slash">|</h5>
        <Clock />
        <h5 className="slash">|</h5>
        <h5>SOUTH KOREA</h5>
        <h5 className="slash">|</h5>
        <h5>SEOUL</h5>
        <h5 className="slash">|</h5>
        <h5>APRIL 26-30, 2023</h5>
      </S.HeaderRight>
    </S.Header>
  );
}
