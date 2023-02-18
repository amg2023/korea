import * as S from "./style";

export default function Background({
  A,
  B,
  C,
  D,
  E,
  F,
}: {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
  F?: string;
}) {
  return (
    <S.Background className="background" A={A} B={B} C={C} D={D} E={E} F={F}>
      <div className="wrapper">
        <div className="base one"></div>
        <div className="base two"></div>
        <div className="base three"></div>
        <div className="base four"></div>
        <div className="base five"></div>
      </div>
    </S.Background>
  );
}
