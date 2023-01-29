import useModalActions from "../../store/modal/query";
import { CancelButton } from "../common/cancel/CancelButton";
import HangulPage from "./HangulPage";
import HotelPage from "./HotelPage";
import RegisterPage from "./RegisterPage";
import SeoulPage from "./SeoulPage";
import * as S from "./style";
import TimetablePage from "./TimetablePage";

export default function Page() {
  const { onClickCancel, modal } = useModalActions();

  return (
    <S.Page>
      <CancelButton className="close" onClick={onClickCancel} />
      {modal.type === "timetable" && <TimetablePage />}
      {modal.type === "registertable" && <RegisterPage />}
      {modal.type === "hangul" && <HangulPage />}
      {modal.type === "seoul" && <SeoulPage />}
      {modal.type === "hotel" && <HotelPage />}
    </S.Page>
  );
}
