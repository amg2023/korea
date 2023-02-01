import styled from "styled-components";

export const PostContentOrigin = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  * {
    margin: 0;
    text-align: start;
  }

  h1 {
    font-size: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  hr {
    height: 4px;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
  }
  strong {
    margin-top: 100px;
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

  pre,
  span {
    margin-top: 10px;
    font-size: 14px !important;
    width: 60vw;
    overflow-x: hidden;
  }

  table {
    margin: 2rem;
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
  hr {
    margin-bottom: 30px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 5rem;
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

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    td {
      font-size: 0.9rem;
    }
  }
`;

export const PostContent = styled(PostContentOrigin)`
  em {
    font-weight: 1000;
    text-decoration: underline;
  }
  code {
    position: relative;
  }
  del {
    display: flex;
    text-align: center;
    text-decoration: none;
    color: #ff6b6b;
  }
`;
