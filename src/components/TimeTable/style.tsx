import styled from "styled-components";

export const STimeTable = styled.div`
  position: relative;
  overflow: hidden;

  .wrapper-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
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

    .timetable-title {
      font-family: "BMDOHYEON_ttf";
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: 700;
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
