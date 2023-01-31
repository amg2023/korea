import { useAtomsDevtools } from "jotai/devtools";
import Three from "./components/Three";
import ModalPage from "./components/modal/ModalPage";
import Info from "./components/Header";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Water } from "three-stdlib";
import { extend } from "@react-three/fiber";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "components/Footer";
import Header from "./components/Header";

extend({ Water });
const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AtomsDevtools>
        {/* <PayPalScriptProvider
        options={{
          "client-id": (import.meta as any).env.VITE_PAYPAL,
        }}
      >
      </PayPalScriptProvider> */}
        <Header />
        <ModalPage />
        <Three />
        <Footer />
      </AtomsDevtools>
    </QueryClientProvider>
  );
}
