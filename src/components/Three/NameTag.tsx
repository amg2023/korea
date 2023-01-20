import { Html } from "@react-three/drei";
import * as S from "./style";

export type INameTag = {
  name: string;
};

export const NameTag = ({ name }: INameTag) => {
  return (
    <>
      <Html zIndexRange={[2, 0]}>
        <S.SmallTag>
          <div className="categoryset-text">{name}</div>
        </S.SmallTag>
      </Html>
    </>
  );
};
