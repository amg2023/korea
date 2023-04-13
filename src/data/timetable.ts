export type ITrack = {
  title?: string;
  row?: number;
  column?: number;
  price?: number;
  link?: {
    name: string;
    url: string;
  }[];
  color?: boolean;
  openId?: number;
};

export type ITimeTable = {
  title: string;
  timeTable: {
    time: string;
    value: ITrack[];
  }[];
};

export type ITimeTableEs = ITimeTable[];
export const timeTableEs: ITimeTableEs = [
  {
    title: "DAY 00 WedApr26",
    timeTable: [
      {
        time: "14:00 - 16:00",
        value: [
          {
            title: "Registration & Chairperson Meeting",
            row: 1,
            column: 2,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
      {
        time: "18:00 - 21:00",
        value: [
          {
            title: "Icebreaking Party ($Dutch Treat)",
            row: 1,
            column: 2,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
    ],
  },
  {
    title: "DAY 01 ThuApr27",
    timeTable: [
      {
        time: "08:00",
        value: [
          {
            title: "Registration & Chairperson Meeting",
            row: 1,
            column: 2,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
      {
        time: "09:00",
        value: [
          {
            title: "Opening Ceremony",
            row: 1,
            column: 2,
            price: -1,
            link: [],
            color: true,
          },
          {},
        ],
      },
      {
        time: "13:00",
        value: [
          {
            title: "Seminar 1",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: false,
          },
          {
            title: "Day Tour(Theme Park): Lotte World",
            row: 3,
            column: 1,
            price: 70,
            link: [
              {
                name: "Lotte World",
                url: "https://adventure.lotteworld.com/kor/main/index.do",
              },
            ],
            color: false,
            openId: 1,
          },
        ],
      },
      {
        time: "14:30",
        value: [
          {
            title: "Seminar 2",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
      {
        time: "17:30",
        value: [
          {
            title: "Food exploring",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
    ],
  },
  {
    title: "DAY 02 FriApr28",
    timeTable: [
      {
        time: "10:30",
        value: [
          {
            title: "Seminar 3",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: false,
          },
          {
            title:
              "Korean Folk Village-Hwasung-GyeongBok Palace-National Folk Museum",
            row: 3,
            column: 1,
            price: 150,
            link: [
              {
                name: "Folk Village",
                url: "https://www.koreanfolk.co.kr/multi/english/",
              },
              // {
              //   name: "Blue House",
              //   url: "https://eng.president.go.kr/",
              // },
              {
                name: "Palace",
                url: "http://www.royalpalace.go.kr:8080/html/eng_gbg/main/main.jsp",
              },
            ],
            color: false,
            openId: 2,
          },
        ],
      },
      {
        time: "14:00",
        value: [
          {
            title: "Mensan Showcase Talk 1",
            row: 1,
            column: 1,
            price: -1,
            link: [],

            color: false,
          },
          {},
        ],
      },
      {
        time: "17:30",
        value: [
          {
            title: "Food exploring",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: false,
          },
          {},
        ],
      },
    ],
  },
  {
    title: "DAY 03 SatApr29",
    timeTable: [
      {
        time: "07:30 - 15:00",
        value: [
          {
            title: "Historical Experience: DMZ",
            row: 1,
            column: 1,
            price: 90,
            link: [
              {
                name: "DMZ",
                url: "http://www.dmztourkorea.com",
              },
            ],
            color: true,
            openId: 3,
          },
          {},
        ],
      },
      {
        time: "18:00 - 22:00",
        value: [
          {
            title: "Gala Dinner",
            row: 1,
            column: 1,
            price: 100,
            link: [
              {
                name: "Hyundai Cruise",
                url: "http://www.aracruise.co.kr/eng_01.html",
              },
            ],
            color: true,
            openId: 4,
          },
          {},
        ],
      },
    ],
  },
  {
    title: "DAY 04 SunApr30 (Busan Day1) - 400$",
    timeTable: [
      {
        time: "08:30",
        value: [
          {
            title: "Depart from Seoul station (KTX)",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "11:30",
        value: [
          {
            title: "Arrival at Busan station (KTX)",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "12:00",
        value: [
          {
            title: "Lunch And Tour",
            row: 1,
            column: 1,
            price: -1,
            link: [
              {
                name: "UN Memorial Cemetery in Korea",
                url: "https://www.unmck.or.kr",
              },
              {
                name: "SoMak Village, WooAm-Dong",
                url: "https://www.visitbusan.net/index.do?menuCd=DOM_000000201001001000&uc_seq=838",
              },
              {
                name: "Magnate Cafe",
                url: "https://www.instagram.com/magnate_official_/",
              },
              {
                name: "O-Ryook Island Skywalk",
                url: "https://me2.do/IFFbACWw",
              },
            ],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "18:30",
        value: [
          {
            title: "Dinner",
            row: 1,
            column: 1,
            price: -1,
            link: [
              {
                name: "GwangAnRi Beach",
                url: "https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000&uc_seq=377&lang_cd=ko",
              },
            ],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "21:00",
        value: [
          {
            title: "Grand Moment Youth Hostel",
            row: 1,
            column: 1,
            price: -1,
            link: [
              {
                name: "Grand Moment Youth Hostel",
                url: "https://www.grandmoment.co.kr/kor/index.do",
              },
            ],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
    ],
  },
  {
    title: "Day 05 MonMay1 (Busan Day2)",
    timeTable: [
      {
        time: "10:00",
        value: [
          {
            title: "Depart from the Hotel",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "10:30",
        value: [
          {
            title: "Gamcheon Culture Village",
            row: 1,
            column: 1,
            price: -1,
            link: [
              {
                name: "Gamcheon Culture Village",
                url: "https://www.gamcheon.or.kr/?param=index#",
              },
            ],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "12:30",
        value: [
          {
            title: "Lunch",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "13:00",
        value: [
          {
            title: "Huinnyeoul Culture Town",
            row: 1,
            column: 1,
            price: -1,
            link: [
              {
                name: "Huinnyeoul Culture Town",
                url: "http://www.ydculture.com/huinnyeoulculturetown1/",
              },
            ],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "15:00",
        value: [
          {
            title: "Kukje Market",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "16:30",
        value: [
          {
            title: "Depart from Busan station (KTX)",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
      {
        time: "19:00",
        value: [
          {
            title: "Arrival at Seoul station (KTX)",
            row: 1,
            column: 1,
            price: -1,
            link: [],
            color: true,
            openId: 5,
          },
          {},
        ],
      },
    ],
  },
];
