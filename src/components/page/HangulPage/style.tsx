import styled from "styled-components";
import { DefaultPage } from "../style";

export const hangulPage = styled(DefaultPage)`
  position: relative;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 5rem;
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
    padding: 0 5rem 5rem 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: flex-start;

    del {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
