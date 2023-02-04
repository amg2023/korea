import RegisterPage from "components/page/RegisterPage";
import { Ref, useRef } from "react";
import useObserverEffect from "utils/useObserverEffect";
import { titleCB } from "..";
import * as S from "./style";

export default function RegisterArea() {
  const titleCRef = useRef<Element>();
  useObserverEffect(titleCRef, titleCB);
  return (
    <S.SRegisterArea className="page C" id="C">
      <div className="page-title" ref={titleCRef as Ref<HTMLDivElement>}>
        <h1>REGISTER</h1>
      </div>
      <RegisterPage />
    </S.SRegisterArea>
  );
}
