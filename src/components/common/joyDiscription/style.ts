import styled, { keyframes } from "styled-components";

export const JoyStick = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100vw;
  height: 40vh;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const JoyStickInner = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 30rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px black;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 100;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .cancel {
    position: absolute;
    font-size: 1.4rem;
    left: 0.2rem;
    top: 0.2rem;
    z-index: 10;
  }
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
  }
  @media (max-width: 800px) {
    width: 20rem;
    padding: 1rem;
    position: fixed;
    top: 8rem;
  }
`;

export const JoyDiscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  div {
    all: unset;
    position: relative;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 10%;

    background: #1d1d1d;
    box-shadow: 0 0 10px #1d1d1d;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: white;
    text-shadow: 0 0 10px white;

    cursor: pointer;
    transition: all 0.3s ease-in;
  }
  p {
    font-size: 0.76rem;
  }
`;

export const Discription = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
  font-weight: 200;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
