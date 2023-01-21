import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { useAtomsDevtools } from "jotai/devtools";
import Three from "./components/Three";
import Info from "./components/Info";

const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  return (
    <AtomsDevtools>
      <Three />
      <Info />
    </AtomsDevtools>
  );
}
