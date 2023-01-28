import styled from "styled-components";
import { Center } from "../../style";

export const Page = styled(Center)`
  position: relative;
  width: 90vw;
  padding: 2rem;
  border-radius: 1rem;

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
`;

export const DefaultPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 90vh;
  overflow-y: scroll;
  color: #f9f9f9;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem black;
  /* 스크롤 */
  ::-webkit-scrollbar {
    width: 1rem;
    background: linear-gradient(45deg, #ee0979, #ff6a00);
  }
  /* 스크롤 엄지부분 */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #ee0979, #ff6a00);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  /* 스크롤 트랙 */
  ::-webkit-scrollbar-track {
    background-color: black;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
`;
