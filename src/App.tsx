import { useAtomsDevtools } from "jotai/devtools";
import Three from "./components/Three";
import ModalPage from "./components/modal/ModalPage";
import Info from "./components/Info";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Water } from "three-stdlib";
import { extend } from "@react-three/fiber";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

extend({ Water });
const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <GlobalStyle />
      <AtomsDevtools>
        <QueryClientProvider client={queryClient}>
          {/* <PayPalScriptProvider
        options={{
          "client-id": (import.meta as any).env.VITE_PAYPAL,
        }}
      >
      </PayPalScriptProvider> */}
          <ModalPage />
          <Three />
          <Info />
        </QueryClientProvider>
      </AtomsDevtools>
    </>
  );
}
