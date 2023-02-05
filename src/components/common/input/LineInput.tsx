import * as S from "./style";
import { IInput } from "./types";

export const LineInput = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}: IInput) => {
  return (
    <S.LineInput>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange!(e)}
        value={value}
      ></input>
    </S.LineInput>
  );
};
