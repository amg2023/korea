import ModalPage from "components/modal/ModalPage";
import React, { Suspense } from "react";

const Three = React.lazy(() => import("components/Three"));

export default function Mains() {
  return (
    <Suspense fallback={null}>
      <Three />
      <ModalPage />
    </Suspense>
  );
}
