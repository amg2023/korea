import styled from "styled-components";
import { Center } from "../../../style";

export const Page = styled(Center)`
  position: relative;
  width: 90vw;
  padding: 2rem;
  border-radius: 1rem;

  .close {
    position: relative;
    color: white;
    background-color: transparent;
    font-size: 1.2rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 20;
  }
`;
