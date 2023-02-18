import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "NanumSquareL";
    src: url("/fonts/NanumSquareL.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothicSubset";
    src: url("/fonts/NanumBarunGothic.ttf") format("truetype");
  }

  @font-face {
    font-family: "BMDOHYEON_ttf";
    src: url("/fonts/BMDOHYEON_ttf.ttf") format("truetype");
  }

  @font-face {
    font-family: "Consolas";
    src: url("/fonts/Consolas.ttf");
  }
  @font-face {
    font-family: "FiraMono-Regular";
    src: url("/fonts/FiraMono-Regular.ttf");
  }


    :root {
        --gray-dark: #161b22;
        --gray-white: rgba(240,246,252,0.1);
        --green:  #a7ffd7;
        --red-gradient: linear-gradient(45deg, #ee0979, #ff6a00);
        --green-gradient: linear-gradient(45deg, #b3ffab, #12fff7);
        --pupple-gradient: linear-gradient(45deg, #8e2de2, #4a00e0);
        --black-gradient: linear-gradient(45deg,  #161b22, #000000);
        --red: #ee0979;
        --pupple: #8e2de2;
    }

    background-color: var(--gray-dark);
    overflow-y: scroll;


    background-color: #1d1d1d;
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
    /* 스크롤 코너 */
    ::-webkit-scrollbar-corner {
      background-color: black;
    }

    // 인풋박스
    input, textarea {
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }
`;

export default GlobalStyle;
