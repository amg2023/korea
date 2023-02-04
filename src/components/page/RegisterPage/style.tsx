import styled from "styled-components";
import { PostContent } from "../Markdown/style";

export const Register = styled.div`
  position: relative;
  padding-top: 5rem;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
`;

// export const StepBar = styled.div`
//   position: sticky;
//   grid-column: 1/2;
//   top: 0;
//   left: 0;
//   width: 10vw;
//   height: 100vh;
//   z-index: 200;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .step {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     text-align: center;

//     .dot {
//       width: 1rem;
//       height: 1rem;
//       border-radius: 50%;
//       background: #494949;
//       box-shadow: 0 0 2px #494949;
//       margin: 1rem;
//     }
//     .title {
//       position: relative;
//       width: 100%;
//       display: none;
//       justify-content: center;
//       text-align: center;
//     }
//   }

//   .select {
//     .dot {
//       background: white;
//       box-shadow: 0 0 20px white;
//     }
//     .title {
//       display: flex;
//       font-size: 0.8rem;
//       color: white;
//       text-shadow: 0 0 10px white;
//     }
//   }
// `;
