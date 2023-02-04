import { Ref, useRef } from "react";
import useObserverEffect from "utils/useObserverEffect";
import { titleCB } from "..";
import * as S from "./style";
import HangulPage from "components/page/HangulPage";

export default function HangulArea() {
  const titleCRef = useRef<Element>();
  useObserverEffect(titleCRef, titleCB);

  return (
    <S.SHangulArea className="page C" id="C">
      <div className="page-title" ref={titleCRef as Ref<HTMLDivElement>}>
        <h1>HANGUL</h1>
      </div>
      <HangulPage />
    </S.SHangulArea>
  );
}
