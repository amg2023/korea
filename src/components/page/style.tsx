import styled from "styled-components";

export const Page = styled.div`
  position: relative;
  border-radius: 1rem;
  padding-top: 3rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;

  h1 {
    font-size: 4rem;
  }

  .close {
    position: absolute;
    color: white;
    background-color: transparent;
    font-size: 1.6rem;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 20;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const DefaultPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  color: #f9f9f9;
  border-radius: 1rem;
`;
