import { registerTableEs } from "data/registertable";
import * as S from "./style";
import Markdown from "../Markdown/Markdown";

export default function RegisterPage() {
  return (
    <S.RegisterPage>
      <Markdown content={registerTableEs} />
    </S.RegisterPage>
  );
}
