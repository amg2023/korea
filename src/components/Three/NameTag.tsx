import { Html } from "@react-three/drei";
import * as S from "./style";
import { INameTag } from "./types";

export const NameTag = ({ name, width, bottom, top }: INameTag) => {
  return (
    <Html
      zIndexRange={[1, 0]}
      style={{
        zIndex: -10,
      }}
    >
      <S.SmallTag width={width} bottom={bottom} top={top}>
        <div className="categoryset-text">{name}</div>
      </S.SmallTag>
    </Html>
  );
};
