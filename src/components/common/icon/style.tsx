import styled from "styled-components";

export type IGradientIcon = {
  isHover: boolean;
};

export const GradientIconOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  grid-row: 2/3;
`;

export const GradientIcon = styled.div`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: transparent;
  overflow: hidden;
  cursor: pointer;

  font-size: 1.4rem;
`;

export const GradientBorder = styled.div<IGradientIcon>`
  ${(props) => (props.isHover ? "" : "visibility: hidden;")}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  margin-top: 185%;
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  cursor: pointer;
`;

export const GradientToolTip = styled.div<IGradientIcon>`
  opacity: ${(props) => (props.isHover ? "1" : "0")};
  transition: all 0.2s ease-in;

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 3rem;
  width: 6rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;
  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  z-index: 10;

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 200;
  }
`;

export const AvatarToolTip = styled.div<IGradientIcon>`
  opacity: ${(props) => (props.isHover ? "1" : "0")};
  transition: all 0.3s ease-in;
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 4rem;
  width: 8rem;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 0;

  background-color: #1d1d1d;

  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;

  p {
    color: white;
    font-size: 0.8rem;
    margin: 0.6rem;
    font-weight: 300;
  }
`;
