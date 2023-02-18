import styled from "styled-components";

export type IGradientText = {
  background?: string;
};
export const GradientText = styled.p<IGradientText>`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  background: ${(props) =>
    props.background ||
    "linear-gradient(45deg,#b294ff,#57e6e6,#feffb8,#57e6e6,#b294ff,#57e6e6)"};

  color: transparent;
  background-size: 500% auto;
  animation: gradient 3s linear infinite;
  -webkit-background-clip: text;
`;
