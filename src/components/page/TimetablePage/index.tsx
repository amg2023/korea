import { timeTableEs } from "../../../data/timetable";
import Markdown from "../Markdown/Markdown";
import * as S from "./style";

export default function TimetablePage() {
  return (
    <S.TimetablePage>
      <Markdown content={timeTableEs} />
    </S.TimetablePage>
  );
}
