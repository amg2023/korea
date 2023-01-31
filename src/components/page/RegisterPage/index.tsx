import { useState } from "react";
import PaypalTap from "./PaypalTap";
import StepBar from "./StepBar";
import CourseSelectTap from "./CourseSelectTap";
import RequestFormTap from "./RequestFormTap";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <StepBar step={step} setStep={setStep} />
      {step === 1 && <CourseSelectTap setStep={setStep} />}
      {step === 2 && <RequestFormTap setStep={setStep} />}
      {step === 3 && <PaypalTap setStep={setStep} />}
    </>
  );
}
