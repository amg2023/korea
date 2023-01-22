import { ReactChild } from "react";
import { useAtomValue } from "jotai";
import * as S from "./style";
import { modalAtom } from "../../store/modal/atom";

export default function Modal({
  children,
}: {
  children: ReactChild[] | ReactChild;
}) {
  const modal = useAtomValue(modalAtom);
  return <S.Modal modal={modal.on}>{children}</S.Modal>;
}
