import * as S from "./style";
import { useEffect, useState } from "react";
import { ITap } from "../page/RegisterPage/type";
import PulseButton from "components/common/button/PulseButton";
import { GradientInput } from "components/common/input/GradientInput";
import usePayActions, { useMailMutation } from "store/pay/query";
export default function FormTap({ setStep }: ITap) {
  const { pay } = usePayActions();
  const [complete, setComplete] = useState(false);
  const { sendMail, isLoading, isSuccess, isError } = useMailMutation();

  const onClickBack = () => {
    setStep!(1);
  };

  const onClickNext = () => {
    setStep!(3);
  };

  useEffect(() => {
    for (const isValid of Object.values(pay.validate)) {
      if (!isValid) {
        setComplete(true);
        break;
      }
      setComplete(false);
    }
  }, [pay]);

  useEffect(() => {
    if (isSuccess) setStep!(3);
  }, [isSuccess]);

  return (
    <S.FormContent>
      <h1>(STEP 2) WRITE FORM</h1>
      <h2>total price: {pay.total} </h2>
      <form className="form">
        <GradientInput
          label="name"
          placeholder={"ex) yeom donghwan"}
          value={pay.form.name}
        />
        <GradientInput
          label="birth"
          placeholder={"ex) 2000.01.01"}
          value={pay.form.birth}
        />
        <GradientInput
          label="email"
          placeholder={"ex) yeomdonghwan@mensa.com"}
          value={pay.form.email}
        />
        <GradientInput label="country" value={pay.form.country} />
        <GradientInput
          label="phone"
          placeholder={"ex) 010-1234-5678"}
          value={pay.form.phone}
        />
        <GradientInput
          label="memberId"
          placeholder={"ex) ABC-12345"}
          value={pay.form.memberId}
        />
      </form>
      <div>
        {isLoading && <h4>sending email</h4>}
        {isSuccess && <h4>success</h4>}
        {isError && <h4>error</h4>}
      </div>
      <div className="under">
        <PulseButton
          title={"BACK"}
          style={{
            width: "6rem",
            height: "2.4rem",
            fontSize: "1rem",
            background: "linear-gradient(45deg,#000000, #434343)",
            boxShadow: "0 0 10px #000000",
          }}
          onClick={onClickBack}
        />
        <PulseButton
          title={"NEXT"}
          style={{
            width: "6rem",
            height: "2.4rem",
            fontSize: "1rem",
            background: !complete
              ? "linear-gradient(45deg,#ee0979,#ff6a00)"
              : "gray",
            boxShadow: !complete ? "0 0 10px #ee0979" : "",
          }}
          onClick={onClickNext}
          complete={complete}
        />
      </div>
    </S.FormContent>
  );
}
