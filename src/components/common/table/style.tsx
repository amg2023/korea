import styled from "styled-components";
import { DefaultPage } from "utils/style";

export const STable = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  overscroll-behavior: contain;

  .table-title {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .table-inner {
      display: flex;
      flex-direction: row;
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
  }

  input {
    width: 20rem;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    color: white;
    background-color: rgb(233, 233, 233, 0.1);

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  table {
    margin: 2rem;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;

    font-weight: 300;

    thead {
      background: var(--green-gradient);
      color: black;
      th {
        border-radius: 5px;
        box-shadow: 0 0 10px #a7ffd7;
        font-weight: 300;
      }
    }

    th:first-child {
      width: 2rem;
    }

    th:nth-child(2) {
      width: 100rem;
    }

    th:nth-child(3) {
      width: 2rem;
    }

    th,
    tr,
    td {
      padding: 1rem;
      font-size: 0.8rem;
      border-bottom: 2px solid #a7ffd7;
    }
  }
`;
