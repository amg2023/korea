import{r as a,aM as s,an as n,j as e,aZ as f,a_ as p,a$ as d,b0 as m,b1 as u,b2 as g,b3 as v,b4 as x}from"./index.2341fcdd.js";function l(t,r){a.exports.useEffect(()=>{const i=new IntersectionObserver(r,{threshold:.4});return i.observe(t==null?void 0:t.current),()=>i&&i.disconnect()},[t])}const w=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  padding-top: 10rem;
  width: 100vw;
  height: 200vh;

  .hangul-page {
    overflow: auto;
    width: 80%;
  }

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 200;
    }
  }
`;function b(){const t=a.exports.useRef();return l(t,c),n(w,{className:"page C",id:"C",children:[e("div",{className:"page-title",ref:t,children:e("h1",{children:"HANGUL"})}),e(f,{})]})}const y=s.div`
  @keyframes fly {
    100% {
      transform: rotate(1turn) translate(100px) rotate(-1turn);
    }
  }

  @keyframes flyPlus {
    100% {
      transform: rotate(-1turn) translate(100px) rotate(1turn);
    }
  }

  &.A {
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 200vh;

    h1 {
      opacity: 0;
      transition: all 0.5s ease-in;
      transform: translateY(-50px);
    }

    &.start {
      h1 {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .wrapper-inner {
      position: absolute;
      top: 0;
      width: 100vw;
      height: 100vh;
      padding-top: 5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .left {
        h1 {
          font-size: 4rem;
          margin: 0.2rem;
          padding: 0;
          font-weight: 300;
        }
      }
      .right {
        h1 {
          margin: 0.2rem;
          font-weight: 300;
        }
        .day {
          color: black;
          font-size: 1.2rem;
          margin: 0.4rem;
          font-weight: 300;
        }
      }

      .underButton {
        transition: all 0.5s ease-in;

        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        opacity: 0;

        a {
          padding: 0.2rem !important;
        }

        &.start {
          opacity: 1;
        }
      }
    }

    .wrapper {
      width: 100vw;
      height: 100vh;
      background: #ff5340;
      position: relative;
      overflow: hidden;
    }

    .base {
      position: absolute;
      filter: blur(100px);
      opacity: 0.8;
    }

    .one {
      border-radius: 100%;
      width: 60vw;
      height: 60vh;
      background-color: #ff6b6b;
      left: -50px;
      top: -100px;
      z-index: 3;
      animation: fly 12s linear infinite;
      transform: rotate(0) translate(80px) rotate(0);
    }

    .two {
      width: 70vw;
      height: 70vh;
      background-color: #ff2d2d;
      bottom: 130px;
      left: -80px;
    }

    .three {
      border-radius: 100%;
      width: 70vw;
      height: 70vh;
      bottom: -180px;
      right: -100px;
      background-color: #ff4d91;
      animation: flyPlus 8s linear infinite;
      transform: rotate(0) translate(100px) rotate(0);
    }
  }
`,h={width:"8rem",height:"3.5rem",fontSize:"1.4rem",fontWeight:"200",textShadow:"0 0 10px black",background:"white",boxShadow:"0 0 2px white",color:"black"};function N(){const t=a.exports.useRef(),r=a.exports.useRef();return p(),a.exports.useEffect(()=>{var i;(i=t==null?void 0:t.current)==null||i.classList.add("start"),setTimeout(()=>{var o;(o=r==null?void 0:r.current)==null||o.classList.add("start")},500)},[]),n(y,{className:"page A",ref:t,children:[n("div",{className:"wrapper",children:[e("div",{className:"base one"}),e("div",{className:"base two"}),e("div",{className:"base three"})]}),n("div",{className:"wrapper-inner",children:[e("div",{className:"left",children:e("h1",{children:"AMG KOREA 2022"})}),n("div",{className:"right",children:[e("h1",{children:"SOUTH KOREA, SEOUL"}),e("h1",{className:"day",children:"APRIL 26~30 2023"})]}),n("div",{className:"underButton",ref:r,children:[e("a",{href:"#E",className:"anchor",children:e(d,{style:h,title:"REGISTER"})}),e("a",{href:"#B",className:"anchor",children:e(d,{style:h,title:"TIMETABLE"})})]})]})]})}const S=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 2rem;
  width: 100vw;
  height: 200vh;
`;function A(){const t=a.exports.useRef();l(t,c);const[r,i]=a.exports.useState(1),o=a.exports.useRef();return a.exports.useEffect(()=>{o.current&&o.current.scrollTo({top:0,behavior:"smooth"})},[r,i]),n(S,{className:"page E",id:"E",children:[e("div",{className:"page-title",ref:t,children:e("h1",{children:"REGISTER"})}),r===1&&e(m,{setStep:i}),r===2&&e(u,{setStep:i}),r===3&&e(g,{setStep:i})]})}const R=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  padding-top: 10rem;
  width: 100vw;
  height: 200vh;

  .seoul-page {
    overflow: auto;
    width: 80%;
  }

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 200;
    }
  }
`;function T(){const t=a.exports.useRef();return l(t,c),n(R,{className:"page D",id:"D",children:[e("div",{className:"page-title",ref:t,children:e("h1",{children:"SEOUL"})}),e(v,{})]})}const E=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  .page {
    .markdown {
      grid-column: 1/3;
      grid-row: 1/3;
      position: relative;
      width: 100%;
    }
  }

  .page-title {
    opacity: 0;
    transition: all 0.5s ease-in;
    transform: translateY(-50px);

    h1 {
      font-size: 4rem;
      font-weight: 300;
    }

    &.start {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,j=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  padding-top: 10rem;
  width: 100vw;
  height: 200vh;

  .title {
    h1 {
      font-size: 4rem;
      font-weight: 300;
    }
  }

  .titles {
    border-top: 0 2px #ff6b6b;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2 {
      font-weight: 300;
      margin: 1rem;
      &.select {
        color: #ff6b6b;
        text-shadow: 0 0 10px #ff6b6b;
      }
      cursor: pointer;
    }
  }

  .body {
    width: 100%;
    height: 150vh;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function k(){const t=a.exports.useRef();return l(t,c),n(j,{className:"page B",id:"B",children:[e("div",{className:"page-title",ref:t,children:e("h1",{children:"TIMETABLE"})}),e(x,{})]})}const c=(t,r)=>{const[i]=t;i&&i.isIntersecting?i.target.classList.add("start"):i.target.classList.remove("start")};function L(){return n(E,{children:[e(N,{}),e(k,{}),e(b,{}),e(T,{}),e(A,{})]})}export{L as default,c as titleCB};
