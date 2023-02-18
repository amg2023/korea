import * as S from "./style";
import { IAvatar } from "./type";

// 프로필 이미지 아바타
export default function Avatar({
  imageUrl = "",
  width = "40px",
  height = "40px",
  boxShadow = "2px 2px 10px var(--text-black-dark)",
  className = "guest",
}: IAvatar) {
  return (
    <S.SAvatar width={width} height={height} boxShadow={boxShadow}>
      <div className="border-div blob white">
        <div className="box">
          <img
            src={`${
              imageUrl === null || imageUrl === ""
                ? "/image/common/avatar.png"
                : imageUrl
            }`}
            className={`avatar-img ${className}`}
          />
        </div>
      </div>
    </S.SAvatar>
  );
}
