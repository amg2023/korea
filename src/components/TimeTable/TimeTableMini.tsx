import { timeTableEs } from "data/timetable";
import { useState } from "react";
import * as S from "./style";
import Table from "./Table";

export default function TimeTableMini() {
  const [index, setIndex] = useState(0);

  const timeTableTitle = timeTableEs.reduce((acc, cur) => {
    acc.push(cur.title);
    return acc;
  }, [] as string[]);
  const onSetDay = (i: number) => {
    setIndex(i);
  };

  return (
    <S.STimeTableMini className="timetable">
      <div className="days">
        {timeTableTitle.map((t: string, key: number) => {
          return (
            <div
              key={key}
              className={"day" + (key === index ? " select" : "")}
              onClick={() => onSetDay(key)}
            >
              <p>{t}</p>
            </div>
          );
        })}
      </div>
      <div className="wrapper-inner">
        <Table day={timeTableEs[index]} i={index} />
      </div>
    </S.STimeTableMini>
  );
}
