import styled from "styled-components";
import { Center } from "../../style";
import { IModalStyle } from "./type";

export const Modal = styled(Center)<IModalStyle>`
  ${(props) => (props.modal ? "" : "display: none;")}
  position: fixed;
  padding: 5rem;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 2000;
  overflow-x: hidden;

  flex-direction: column;

  // 필터
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  .cancel {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10000;
  }
`;
