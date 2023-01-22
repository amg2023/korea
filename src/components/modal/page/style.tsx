import styled from "styled-components";
import { Center } from "../../../style";

export const Page = styled(Center)`
  position: relative;
  width: 450px;
  height: 500px;
  /* background-color: #fafafacc; */
  border-radius: 1rem;
  /* box-shadow: 0 0 10px #fafafacc; */

  .close {
    position: relative;
    color: black;
    background-color: transparent;
    font-size: 1.5rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
