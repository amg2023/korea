import { registerTableEs } from "data/registertable";
import * as S from "./style";
import Markdown from "../Markdown/Markdown";
import PulseButton from "components/common/button/PulseButton";
import { useState } from "react";
import { ITap } from "./type";

export default function PaypalTap({ setStep }: ITap) {
  const [complete, setComplete] = useState(false);
  const onClickNext = () => {
    setStep!(2);
  };
  return (
    <S.PaypalTap>
      <S._PostContent>
        <h1>paypal</h1>
        <PulseButton
          title={"NEXT"}
          style={{
            width: "6rem",
            height: "2.4rem",
            fontSize: "1rem",
            background: "linear-gradient(45deg,#ee0979,#ff6a00)",
            boxShadow: "0 0 10px #ee0979",
          }}
          onClick={onClickNext}
        />
      </S._PostContent>
    </S.PaypalTap>
  );
}
