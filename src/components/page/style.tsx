import styled from "styled-components";
import { Center } from "../../style";

export const Page = styled(Center)`
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  width: 90vw;

  .close {
    position: relative;
    color: white;
    background-color: transparent;
    font-size: 1.6rem;
    position: absolute;
    top: 2rem;
    left: 2.2rem;
    z-index: 20;
  }

  @media (max-width: 600px) {
    width: 99vw;
  }
`;

export const DefaultPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 90vh;
  color: #f9f9f9;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem black;
`;
