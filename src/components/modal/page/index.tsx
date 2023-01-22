import { useAtom } from "jotai";
import { modalAtom } from "../../../store/modal/atom";
import { CancelButton } from "../../common/cancel/CancelButton";
import PicturePage from "./PicturePage";
import * as S from "./style";

export default function Page() {
  const [modal, setModal] = useAtom(modalAtom);

  const onClickCancel = () => {
    setModal({
      on: false,
      type: "",
    });
  };

  return (
    <S.Page>
      <CancelButton className="close" onClick={onClickCancel} />
      <PicturePage />
    </S.Page>
  );
}
