import Main from "components/main";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { threeAtom } from "store/three/atom";

export default function TwoMain() {
  const location = useLocation();
  const queryString = location.search;
  useEffect(() => {
    console.log(queryString);
  }, []);

  return <Main />;
}
