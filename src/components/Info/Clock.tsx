import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  // const targetDate = new Date("2023-04-26 00:00:00");

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date("4/26/2023");
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
    <div>
      <div>
        D-DAY: {days} day {hours} hour {minutes} min {seconds} sec
      </div>
      {/* <div>{time.toLocaleTimeString()}</div> */}
    </div>
  );
}
