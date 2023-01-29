import { registerTableEs } from "data/registertable";
import * as S from "./style";
import Markdown from "../Markdown/Markdown";
import { useState } from "react";
import SelectTap from "./SelectTap";
import InfoFormTap from "./InfoFormTap";
import PaypalTap from "./PaypalTap";
import StepBar from "./StepBar";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  return (
    <S.RegisterPage>
      <StepBar step={step} setStep={setStep} />
      {step === 1 && <SelectTap setStep={setStep} />}
      {step === 2 && <InfoFormTap setStep={setStep} />}
      {step === 3 && <PaypalTap setStep={setStep} />}
    </S.RegisterPage>
  );
}
