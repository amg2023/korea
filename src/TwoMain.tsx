import Main from "components/main";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { threeAtom } from "store/three/atom";

export default function TwoMain() {
  return <Main />;
}
