import styled from "styled-components";

export const PostContent = styled.div`
  position: relative;
  padding: 2rem;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

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
  blockquote {
    border-left: 0.5rem solid #bfffe7;
    margin: 2rem 0;
    width: 100%;
    background: rgba(185, 185, 185, 0.1);
    padding: 1rem;
    line-height: 1.4em;
    color: #a5a5a5;
  }
  table {
    position: relative;
    width: 100%;
  }
  th,
  tr,
  td {
    padding: 0.2rem;
    font-size: 1.2rem;
    border: 2px solid gray;
  }
  td:first-of-type,
  th:first-of-type {
    width: 100px;
    background-color: #232323;
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
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #ff6b6b;
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
