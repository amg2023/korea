import { useAtomsDevtools } from "jotai/devtools";
import { Water } from "three-stdlib";
import { extend } from "@react-three/fiber";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "components/Footer";
import Header from "./components/Header";
import TwoMain from "./TwoMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeMain from "./ThreeMain";
import TimetablePage from "components/page/TimetablePage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import RegisterPage from "components/page/RegisterPage";
import Mains from "./Mains";
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
              <Route path="/korea/" element={<Mains />} />
              <Route />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AtomsDevtools>
      </QueryClientProvider>
    </PayPalScriptProvider>
  );
}
