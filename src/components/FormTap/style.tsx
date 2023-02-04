import { PostContent } from "components/page/Markdown/style";
import styled from "styled-components";

export const FormContent = styled(PostContent)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin: 0.2rem;
  }

  h2 {
    margin: 1rem;
    font-size: 1.6rem;
    font-weight: 300;
    color: #ff6b6b;
  }

  .under {
    margin: 2rem;
    position: relative;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
      margin: 1rem;
    }
  }
  position: relative;
  display: flex;
  align-items: center;

  form {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
