import { PostContent } from "components/page/Markdown/style";
import styled from "styled-components";

export const SelectContent = styled(PostContent)`
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

  table {
    position: relative;
    width: 100%;
  }
  .table-row input[type="radio"] {
    display: none;
  }
  .table-row input[type="radio"] + label {
    .outer {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 0.2rem solid #333;
      .inner {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #333;
      }
      cursor: pointer;
    }
  }
  .table-row input[type="radio"] + label {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #ff6b6b;
    box-shadow: 0 0 2px #ff6b6b;
  }
  .table-row input[type="radio"]:checked + label {
    .outer {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 0.2rem solid #ff6b6b;
      box-shadow: 0 0 10px #ff6b6b;
      .inner {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #ff6b6b;
        box-shadow: 0 0 10px #ff6b6b;
      }
      cursor: pointer;
    }
  }

  .under {
    margin: 2rem;
    position: relative;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 1.8rem;
    }

    td {
      font-size: 1rem;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 1.4rem;
    }
    td {
      font-size: 0.8rem;
    }
  }
`;

export const TableOuter = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
