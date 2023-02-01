import styled from "styled-components";
import { DefaultPage } from "../style";

export const TimetablePage = styled(DefaultPage)`
  position: relative;
  width: 100%;
  height: 100%;

  .markdown {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 5rem 0;

    table {
      padding: 0 20rem;
      margin: 2rem;
    }
  }

  @media (max-width: 1000px) {
    .markdown {
      table {
        padding: 0 10rem;
      }
    }
  }

  @media (max-width: 800px) {
    .markdown {
      table {
        padding: 0 5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .markdown {
      table {
        padding: 0 1rem;
      }
    }
  }
`;
