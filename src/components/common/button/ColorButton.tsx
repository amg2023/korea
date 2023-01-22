import * as S from "./style";
import { IButton } from "./type";

export const ColorButton = ({
  children,
  onClick,
  color,
  fontColor,
  width,
}: IButton) => {
  return (
    <S.ColorButton
      type="submit"
      onClick={onClick}
      color={color}
      fontColor={fontColor}
      width={width}
    >
      {children}
    </S.ColorButton>
  );
};
