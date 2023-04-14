import styled from "styled-components";
import { DefaultPage } from "../style";

export const StepPage = styled(DefaultPage)`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem;

  h4 {
    color: #ff2929;
  }

  .markdown {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    del {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  //
  @media (max-width: 900px) {
    padding: 6rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;
