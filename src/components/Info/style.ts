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
    height: 2rem;
  }

  .contribute {
    height: 1.4rem;
    display: flex;
    p {
      font-size: 0.8rem;
      text-shadow: 0 0 0;
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
  font-size: 12rem;
  line-height: 1em;
  color: black;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 10px black;
`;

export const TitleRight = styled.p`
  flex: 1 1 0%;
  font-size: 12rem;
  line-height: 100%;
  text-align: right;
  color: black;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 10px black;
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
