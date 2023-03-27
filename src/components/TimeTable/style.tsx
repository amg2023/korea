import styled from "styled-components";

export const STimeTable = styled.div`
  .wrapper-inner {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 10;
    padding-top: 5rem;
    ::-webkit-scrollbar {
      width: 1rem;
      background: linear-gradient(45deg, #ee0979, #ff6a00);
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #ee0979, #ff6a00);
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    .timetable-note {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .timetable-title {
      font-family: "BMDOHYEON_ttf";
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: 800;
    }
    table {
      position: relative;
      width: 80%;
      border-left: 2px solid #2a2a2a;
      tr {
        position: relative;
        width: 100%;
        td:nth-child(1) {
          position: relative;
          width: 30%;
        }
        td:nth-child(3) {
          position: relative;
          width: 30%;
        }
      }
      td {
        border-bottom: 2px solid #2a2a2a;
        border-right: 2px solid #2a2a2a;
        &.open {
          background: var(--red-gradient);
        }
      }
    }
    .table {
      position: relative;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: 5rem;

      .tag {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        a {
          border-radius: 0.2rem;
          margin: 0.2rem;
          padding: 0.3rem;
          background-color: #1d1d1d;
          box-shadow: 0 0 4px #1d1d1d;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: #2a2a2a;
            box-shadow: 0 0 10px #2a2a2a;
          }
        }
      }

      .table-row {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        .content {
          font-size: 1.6rem;
        }
        color: white;
        &.admin {
          background: var(--red-gradient);
          box-shadow: 0 0 10px var(--red);
        }
        &.manager {
          background: var(--green-gradient);
          box-shadow: 0 0 10px var(--green);
        }
        &.participant {
          background: var(--pupple-gradient);
          box-shadow: 0 0 10px var(--pupple);
        }
        &.guest {
          background: var(--red-gradient);
          box-shadow: 0 0 10px var(--red);
        }
        margin: 1rem 5rem;
        p {
          position: relative;
          width: 100%;
          font-weight: 300;
        }
      }
      .table-column {
        position: relative;
        width: 80%;
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        font-weight: 200;
        border-right: 2px solid #2a2a2a;
        border-left: 2px solid #2a2a2a;
        border-bottom: 2px solid #2a2a2a;
        .table-item {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          .gradient-content {
            text-shadow: 0 0 10px #ee0979;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .wrapper-inner {
      .top {
        flex-direction: column;
        align-items: center;
        .right-top {
          align-items: center;
        }
        .left {
          h1 {
            font-size: 2rem;
          }
        }
        .right {
          justify-content: center;
          h1 {
            font-size: 1.6rem;
          }
          .day {
            font-size: 1.2rem;
          }
        }
      }
    }
    .table {
      margin-top: 2rem;
      width: 90%;
    }
  }
  @media (max-width: 600px) {
    .wrapper-inner {
      .top {
        .left {
          h1 {
            font-size: 2rem;
          }
        }
        .right {
          h1 {
            font-size: 1.6rem;
          }
          .day {
            font-size: 1.2rem;
          }
        }
      }
    }
    .table {
      margin-top: 2rem;
      width: 80%;
    }
  }
`;

export const STimeTableMini = styled(STimeTable)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper-inner {
    position: relative;
    width: 100%;
    overflow-y: auto;
    padding: 0;
  }

  .days {
    border-top: 0 2px #272727;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    .day {
      grid-column: auto;

      p {
        font-size: 0.8rem;
        font-weight: 300;
        margin: 0.2rem;
        background-color: #272727;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 7rem;
        height: 4rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 2px black;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      span {
        display: none;
      }
      cursor: pointer;
    }
    .select {
      transition: all 0.3s ease-in-out;

      p {
        background: var(--red-gradient);
        transition: all 0.3s ease-in-out;
      }
      span {
        display: flex;
      }
    }
  }
  @media (max-width: 800px) {
    .days {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
