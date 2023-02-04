import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  .page {
    .markdown {
      grid-column: 1/3;
      grid-row: 1/3;
      position: relative;
      width: 100%;
    }
  }

  .page-title {
    opacity: 0;
    transition: all 0.5s ease-in;
    transform: translateY(-50px);

    h1 {
      font-size: 4rem;
      font-weight: 300;
    }

    &.start {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
