import styled from "styled-components";
import { IColorButton } from "./type";

export const GradientButton = styled.button`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;

  width: 100%;
  height: 50px;
  margin: 1.5rem;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: linear-gradient(
    45deg,
    #b294ff,
    #57e6e6,
    #feffb8,
    #57e6e6,
    #b294ff,
    #57e6e6
  );
  background-size: 500% auto;
  animation: gradient 3s linear infinite;
  cursor: pointer;

  p {
    color: #1d1d1d;
    font-size: 1.2rem;
    font-weight: 800;
    background: transparent;
  }
`;

export const BlackButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: 6rem;
  height: 4rem;
  border-radius: 2px;
  background: #1d1d1d;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  transition: all 0.3s ease-in;

  p {
    color: white;
    font-size: 1rem;
    font-weight: 800;
    background: transparent;
  }

  &:hover {
    box-shadow: 0 0 20px #1d1d1d;
  }
`;

export const ColorButton = styled.button<IColorButton>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 5rem;
  border-radius: 2px;
  background: ${(props) => (props.color ? props.color : "#1d1d1d")};
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  transition: all 0.3s ease-in;

  p {
    color: ${(props) => (props.fontColor ? props.fontColor : "white")};
    font-size: 1rem;
    font-weight: 800;
    background: transparent;
  }

  &:hover {
    box-shadow: 0 0 20px #1d1d1d;
  }
`;
