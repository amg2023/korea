import styled from "styled-components";

export const STimeTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  width: 100vw;
  height: 200vh;

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 300;
    }
  }

  .days {
    border-top: 0 2px #ff6b6b;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    .day {
      grid-column: auto;

      p {
        font-size: 1rem;
        font-weight: 300;
        margin: 1rem;
      }
      span {
        display: none;
      }
      cursor: pointer;
    }
    .select {
      p {
        font-size: 1.4rem;
        color: #ff6b6b;
        text-shadow: 0 0 10px #ff6b6b;
      }
      span {
        display: flex;
      }
    }
  }

  .body {
    width: 100%;
    height: 150vh;
  }

  @media (max-width: 800px) {
    .days {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
