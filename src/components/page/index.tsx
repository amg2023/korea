import useModalActions from "../../store/modal/query";
import { CancelButton } from "../common/cancel/CancelButton";
import RegisterPage from "./RegisterPage";
import * as S from "./style";
import TimetablePage from "./TimetablePage";

export default function Page() {
  const { onClickCancel, modal } = useModalActions();

  return (
    <S.Page>
      <CancelButton className="close" onClick={onClickCancel} />
      {modal.type === "timetable" && <TimetablePage />}
      {modal.type === "registertable" && <RegisterPage />}
    </S.Page>
  );
}
