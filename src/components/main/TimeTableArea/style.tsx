import styled from "styled-components";

export const STimeTableArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  padding-top: 10rem;
  width: 100vw;
  height: 200vh;

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 300;
    }
  }

  .titles {
    border-top: 0 2px #ff6b6b;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2 {
      font-weight: 300;
      margin: 1rem;
      &.select {
        color: #ff6b6b;
        text-shadow: 0 0 10px #ff6b6b;
      }
      cursor: pointer;
    }
  }

  .body {
    width: 100%;
    height: 150vh;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
