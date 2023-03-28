import styled from "styled-components";
import { IAvatar } from "./type";

export const SAvatar = styled.div<IAvatar>`
  padding: 0.5rem;

  .avatar-img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 50%;
    border: 2px solid transparent;
    object-fit: cover;
  }
  .border-div {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    cursor: pointer;
    transition: 0.5s;
  }
  .border-div:hover {
    transform: scale(1.1);
  }
  .box {
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
  // className에 다음 값을 인자로 넘겨주면 gradient가 바뀜
  .admin {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      var(--red-gradient) border-box;
  }
  .manager {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      var(--green-gradient) border-box;
  }
  .participant {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      var(--pupple-gradient) border-box;
  }
  .guest {
    background: linear-gradient(45deg, #000000, #000000) padding-box,
      var(--black-gradient) border-box;
  }
  .blob {
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse-black 2s infinite;
    cursor: pointer;
  }
  .blob.white {
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
