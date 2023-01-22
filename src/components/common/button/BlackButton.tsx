import * as S from "./style";
import { IButton } from "./type";

export const BlackButton = ({ children, onClick }: IButton) => {
  return (
    <S.BlackButton type="submit" onClick={onClick}>
      {children}
    </S.BlackButton>
  );
};
