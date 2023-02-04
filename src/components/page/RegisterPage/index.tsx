import PaypalTap from "components/PaypalTap";
import SelectTap from "components/SelectTap";
import { Ref, useEffect, useRef, useState } from "react";
import FormTap from "components/FormTap";

import * as S from "./style";

export default function RegisterPage() {
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
    <S.Register ref={ref as Ref<HTMLDivElement>}>
      <h1>REGISTER</h1>
      {step === 1 && <SelectTap setStep={setStep} />}
      {step === 2 && <FormTap setStep={setStep} />}
      {step === 3 && <PaypalTap setStep={setStep} />}
    </S.Register>
  );
}
