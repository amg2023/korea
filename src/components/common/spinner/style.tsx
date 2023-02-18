import styled from "styled-components";

// spinner
export const Spinner = styled.div`
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .text {
    color: white;
  }

  .title-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scale: calc(2);
  }

  svg {
    width: 50%;
    max-width: 10rem;
    animation: rotate 3.6s linear infinite;
  }

  circle {
    fill: none;
    stroke: white;
    stroke-width: 8px;
    stroke-dasharray: 300;
    animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
  }

  @keyframes outline {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 300;
    }
    100% {
      stroke-dashoffset: 600;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(-1turn);
    }
  }
`;
