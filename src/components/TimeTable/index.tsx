import { GradientText } from "components/common/text/Text";
import { timeTableEs } from "data/timetable";
import * as S from "./style";
import Table from "./Table";

export default function TimeTable() {
  return (
    <S.STimeTable>
      <div className="wrapper-inner">
        <div className="timetable-title">
          <GradientText
            className="timetable-title"
            background="linear-gradient(45deg,#ee0979,#ff6a00,#ffdc5c,#ee0979,#ff6a00)"
          >
            TIMETABLE
          </GradientText>
        </div>
        <div className="timetable-note">
          <p>
            *Please be advised that this can be changed upon the condition of
            sites
          </p>
        </div>

        {timeTableEs.map((day, i) => {
          return <Table day={day} i={i} key={i} />;
        })}
      </div>
    </S.STimeTable>
  );
}
