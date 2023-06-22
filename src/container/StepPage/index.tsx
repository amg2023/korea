import { LineInput } from "components/common/input/LineInput";
import * as S from "./style";
import useRaycastActions from "store/raycast/query";
import PulseButton from "components/common/button/PulseButton";

export default function StepPage() {
  const { raycast, changeInput, goNext } = useRaycastActions();
  return (
    <S.StepPage>
      {raycast.step === 4 ? (
        <>
          <h1>THANKS</h1>
          <p>이은주</p>
          <p>소미경</p>
          <p>문해찬</p>
          <p>김채영</p>
          <p>황상윤</p>
          <p>이재원</p>
          <p>이은조</p>
          <p>조용인</p>
          <p>윤우진</p>
          <p>이계현</p>

          <br />
          <p>BY 염동환</p>
        </>
      ) : (
        <>
          <h2>STEP {raycast.step}) PLEASE ENTET CORRECT ANSWER</h2>
          {raycast.step === 3 && (
            <p>
              almost there. Please input the next answer: The [] deer is a
              cervid mammal, along with wild boars and deer, and is a common
              wild animal that can be frequently encountered in South Korea.
            </p>
          )}
          <LineInput
            type={"email"}
            name={"answer"}
            placeholder={"enter your answer"}
            onChange={changeInput}
            label={"answer"}
          />
          <h4>{raycast.error}</h4>

          <PulseButton
            style={{
              width: "6rem",
              fontWeight: "200",
              textShadow: "0 0 10px black",
              background: "linear-gradient(45deg,#ee0979,#ff6a00)",
              boxShadow: "0 0 10px #ee0979",
              color: "black",
            }}
            title={"ANSWER"}
            onClick={goNext}
          />
        </>
      )}
    </S.StepPage>
  );
}
