import styled, { keyframes } from "styled-components";

export const JoyStick = styled.div`
  z-index: 30;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;

  display: none;
  align-items: flex-end;
  justify-content: center;

  width: 100vw;
  height: 40vh;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const keyFramesClick = keyframes`
  0% {
    box-shadow: 0 0 10px #78ffd6;
  }
  50% {
    box-shadow: 0 0 30px #78ffd6;
  }
  100% {
    box-shadow: 0 0 10px #78ffd6;
  }
`;

export const JoyStickInner = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  width: 10rem;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .up {
    grid-row: 1/2;
    grid-column: 2/3;
  }
  .left {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  .down {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  .right {
    grid-row: 2/3;
    grid-column: 3/4;
  }

  .z {
    grid-row: 1/2;
    grid-column: 3/4;
    button {
      background: linear-gradient(45deg, #a8ff78, #78ffd6);
      box-shadow: 0 0 10px #78ffd6;
      font-size: 0.8rem;
    }
    .click {
      animation: 0.3s ${keyFramesClick} infinite;
    }
    &.hover {
      box-shadow: 0 0 20px #78ffd6;
    }
  }
`;

export const keyFramesClickHello = keyframes`
  0% {
    box-shadow: 0 0 10px #ffe259;
  }
  50% {
    box-shadow: 0 0 30px #ffe259;
  }
  100% {
    box-shadow: 0 0 10px #ffe259;
  }
`;

export const JoyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  button {
    all: unset;
    position: relative;
    width: 2.8rem;
    height: 2.8rem;
    margin: 0.3rem;
    border-radius: 50%;

    background: linear-gradient(45deg, #ffe259, #ffa751);
    box-shadow: 0 0 10px #ffa751;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: black;
    text-shadow: 0 0 10px black;

    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .click {
    animation: 0.3s ${keyFramesClickHello} infinite;
  }
`;
