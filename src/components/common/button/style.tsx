import styled from "styled-components";
import { IColorButton, IPulseButton } from "./type";

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

export const PayPalButtons = styled.div`
  .paypal-button-disploay-none {
  }

  .paypal-button-label-container {
    background-color: red !important;
  }
`;

export const PulseButton = styled.button<IPulseButton>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  border-radius: 0.4rem;
  background: ${(props) => (props.color ? props.color : "#1d1d1d")};
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  transition: all 0.3s ease-in;
  color: white;

  .border-div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .box {
    font-size: 0.8rem;
  }

  .blob {
    background: black;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "100%")};
    border-radius: 0.4rem;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse-black 2s infinite;
    cursor: pointer;
  }
  .blob.white {
    width: ${(props) => (props.width ? props.width : "100%")};
    background: var(--text-black-dark);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    animation: pulse-white 2s infinite;
  }
  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;
