import * as S from "./style";
import { useEffect, useState } from "react";
import { ITap } from "./type";
import PulseButton from "components/common/button/PulseButton";
import { GradientInput } from "components/common/input/GradientInput";
import usePayActions, { useMailMutation } from "store/pay/query";
export default function InfoFormTap({ setStep }: ITap) {
  const { pay } = usePayActions();
  const [complete, setComplete] = useState(false);
  const { sendMail, error, isLoading, isSuccess, isError } = useMailMutation();
  const onClickNext = () => {
    // setStep!(3);
    sendMail(pay.form);
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
    <S.InfoFormTap>
      <S.InfoFormContent>
        <h1>FORM (is TEST)</h1>
        <form className="form">
          <GradientInput label="name" value={pay.form.name} />
          <GradientInput label="email" value={pay.form.email} />
          <GradientInput label="country" value={pay.form.country} />
          <GradientInput label="phone" value={pay.form.phone} />
          <GradientInput label="memberId" value={pay.form.memberId} />
        </form>

        <div className="under">
          {isLoading && <h4>sending email</h4>}
          {isSuccess && <h4>success</h4>}
          {isError && <h4>error</h4>}
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
      </S.InfoFormContent>
    </S.InfoFormTap>
  );
}
