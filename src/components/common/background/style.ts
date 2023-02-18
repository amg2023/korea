import styled from "styled-components";

// interface for background
interface IBackground {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
  F?: string;
}
// make style for background
export const Background = styled.div<IBackground>`
  @keyframes fly {
    100% {
      transform: rotate(1turn) translate(100px) rotate(-1turn);
    }
  }

  @keyframes flyPlus {
    100% {
      transform: rotate(-1turn) translate(100px) rotate(1turn);
    }
  }
  .wrapper {
    width: 100vw;
    height: 450vh;
    background: ${(props) =>
      props.A || "linear-gradient(to bottom, #c6ffdd, #fbd786, #f7797d);"};
    position: relative;
    overflow: hidden;
    .base {
      position: absolute;
      filter: blur(100px);
      opacity: 0.8;
    }

    .one {
      border-radius: 100%;
      width: 60vw;
      height: 60vh;
      background-color: ${(props) => props.B || "#1effcb"};

      left: -50px;
      top: -100px;
      z-index: 3;
      animation: fly 12s linear infinite;
      transform: rotate(0) translate(80px) rotate(0);
    }

    .two {
      width: 70vw;
      height: 70vh;
      background-color: ${(props) => props.C || "#ffdde1"};

      bottom: 130px;
      left: -80px;
    }

    .three {
      border-radius: 100%;
      width: 70vw;
      height: 70vh;
      bottom: -180px;
      right: -100px;
      background-color: ${(props) => props.D || "#f05053"};
      animation: flyPlus 8s linear infinite;
      transform: rotate(0) translate(100px) rotate(0);
    }

    .four {
      border-radius: 100%;
      width: 60vw;
      height: 60vh;
      bottom: 30rem;
      left: -10rem;
      background-color: ${(props) => props.D || "#ffdde1"};
      animation: flyPlus 8s linear infinite;
      transform: rotate(0) translate(100px) rotate(0);
    }

    .five {
      border-radius: 100%;
      width: 70vw;
      height: 70vh;
      bottom: 60rem;
      right: -10rem;
      background-color: ${(props) => props.D || "#e1eec3"};
      animation: flyPlus 8s linear infinite;
      transform: rotate(0) translate(100px) rotate(0);
    }
  }
`;
