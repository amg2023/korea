import ModalPage from "components/modal/ModalPage";
import Three from "components/Three";
import { useAtomValue } from "jotai";
import { threeAtom } from "store/three/atom";

export default function ThreeMain() {
  const three = useAtomValue(threeAtom);

  return (
    <>
      <Three />
      <ModalPage />
    </>
  );
}
