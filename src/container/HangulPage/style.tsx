import styled from "styled-components";
import { DefaultPage } from "../style";

export const hangulPage = styled(DefaultPage)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    font-size: 3rem;
    font-weight: 300;
    color: #ff6b6b;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 300;
    color: #ff6b6b;
  }

  .markdown {
    position: relative;
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    del {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    .markdown {
      width: 80%;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
    .markdown {
      width: 90%;
    }
  }

  @media (max-width: 300px) {
    .markdown {
      width: 98%;
    }
  }
`;
