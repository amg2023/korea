import styled from "styled-components";

export const Progress = styled.div`
  .loader {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 500;
    font-size: 1.4rem;
    width: 100vw;
    height: 100vh;
    color: white;
  }

  .progress-bar {
    overflow: hidden;
    position: relative;
    padding: 5px 0;
    width: 200px;
    height: 35px;
    transition: all 0.3s ease-in;
  }

  .progress-gray {
    position: absolute;
    transform: translate(-200px, -100%);
    top: 50%;
    width: 200px;
    height: 15px;
    background: linear-gradient(45deg, white, white);
    box-shadow: 0 0 0.2rem white;
  }

  @media (max-width: 800px) {
    .loader {
      top: 4rem;
    }
  }
`;
