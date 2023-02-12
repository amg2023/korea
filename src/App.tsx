import { useAtomsDevtools } from "jotai/devtools";
import { Water } from "three-stdlib";
import { extend } from "@react-three/fiber";
import GlobalStyle from "./globalStyle";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mains from "./Mains";
import Toast from "components/common/toast/Toast";

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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/korea" element={<Mains />} />
          </Routes>
          <Footer />
          <Toast />
        </BrowserRouter>
      </AtomsDevtools>
    </QueryClientProvider>
  );
}
