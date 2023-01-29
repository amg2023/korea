import styled from "styled-components";
import { DefaultPage } from "../style";
import { PostContent } from "../Markdown/style";

export const RegisterPage = styled(DefaultPage)`
  position: relative;
  width: 100%;
  height: 90vh;

  /* 디스플레이 */
  display: grid;
  grid-template-columns: 8rem 1fr;
`;
/* 스텝바 */
export const StepBar = styled.div`
  position: relative;
  grid-column: 1/2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .step {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .dot {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: white;
      box-shadow: 0 0 20px white;
      margin: 1rem;
    }
    .title {
      display: flex;
      font-size: 0.8rem;
      color: white;
      text-shadow: 0 0 10px white;
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SelectContent = styled(PostContent)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  grid-column: 2/3;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1rem;
    background: linear-gradient(45deg, #ee0979, #ff6a00);
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #ee0979, #ff6a00);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-track {
    background-color: black;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
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

  @media (max-width: 1000px) {
    grid-column: 1/3;
  }
`;

export const SelectTap = styled(Tap)``;

export const PaypalTap = styled(Tap)``;

export const InfoFormTap = styled(Tap)`
  span {
    display: none;
  }
`;

export const _PostContent = styled(PostContent)`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  text-align: flex-start;
  justify-content: flex-start;

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

  @media (max-width: 992px) {
    padding: 0;
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

export const PaypalContent = styled(_PostContent)``;

export const InfoFormContent = styled(_PostContent)`
  position: relative;

  display: flex;
  align-items: center;

  form {
    position: relative;
    width: 80%;
  }
`;
