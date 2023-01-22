import { useAtom } from "jotai";
import { modalAtom } from "./atom";

export default function useModalActions() {
  const [modal, setModal] = useAtom(modalAtom);

  const onClickCancel = () => {
    setModal({
      on: false,
      type: "",
    });
  };

  const onSetType = (type: string) => {
    setModal({
      on: true,
      type: type,
    });
  };

  return {
    modal,
    setModal,
    onClickCancel,
    onSetType,
  };
}
