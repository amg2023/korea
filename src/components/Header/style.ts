import styled, { keyframes } from "styled-components";
import { Center } from "../../style";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 1rem black;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  @media (max-width: 800px) {
    height: 70px;
  }
  @media (max-width: 600px) {
    height: 100px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: white;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid white;
    border-radius: 5px;
    margin: 0.3rem;
    padding: 0.2rem;
    box-shadow: 0 0 5px white;

    p {
      margin: 0;
      padding: 0.2rem;
      font-size: 0.8rem;
      font-weight: 300;
      cursor: pointer;
    }
    .title-mark {
      display: none;
    }
  }

  .facebook {
    padding: 0.2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .instargram {
    padding: 0.2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .whatsapp {
    padding: 0.2rem;
    font-size: 1.5rem;
    cursor: pointer;
    text-shadow: 0 0 10px white;
  }

  @media (max-width: 600px) {
    display: grid;
    .title {
      border: none;
      box-shadow: none;
      p {
        display: none;
      }
      .title-mark {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
        font-size: 1.5rem;
        cursor: pointer;
      }
      .title-p {
        display: none;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  h5 {
    margin: 0;
    padding: 0.5rem;
    font-weight: 300;
  }

  .gomain {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    align-items: flex-end;
    .slash {
      display: none;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    .slash {
      display: none;
    }
    h5 {
      padding: 0.2rem;
    }
  }
`;

export const Clock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 1.2rem;
    font-weight: 800;
  }
  .time {
    display: flex;
    flex-direction: row;
    div {
      margin-left: 0.2rem;
    }
  }
  span {
    font-weight: 800;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
