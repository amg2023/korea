import styled from "styled-components";
import { Center } from "../../style";

export const InnerPage = styled(Center)`
  overflow-y: scroll;

  .markdown {
    overflow-y: scroll;
  }
`;

export const Page = styled(Center)`
  position: relative;
  border-radius: 1rem;
  padding-top: 5rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;

  h1 {
    font-size: 5rem;
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

  @media (max-width: 600px) {
    width: 100vw;
    padding: 0;
  }
`;

export const DefaultPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 90vh;
  color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem black;
`;
