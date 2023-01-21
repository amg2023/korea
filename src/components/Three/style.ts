import styled from "styled-components";

export const SmallTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  min-width: 50px;
  position: relative;
  height: 30px;
  width: 7rem;

  background: rgba(22, 22, 22, 0.9);
  border-radius: 0.7rem;
  padding: 10px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 0 30px rgb(30, 30, 30);

  .categoryset-text {
    font-size: 1rem;
    transition: all 0.3s ease-in;
  }
`;

export const InnerText = styled.p`
  color: white;
  font-size: 500px;
  margin-bottom: 40px;
`;
