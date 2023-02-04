import { Ref, useRef } from "react";
import useObserverEffect from "utils/useObserverEffect";
import { titleCB } from "..";
import * as S from "./style";
import SeoulPage from "components/page/SeoulPage";

export default function SeoulArea() {
  const titleDRef = useRef<Element>();
  useObserverEffect(titleDRef, titleCB);

  return (
    <S.SSeoulArea className="page D" id="D">
      <div className="page-title" ref={titleDRef as Ref<HTMLDivElement>}>
        <h1>SEOUL</h1>
      </div>
      <SeoulPage />
    </S.SSeoulArea>
  );
}
