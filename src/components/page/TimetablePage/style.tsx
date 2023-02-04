import styled from "styled-components";
import { DefaultPage } from "../style";

export const TimetablePage = styled(DefaultPage)`
  position: relative;

  padding-top: 2rem;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  h1 {
    margin-top: 10rem;
    font-weight: 300;
  }
`;
