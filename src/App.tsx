import { useAtomsDevtools } from "jotai/devtools";
import Three from "./components/Three";
import "./lang/index";
import ModalPage from "./components/modal/ModalPage";
import Info from "./components/Info";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  return (
    <AtomsDevtools>
      <PayPalScriptProvider
        options={{
          "client-id": (import.meta as any).env.VITE_PAYPAL,
        }}
      >
        <ModalPage />
        <Three />
        <Info />
      </PayPalScriptProvider>
    </AtomsDevtools>
  );
}
