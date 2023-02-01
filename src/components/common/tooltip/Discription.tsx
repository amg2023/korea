import * as S from "./style";
import { TbClick } from "react-icons/tb";
import { BsTable } from "react-icons/bs";

export default function Discription() {
  return (
    <S.Discription>
      <p>
        <TbClick /> : click picture(info)
      </p>
      <p>
        <BsTable /> : show timetable
      </p>
    </S.Discription>
  );
}
