import { useAtom } from "jotai";
import { tipAtom } from "./atom";

export default function useTipActions() {
  const [tip, setTip] = useAtom(tipAtom);

  const onTip = () => {
    setTip({
      on: true,
    });
  };

  const offTip = () => {
    setTip({
      on: false,
    });
  };

  return {
    tip,
    onTip,
    offTip,
  };
}
