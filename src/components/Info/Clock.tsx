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

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const days = Math.floor(gap / _day);
  const hours = Math.floor((gap % _day) / _hour);
  const minutes = Math.floor((gap % _hour) / _minute);
  const seconds = Math.floor((gap % _minute) / _second);
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
