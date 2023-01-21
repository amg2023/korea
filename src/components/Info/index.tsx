import * as S from "./style";

export default function Info() {
  return (
    <S.Info>
      <S.InfoInner>
        <S.Location>SOUTH KOREA</S.Location>
      </S.InfoInner>
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            height: "100%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "black",
          }}
        >
          <b>MadeBy YeomDongHwan</b>
        </p>
      </div>
      <S.Title className="full">
        <S.TitleLeft>AMG</S.TitleLeft>
        <S.TitleRight>2023</S.TitleRight>
      </S.Title>
    </S.Info>
  );
}
