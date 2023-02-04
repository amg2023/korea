import styled from "styled-components";

export type IInput = {
  fontSize?: string;
  background?: string;
  label?: string;
};

export const GradientInput = styled.div<IInput>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90vw;
  background: transparent;
  margin: 2rem;
  margin-top: 5rem;
  height: ${(props) => (props.label === "country" ? "8.7rem" : "")};

  span {
    display: none;
  }

  input {
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;
    transition: all 0.3s ease-in;
    width: 80vw;
    background: transparent;
    color: white !important;
    font-size: 1rem;
    line-height: 3rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      font-weight: 300;
      color: #5e5e5e;
    }
  }

  input:focus {
    outline: none;
    padding: 1.5rem;
  }

  h4 {
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 2rem;
    z-index: 20;
    height: 2px;

    background: ${(props) =>
      props.background !== ""
        ? props.background
        : "linear-gradient(45deg,#b294ff,#57e6e6,#feffb8,#57e6e6,#b294ff,#57e6e6)"};
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1d1d1d inset !important;
    transition: background-color 10000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;