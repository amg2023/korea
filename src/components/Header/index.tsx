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
import * as S from "./style";
import { GradientIcon } from "components/common/icon/GradientIcon";

export default function Header() {
  const { setModal } = useModalActions();
  const { tip, onTip, offTip } = useTipActions();

  const onClickTimetable = () => {
    setModal({ on: true, type: "timetable" });
  };

  const onGoAnother = (url: string) => {
    window.location.href = url;
  };
  return (
    <S.Header>
      <S.HeaderLeft>
        <GradientIcon
          text={"FACEBOOK"}
          onClick={() => onGoAnother(FACEBOOK_URL)}
          className="icon"
        >
          <AiOutlineFacebook />
        </GradientIcon>
        <GradientIcon
          text={"INSTARGRAM"}
          onClick={() => onGoAnother(INSTARGRAM_URL)}
          className="icon"
        >
          <AiOutlineInstagram />
        </GradientIcon>
        <GradientIcon
          text={"TIMETABLE"}
          onClick={onClickTimetable}
          className="icon"
        >
          <BsTable />
        </GradientIcon>
        <GradientIcon
          text={`TOOLTIP ${tip.on ? "OFF" : "ON"}`}
          className="icon"
        >
          {tip.on ? (
            <MdTipsAndUpdates className="title-mark" onClick={offTip} />
          ) : (
            <MdOutlineTipsAndUpdates className="title-mark" onClick={onTip} />
          )}
        </GradientIcon>
      </S.HeaderLeft>
      <S.HeaderRight>
        <div className="gomain">
          <h5 className="slash">|</h5>
          <h5>SOUTH KOREA</h5>
          <h5 className="slash">|</h5>
          <h5>SEOUL</h5>
          <h5 className="slash">|</h5>
          <h5>APRIL 26-30, 2023</h5>
          <h5 className="slash">|</h5>
        </div>
        <Clock />
      </S.HeaderRight>
    </S.Header>
  );
}
