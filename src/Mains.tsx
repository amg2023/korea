import ModalPage from "components/modal/ModalPage";
import React, { Suspense } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useThreeActions from "store/three/query";

const Three = React.lazy(() => import("components/Three"));
const Main = React.lazy(() => import("components/main"));

export default function Mains() {
  const location = useLocation();
  const query = location.search;
  const { three, onThree, offThree } = useThreeActions();

  useEffect(() => {
    if (query === "?q=three") {
      onThree();
    } else {
      offThree();
    }
  }, [query]);

  return (
    <Suspense fallback={null}>
      {query === "?q=three" ? <Three /> : <Main />}
      <ModalPage />
    </Suspense>
  );
}
