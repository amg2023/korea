import { Html } from "@react-three/drei";
import * as S from "./style";
import { INameTag } from "./types";

export const NameTag = ({ name, width, bottom }: INameTag) => {
  return (
    <Html zIndexRange={[2, 0]}>
      <S.SmallTag width={width} bottom={bottom}>
        <div className="categoryset-text">{name}</div>
      </S.SmallTag>
    </Html>
  );
};
