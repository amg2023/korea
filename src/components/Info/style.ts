import styled from "styled-components";

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InfoInner = styled.div`
  width: 100%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Location = styled.p`
  font-family: "Antonio", sans-serif;
  flex: 1 1 0%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  color: black;
  letter-spacing: -2;
  text-shadow: 0 0 2px black;
`;

export const InnerText = styled.p`
  color: white;
  font-size: 500px;
  margin-bottom: 40px;
`;

export const Title = styled.div`
  font-family: "Antonio", sans-serif;
  width: 100%;
  flex: 1 1 0%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const TitleLeft = styled.p`
  flex: 1 1 0%;
  font-size: 12rem;
  line-height: 1em;
  color: black;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 10px black;
`;

export const TitleRight = styled.p`
  flex: 1 1 0%;
  font-size: 12rem;
  line-height: 100%;
  text-align: right;
  color: black;
  margin: 0;
  letter-spacing: -10;
  text-shadow: 0 0 10px black;
`;
