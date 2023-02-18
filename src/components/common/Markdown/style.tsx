import styled from "styled-components";

export const PostContent = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 0.1rem;
    padding: 0;
    font-weight: 300;
  }
  h1 {
    font-size: 5rem;
    width: 100%;
  }
  hr {
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    font-weight: 100;
    display: flex;
    &::before {
      content: "*";
      margin-right: 0.4rem;
    }
  }
  table {
    width: 100%;
  }
  th,
  tr,
  td {
    padding: 2rem;
    font-size: 1.2rem;
    border-top: 2px solid #272727;
  }
  td:first-of-type,
  th:first-of-type {
    width: 100px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 4rem;
    }
    hr {
      margin-bottom: 10px;
    }
    p,
    blockquote,
    pre {
      width: 100%;
    }
    ul {
      padding: 0.5rem;
      display: flex;
      align-content: flex-start;
      flex-wrap: wrap;
    }
    td {
      font-size: 1.2rem;
    }
  }
  del {
    text-decoration: none;
    color: #ff0000;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    td {
      font-size: 0.9rem;
    }
  }
`;
