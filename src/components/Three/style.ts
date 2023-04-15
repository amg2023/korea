import styled from "styled-components";
import { ISmallTag } from "./types";

export const SmallTag = styled.div<ISmallTag>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 50px;
  position: relative;
  height: ${(props) => (props.height ? props.height : "1.8rem")};
  width: ${(props) => (props.width ? props.width : "8rem")};
  right: 50%;
  top: ${(props) => (props.top ? props.top : "5rem")};

  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.7rem;
  padding: 10px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 0 30px rgb(30, 30, 30);

  .categoryset-text {
    font-size: 0.8rem;
    transition: all 0.3s ease-in;
  }
`;

export const Hint = styled.div<ISmallTag>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-width: 50px;
  position: absolute;
  height: ${(props) => (props.height ? props.height : "8rem")};
  width: ${(props) => (props.width ? props.width : "12rem")};
  left: 50%;
  transform: translate(-50%, -50%);
  top: -15rem;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.7rem;
  padding: 10px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 0 30px rgb(30, 30, 30);

  hr {
    width: 100%;
  }

  h1 {
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
  }

  .categoryset-text {
    background: var(--red-gradient);
    box-shadow: 0 0 10px #ee0979;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    transition: all 0.3s ease-in;
  }
`;

export const InnerText = styled.p`
  color: white;
  font-size: 500px;
  margin-bottom: 40px;
`;
