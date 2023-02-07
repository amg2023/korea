import styled from "styled-components";

export const SSeoulArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 10rem;
  width: 100vw;
  height: 200vh;

  .seoul-page {
    overflow: auto;
    width: 80%;
  }

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 200;
    }
  }
`;
