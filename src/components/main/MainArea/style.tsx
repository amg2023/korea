import styled from "styled-components";

export const SMainArea = styled.div`
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

  &.A {
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 200vh;

    h1 {
      opacity: 0;
      transition: all 0.5s ease-in;
      transform: translateY(-50px);
    }

    &.start {
      h1 {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .wrapper-inner {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      padding-top: 5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .left {
        h1 {
          font-size: 4rem;
          margin: 0.2rem;
          padding: 0;
          font-weight: 300;
        }
      }
      .right {
        h1 {
          margin: 0.2rem;
          font-weight: 300;
        }
        .day {
          color: black;
          font-size: 1.2rem;
          margin: 0.4rem;
          font-weight: 300;
        }
      }

      .underButton {
        transition: all 0.5s ease-in;

        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        opacity: 0;

        a {
          padding: 0.2rem !important;
        }

        &.start {
          opacity: 1;
        }
      }
    }

    .wrapper {
      width: 100vw;
      height: 100vh;
      background: #ff5340;
      position: relative;
      overflow: hidden;
    }

    .base {
      position: absolute;
      filter: blur(100px);
      opacity: 0.8;
    }

    .one {
      border-radius: 100%;
      width: 60vw;
      height: 60vh;
      background-color: #ff6b6b;
      left: -50px;
      top: -100px;
      z-index: 3;
      animation: fly 12s linear infinite;
      transform: rotate(0) translate(80px) rotate(0);
    }

    .two {
      width: 70vw;
      height: 70vh;
      background-color: #ff2d2d;
      bottom: 130px;
      left: -80px;
    }

    .three {
      border-radius: 100%;
      width: 70vw;
      height: 70vh;
      bottom: -180px;
      right: -100px;
      background-color: #ff4d91;
      animation: flyPlus 8s linear infinite;
      transform: rotate(0) translate(100px) rotate(0);
    }
  }
`;
