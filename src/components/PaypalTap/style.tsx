import { PostContent } from "components/page/Markdown/style";
import styled from "styled-components";

export const PaypalContent = styled(PostContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 2rem;
  width: 100vw;
  height: 200vh;

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 300;
    }
  }

  .confirm {
    h2 {
      font-size: 2rem;
      font-weight: 300;
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  .paypal {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 10px white;
    padding: 2rem;
    margin: 2rem;
    width: 100%;
    background-color: white;
    color: black;
  }

  @media (max-width: 800px) {
  }
`;
