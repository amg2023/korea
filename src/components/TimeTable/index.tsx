import Markdown from "components/page/Markdown/Markdown";
import { timeTableSmallEs } from "data/timetableSmall";
import { useState } from "react";
import * as S from "./style";

export default function TimeTable() {
  const [index, setIndex] = useState(0);
  const timeTable = timeTableSmallEs.split("$");
  const title = [];
  const time = [];
  for (let i = 0; i < timeTable.length; i += 2) {
    title.push(timeTable[i]);
    time.push(timeTable[i + 1]);
  }
  const onSetDay = (i: number) => {
    setIndex(i);
  };

  return (
    <S.STimeTable>
      <div className="days">
        {title.map((t: string, key: number) => {
          return (
            <div
              key={key}
              className={"day" + (key === index ? " select" : "")}
              onClick={() => onSetDay(key)}
            >
              <p>
                <span>DAY {key}</span>
                {t}
              </p>
            </div>
          );
        })}
      </div>
      <div className="body">
        {time.map((t: string, key: number) => {
          return (
            <S.Time key={key}>
              {key === index && (
                <div className="markdown">
                  <Markdown content={t} />
                </div>
              )}
            </S.Time>
          );
        })}
      </div>
    </S.STimeTable>
  );
}
