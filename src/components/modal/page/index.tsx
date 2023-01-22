import useModalActions from "../../../store/modal/query";
import { CancelButton } from "../../common/cancel/CancelButton";
import HangulPage from "./HangulPage";
import SeoulPage from "./SeoulPage";
import SsirumPage from "./SsirumPage";
import * as S from "./style";
import TigerPage from "./TigerPage";

export default function Page() {
  const { onClickCancel, modal } = useModalActions();

  return (
    <S.Page>
      <CancelButton className="close" onClick={onClickCancel} />
      {modal.type === "ssirum" && <SsirumPage />}
      {modal.type === "hangul" && <HangulPage />}
      {modal.type === "seoul" && <SeoulPage />}
      {modal.type === "tiger" && <TigerPage />}
    </S.Page>
  );
}
