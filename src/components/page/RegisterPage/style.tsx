import styled from "styled-components";
import { DefaultPage } from "../style";

export const RegisterPage = styled(DefaultPage)`
  position: relative;
  width: 100%;
  height: 90vh;

  /* 디스플레이 */
  display: grid;
  grid-template-columns: 100px 1fr;

  .markdown {
    grid-column: 2/3;
  }
`;
