import styled, { keyframes } from "styled-components";

export const InnerText = styled.p`
  color: white;
  font-size: 500px;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-family: "Antonio", sans-serif;
  font-weight: 800;
  width: 100%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const TitleLeft = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;

  margin: 0;
  font-family: "BMDOHYEON_ttf";
  z-index: 800;

  font-size: 2rem;

  p {
    margin: 0;
    padding: 0;
  }
  span {
    display: flex;
  }
`;

export const TitleRight = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;

  font-size: 9rem;
  line-height: 100%;
  text-align: right;
  color: white;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 5px white;
  z-index: 300;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const Footer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;

  color: black;
  letter-spacing: -2;

  .title {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;

    h5 {
      margin: 0;
      padding: 0.2rem;
      font-weight: 300;
    }
  }

  .contribute {
    display: flex;
    p {
      font-size: 0.8rem;
      text-shadow: 0 0 0;
    }
  }

  .button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      all: unset;
      width: 5rem;
      border-radius: 10px;
      background: #1d1d1d;
      box-shadow: 0 0 10px #1d1d1d;
      cursor: pointer;
      transition: all 0.3s ease-in;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin: 0;
        padding: 0;
        color: white;
        font-size: 0.8rem;
      }

      &:hover {
        box-shadow: 0 0 20px #1d1d1d;
      }
    }
  }
  color: #f9f9f9;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem black;
`;

export const JoyStick = styled.div`
  z-index: 30;
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

export const keyFramesClickHello = keyframes`
  0% {
    box-shadow: 0 0 10px #ee0979;
  }
  50% {
    box-shadow: 0 0 30px #ee0979;
  }
  100% {
    box-shadow: 0 0 10px #ee0979;
  }
`;

export const keyFramesClick = keyframes`
  0% {
    box-shadow: 0 0 10px #8e2de2;
  }
  50% {
    box-shadow: 0 0 30px #8e2de2;
  }
  100% {
    box-shadow: 0 0 10px #8e2de2;
  }
`;

export const JoyStickInner = styled.div`
  display: none;
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
      background: linear-gradient(45deg, #8e2de2, #4a00e0);
      box-shadow: 0 0 10px #8e2de2;
      font-size: 0.8rem;
      font-weight: 800;
    }
    .click {
      animation: 0.3s ${keyFramesClick} infinite;
    }
    &.hover {
      box-shadow: 0 0 20px #8e2de2;
    }
  }

  @media (max-width: 1024px) {
    display: grid;
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
    width: 3.2rem;
    height: 3.2rem;
    margin: 0.3rem;
    border-radius: 50%;

    background: linear-gradient(45deg, #ee0979, #ff6a00);
    box-shadow: 0 0 10px #ee0979;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;

    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .click {
    animation: 0.3s ${keyFramesClickHello} infinite;
  }
`;
