import styled from "styled-components";
import { PostContent } from "../Markdown/style";

export const StepBar = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 10vw;
  height: 100vh;
  z-index: 200;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .step {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;

    .dot {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #494949;
      box-shadow: 0 0 2px #494949;
      margin: 1rem;
    }
    .title {
      position: relative;
      width: 100%;
      display: none;
      justify-content: center;
      text-align: center;
    }
  }

  .select {
    .dot {
      background: white;
      box-shadow: 0 0 20px white;
    }
    .title {
      display: flex;
      font-size: 0.8rem;
      color: white;
      text-shadow: 0 0 10px white;
    }
  }
`;

export const SelectContent = styled(PostContent)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CourseSelectContent = styled(PostContent)`
  position: relative;
  padding: 5rem;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  td:first-of-type,
  th:first-of-type {
    width: 8rem;
    background-color: #232323;
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

  h2 {
    margin: 1rem;
    font-size: 1.4rem;

    font-weight: 300;
    color: #ff6b6b;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 3rem;
    }
    table {
      margin: 1rem;
    }
    td {
      font-size: 1rem;
    }
    td:first-of-type,
    th:first-of-type {
      width: 6rem;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }
    table {
      margin: 0;
    }
    td {
      font-size: 0.8rem;
    }
    td:first-of-type,
    th:first-of-type {
      width: 4rem;
    }
  }
`;

export const RequestFormContent = styled(PostContent)`
  .under {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    h2 {
      margin: 1rem;
    }
  }
  position: relative;
  display: flex;
  align-items: center;
  form {
    position: relative;
    width: 80%;
  }
`;
