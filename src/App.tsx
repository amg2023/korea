import { useAtomsDevtools } from "jotai/devtools";
import { Water } from "three-stdlib";
import { extend } from "@react-three/fiber";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Mains from "./Mains";
import Toast from "components/common/toast/Toast";
const { VITE_PAYPAL } = (import.meta as any).env;

extend({ Water });
const AtomsDevtools = ({ children }: any) => {
  useAtomsDevtools("demo");
  return children;
};

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <PayPalScriptProvider
      options={{
        "client-id": VITE_PAYPAL,
        currency: "USD",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AtomsDevtools>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="" element={<Mains />} />
            </Routes>
            <Footer />
            <Toast />
          </BrowserRouter>
        </AtomsDevtools>
      </QueryClientProvider>
    </PayPalScriptProvider>
  );
}
