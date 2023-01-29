import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
