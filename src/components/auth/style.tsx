import { Center } from "../../style";
import styled from "styled-components";

export const Auth = styled(Center)`
  position: relative;
  color: white;
  flex-direction: column;

  input[type="password"] {
    &::placeholder {
      color: #d9d9d9;
      opacity: 1;
    }
  }

  .login-text {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
  }

  form {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .error {
    color: #ff4343;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
