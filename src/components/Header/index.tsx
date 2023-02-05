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
import { useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { threeAtom } from "store/three/atom";
import { userAtom } from "store/user/atom";
import { AvatarIcon } from "components/common/icon/AvatarIcon";
import { GradientIcon } from "components/common/icon/GradientIcon";
import { RiFileUserLine } from "react-icons/ri";
import { useUserActions, useUserQueryEffect } from "store/user/query";
import Avatar from "components/common/avatar/Avatar";

export default function Header() {
  const { setModal } = useModalActions();
  const { tip, onTip, offTip } = useTipActions();
  const [three, setThree] = useAtom(threeAtom);
  const navigate = useNavigate();
  const user = useAtomValue(userAtom);
  const { logout } = useUserActions();

  useUserQueryEffect();

  // useEffect(() => {
  //   if (three.on) {
  //     navigate("/?q=three");
  //   } else {
  //     navigate("");
  //   }
  // }, [three]);

  const onClickTimetable = () => {
    if (three.on) setModal({ on: true, type: "timetable" });
    else navigate("/timetable/");
  };

  const onClickAuth = () => {
    setModal({ on: true, type: "login" });
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
        {user && user.user ? (
          <AvatarIcon username={user.user.name} onLogout={logout}>
            <Avatar
              width={"2.5rem"}
              height={"2.5rem"}
              imageUrl={user.user.imageUrl}
              boxShadow={"2px 2px 10px white"}
              className={"manager"}
            />
          </AvatarIcon>
        ) : (
          <GradientIcon text={"LOGIN"}>
            <RiFileUserLine
              className="header-icon RiFileUserLine"
              onClick={onClickAuth}
            />
          </GradientIcon>
        )}
        {three.on && (
          <>
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
                  <MdOutlineTipsAndUpdates
                    className="title-mark"
                    onClick={onTip}
                  />
                </>
              )}
            </div>
          </>
        )}
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
