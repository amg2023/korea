import styled from "styled-components";
import { DefaultPage, InnerPage } from "../style";

export const hangulPage = styled(InnerPage)`
  position: relative;
  width: 100%;
  height: 90vh;

  .markdown {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  }
`;
