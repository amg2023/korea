import { Html } from "@react-three/drei";
import * as S from "./style";
import { INameTag } from "./types";

export const Hint = ({ name, width, bottom, top }: INameTag) => {
  return (
    <Html
      zIndexRange={[1, 0]}
      style={{
        zIndex: -10,
      }}
    >
      <S.Hint width={width} bottom={bottom} top={top}>
        <h1>HINT</h1>
        <hr />
        <div className="categoryset-text">{name}</div>
      </S.Hint>
    </Html>
  );
};
