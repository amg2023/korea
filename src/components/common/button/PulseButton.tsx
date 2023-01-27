import * as S from "./style";
import { IPulseButton } from "./type";

// 프로필 이미지 아바타
export default function PulseButton({
  imageUrl = "",
  width = "40px",
  height = "40px",
  boxShadow = "2px 2px 10px var(--text-black-dark)",
  className = "admin",
}: IPulseButton) {
  return (
    <S.PulseButton width={width} height={height} boxShadow={boxShadow}>
      <div className="border-div blob white">
        <div className="box">TIP</div>
      </div>
    </S.PulseButton>
  );
}
