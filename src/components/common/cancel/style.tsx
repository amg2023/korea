import styled from "styled-components";

export const CancelButton = styled.button`
  position: relative;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    transform: rotate(360deg);
    cursor: pointer;
  }
`;
