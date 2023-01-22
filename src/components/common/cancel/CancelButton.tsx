import { ImCancelCircle } from "react-icons/im";
import { ICancelButton } from "../button/type";
import * as S from "./style";

export const CancelButton = ({ className, onClick }: ICancelButton) => {
  return (
    <S.CancelButton className={className ? className : ""} onClick={onClick}>
      <ImCancelCircle />
    </S.CancelButton>
  );
};
