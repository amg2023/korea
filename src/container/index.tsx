import useModalActions from "../store/modal/query";
import { CancelButton } from "../components/common/cancel/CancelButton";
import HangulPage from "./HangulPage";
import HotelPage from "./HotelPage";
import SeoulPage from "./SeoulPage";
import * as S from "./style";
import TimetablePage from "./TimetablePage";

export default function Page() {
  const { modal } = useModalActions();

  return (
    <S.Page>
      {modal.type === "timetable" && <TimetablePage />}
      {modal.type === "hangul" && <HangulPage />}
      {modal.type === "seoul" && <SeoulPage />}
      {modal.type === "hotel" && <HotelPage />}
    </S.Page>
  );
}
