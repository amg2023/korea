import { useAtom } from "jotai";
import { threeAtom } from "./atom";

export default function useThreeActions() {
  const [three, setThree] = useAtom(threeAtom);

  const onThree = () => {
    setThree({
      on: true,
    });
  };

  const offThree = () => {
    setThree({
      on: false,
    });
  };

  return {
    three,
    onThree,
    offThree,
  };
}
