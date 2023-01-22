import styled from "styled-components";

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const InfoInner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Location = styled.div`
  font-family: "Antonio", sans-serif;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;

  height: 6rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: black;
  letter-spacing: -2;
  text-shadow: 0 0 2px black;

  .title {
    display: flex;
    align-items: center;
    height: 2.2rem;
  }

  .contribute {
    height: 1.4rem;
    display: flex;
    p {
      font-size: 0.8rem;
      text-shadow: 0 0 0;
    }
  }

  @media (max-width: 900px) {
    .title {
      font-size: 1.2rem;
      height: 2rem;
    }
  }

  @media (max-width: 600px) {
    .title {
      font-size: 1rem;
      height: 1.8rem;
    }
  }
`;

export const InnerText = styled.p`
  color: white;
  font-size: 500px;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-family: "Antonio", sans-serif;
  font-weight: 800;
  width: 100%;
  flex: 1 1 0%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const TitleLeft = styled.p`
  flex: 1 1 0%;
  font-size: 9rem;
  line-height: 1em;
  color: white;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 5px white;

  span {
    display: none;
  }

  @media (max-width: 900px) {
    font-size: 7rem;
  }

  @media (max-width: 700px) {
    font-size: 5rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    span {
      display: flex;
    }
  }
`;

export const TitleRight = styled.p`
  flex: 1 1 0%;
  font-size: 9rem;
  line-height: 100%;
  text-align: right;
  color: white;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 5px white;

  @media (max-width: 900px) {
    font-size: 7rem;
  }
  @media (max-width: 700px) {
    font-size: 5rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Control = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;

  height: 6rem;
  font-size: 1rem;
  line-height: 3rem;
  color: black;
  letter-spacing: -2;

  .title {
    height: 2.4rem;
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
        font-weight: 800;
      }

      &:hover {
        box-shadow: 0 0 20px #1d1d1d;
      }
    }
  }
`;

export const JoyStick = styled.div`
  display: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  -webkit-touch-callout: none;

  .up {
    -webkit-touch-callout: none;

    grid-row: 1/2;
    grid-column: 2/3;
  }
  .left {
    -webkit-touch-callout: none;

    grid-row: 2/3;
    grid-column: 1/2;
  }
  .down {
    -webkit-touch-callout: none;

    grid-row: 2/3;
    grid-column: 2/3;
  }
  .right {
    -webkit-touch-callout: none;

    grid-row: 2/3;
    grid-column: 3/4;
  }

  button {
    -webkit-touch-callout: none;

    all: unset;
    z-index: 10;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    box-shadow: 0 0 10px black;
    cursor: pointer;
    transition: all 0.3s ease-in;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0 0 20px #1d1d1d;
    }
  }

  @media (max-width: 500px) {
    display: grid;
  }
`;
