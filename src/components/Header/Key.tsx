import * as S from "./style";
import { IKey, IKeyArray } from "./type";

export const KeyArray: IKeyArray = [
  {
    code: "Z",
    description: "인사",
  },
  {
    code: "↥",
    description: "UP",
  },
  {
    code: "↧",
    description: "DOWN",
  },
  {
    code: "↢",
    description: "TURN LEFT",
  },
  {
    code: "↣",
    description: "TURN LEFT",
  },
];

export default function KeyIcon({ code, description }: IKey) {
  return (
    <S.KeyIcon>
      {/* <S.Key>
        <p>{code}</p>
      </S.Key>
      <div>
        <p>{description}</p>
      </div> */}
    </S.KeyIcon>
  );
}
