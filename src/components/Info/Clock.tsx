import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { START_DAY } from "../../data/constant";
import * as S from "./style";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const { t } = useTranslation();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(START_DAY);
  const gap = target.getTime() - time.getTime();

  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;

  let days = Math.floor(gap / _day);
  let hours = Math.floor((gap % _day) / _hour);
  let minutes = Math.floor((gap % _hour) / _minute);
  let seconds = Math.floor((gap % _minute) / _second);
  return (
    <S.Clock>
      <div className="title">D-DAY</div>
      <div className="time">
        <div>
          <span>{days}</span>
          {t("DAY")}
        </div>
        <div>
          <span>{hours}</span>
          {t("HOUR")}
        </div>
        <div>
          <span>{minutes}</span>
          {t("MIN")}
        </div>
        <div>
          <span>{seconds}</span>
          {t("SECOND")}
        </div>
      </div>
    </S.Clock>
  );
}
