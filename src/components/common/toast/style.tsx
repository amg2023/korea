import styled from "styled-components";

export const ToastDiv = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2000;
  min-width: 200px;
  color: white;

  .toast {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    box-shadow: 0 0 20px var(--black);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    font-size: 1rem;
    font-weight: 200;
    border-radius: 5px;
    padding: 20px 40px;
    margin: 0.5rem;

    strong {
      color: var(--text-picker);
    }
  }
`;
