import styled from "styled-components";

export type IInput = {
  fontSize?: string;
  background?: string;
  label?: string;
};

export const LineInput = styled.div`
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
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 2px;
  background: transparent;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
  input:focus {
    outline: none;
    padding: 1.5rem;
  }
  input {
    border: none;
    width: 100%;
    flex-grow: 1;
    background: transparent;
    color: white;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    vertical-align: middle;
    transition: all 0.3s ease-in;
  }

  input[type="password"]::placeholder {
    color: #e5e5e5;
    font-weight: 300;
  }

  input::placeholder {
    color: #e5e5e5;
    font-weight: 300;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px transparent !important;
    -webkit-text-fill-color: #fff !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;

export const GradientInput = styled.div<IInput>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: transparent;
  margin: 1rem;

  span {
    display: none;
  }

  input {
    position: relative;
    width: 100%;
    border: none;
    transition: all 0.3s ease-in;
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
    margin: 0.5rem;
  }

  h4 {
    position: absolute;
    margin-top: -1rem;
    font-size: 1rem;
    font-weight: 300;
  }

  .error {
    h5 {
      font-weight: 300;
    }
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

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;
