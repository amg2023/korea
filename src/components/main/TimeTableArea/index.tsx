import { Ref, useRef } from "react";
import useObserverEffect from "utils/useObserverEffect";
import { titleCB } from "..";
import * as S from "./style";
import TimeTable from "../../TimeTable";

export default function TimeTableArea() {
  const titleBRef = useRef<Element>();
  useObserverEffect(titleBRef, titleCB);

  return (
    <S.STimeTableArea className="page B" id="B">
      <div className="page-title" ref={titleBRef as Ref<HTMLDivElement>}>
        <h1>TIMETABLE</h1>
      </div>
      <TimeTable />
    </S.STimeTableArea>
  );
}
