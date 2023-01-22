import { useAtomsDevtools } from "jotai/devtools";
import Three from "./components/Three";
import "./lang/index";
import ModalPage from "./components/modal/ModalPage";
import { ReactNode } from "react";
import Info from "./components/Info";

const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  return (
    <AtomsDevtools>
      <ModalPage />
      <Three />
      <Info />
    </AtomsDevtools>
  );
}
