import FormTap from "components/FormTap";
import PaypalTap from "components/PaypalTap";
import SelectTap from "components/SelectTap";
import { Ref, useEffect, useRef, useState } from "react";
import useObserverEffect from "utils/useObserverEffect";
import { titleCB } from "..";
import * as S from "./style";

export default function RegisterArea() {
  const titleCRef = useRef<Element>();
  useObserverEffect(titleCRef, titleCB);

  const [step, setStep] = useState(1);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [step, setStep]);

  return (
    <S.SRegisterArea className="page E" id="E">
      <div className="page-title" ref={titleCRef as Ref<HTMLDivElement>}>
        <h1>REGISTER</h1>
      </div>
      {step === 1 && <SelectTap setStep={setStep} />}
      {step === 2 && <FormTap setStep={setStep} />}
      {step === 3 && <PaypalTap setStep={setStep} />}
    </S.SRegisterArea>
  );
}
