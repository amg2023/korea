import * as S from "./style";
import { IButton } from "./type";

export const GradientButton = ({ children, onClick }: IButton) => {
  return (
    <S.GradientButton type="submit" onClick={onClick}>
      {children}
    </S.GradientButton>
  );
};
