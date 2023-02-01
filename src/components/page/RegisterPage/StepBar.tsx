import * as S from "./style";
import { ITap } from "./type";

export default function StepBar({ step }: ITap) {
  return (
    <S.StepBar>
      <div className={"step" + (step === 1 ? " select" : "")}>
        <div className={"dot"}></div>
      </div>
      <div className={"step" + (step === 2 ? " select" : "")}>
        <div className={"dot"}></div>
      </div>
      <div className={"step" + (step === 3 ? " select" : "")}>
        <div className={"dot"}></div>
      </div>
    </S.StepBar>
  );
}
