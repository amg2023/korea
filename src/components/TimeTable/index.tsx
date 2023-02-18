import { GradientText } from "components/common/text/Text";
import { timeTableEs } from "data/timetable";
import * as S from "./style";

export default function TimeTable() {
  return (
    <S.STimeTable>
      <div className="wrapper-inner">
        <h1>TIMETABLE</h1>
        {timeTableEs.map((day, i) => {
          return (
            <div className="table" key={i}>
              <div className={`table-row`}>
                <p className="content">{day.title}</p>
              </div>
              <div className={`table-row admin`}>
                <div>
                  <p>time</p>
                </div>
                <div>
                  <p>content</p>
                </div>
              </div>
              {day.timeTable.map((time, i) => {
                return (
                  <div className="table-column" key={i}>
                    <div className="table-item title">
                      <p>{time.time}</p>
                    </div>
                    <div className="table-item content">
                      {time.color ? (
                        <GradientText
                          className="gradient-content"
                          background="linear-gradient(45deg,#ee0979,#ff6a00,#ffdc5c,#ee0979,#ff6a00)"
                        >
                          {time.info}
                        </GradientText>
                      ) : (
                        <p>{time.info}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </S.STimeTable>
  );
}
