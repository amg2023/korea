import * as S from "./style";
import { IPulseButton } from "./type";

// 프로필 이미지 아바타
export default function PulseButton({
  width = "40px",
  height = "40px",
  boxShadow = "2px 2px 10px var(--text-black-dark)",
  title = "",
  onClick,
  margin,
}: IPulseButton) {
  return (
    <S.PulseButton
      width={width}
      height={height}
      boxShadow={boxShadow}
      margin={margin}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <div className="border-div blob white">
        <div className="box">{title}</div>
      </div>
    </S.PulseButton>
  );
}
