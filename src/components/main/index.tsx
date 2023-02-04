import HangulArea from "./HangulArea";
import MainArea from "./MainArea";
import RegisterArea from "./RegisterArea";
import SeoulArea from "./SeoulArea";
import * as S from "./style";
import TimeTablePage from "./TimeTableArea";

export const titleCB = (
  entries: IntersectionObserverEntry[],
  _observer: IntersectionObserver
) => {
  const [_el] = entries;
  if (_el && _el.isIntersecting) {
    _el.target.classList.add("start");
  } else {
    _el.target.classList.remove("start");
  }
};

export default function Main() {
  return (
    <S.Main>
      <MainArea />
      <TimeTablePage />
      <HangulArea />
      <SeoulArea />
      <RegisterArea />
    </S.Main>
  );
}
