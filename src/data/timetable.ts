export type ITimeTable = {
  title: string;
  timeTable: {
    time: string;
    info: string;
    color: boolean;
  }[];
};

export type ITimeTableEs = ITimeTable[];
export const timeTableEs: ITimeTableEs = [
  {
    title: "DAY 00 WedApr26",
    timeTable: [
      {
        time: "14:00~16:00",
        info: "Registration & Chairman’s Meeting",
        color: false,
      },
      { time: "18:00~21:00", info: "Icebreaking", color: true },
    ],
  },
  {
    title: "DAY 01 ThuApr27",
    timeTable: [
      {
        time: "08:00-09:00",
        info: "Registration & Chairman’s Meeting",
        color: false,
      },
      { time: "09:00-10:00", info: "Opening Ceremony", color: true },
      { time: "10:00-13:00", info: "Talks:", color: false },
      { time: "13:00-14:00", info: "Workshop a:", color: false },
      { time: "14:00-17:30", info: "Game or Free time", color: false },
      { time: "17:30~", info: "Food exploring", color: false },
    ],
  },
  {
    title: "DAY 02 FriApr28",
    timeTable: [
      { time: "06:00-12:00", info: "Trip 1", color: false },
      { time: "10:00-12:00", info: "Mensan Showcase Talks 1", color: false },
      { time: "14:00-15:30", info: "Mensan Showcase Talks 2", color: false },
      { time: "14:00-18:00", info: "Workshop b:", color: false },
    ],
  },
  {
    title: "DAY 03 SatApr29",
    timeTable: [
      { time: "13:00-19:00", info: "City tour or Free time", color: false },
      { time: "18:00 -", info: "Gala", color: true },
    ],
  },
  {
    title: "DAY 04 SunApr30",
    timeTable: [
      { time: "07:00 -", info: "Travel : Busan, etc.", color: false },
    ],
  },
  {
    title: "Day 05 MonMay1",
    timeTable: [
      { time: "- 18:00", info: "Travel Back to Seoul/Incheon", color: false },
    ],
  },
];
