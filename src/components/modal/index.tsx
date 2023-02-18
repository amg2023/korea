import Page from "../../container";
import { useAtomValue } from "jotai";
import * as S from "./style";
import useModalActions from "store/modal/query";
import { CancelButton } from "components/common/cancel/CancelButton";
export default function ModalPage() {
  const { onClickCancel, modal } = useModalActions();

  return (
    <S.Modal modal={modal.on}>
      <div className="cancel">
        <CancelButton onClick={onClickCancel} />
      </div>
      <Page />
    </S.Modal>
  );
}
