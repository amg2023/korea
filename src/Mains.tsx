import Main from "components/main";
import ModalPage from "components/modal/ModalPage";
import Three from "components/Three";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePayActions from "store/pay/query";
import { threeAtom } from "store/three/atom";
import useThreeActions from "store/three/query";

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
    <>
      {query === "?q=three" ? (
        <>
          <Three />
          <ModalPage />
        </>
      ) : (
        <Main />
      )}
    </>
  );
}
