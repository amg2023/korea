import * as S from "./style";
import { IJoyDiscription } from "./type";

export const JoyDiscriptionPCProps = [
  { className: "up", value: "PC keyboard Up (front)", icon: "↥" },
  { className: "down", value: "PC keyboard Down (back)", icon: "↧" },
  { className: "left", value: "PC keyboard Left (left)", icon: "↢" },
  { className: "right", value: "PC keyboard Right (right)", icon: "↣" },
  { className: "z", value: "PC keyboard KeyZ (greeting)", icon: "Z" },
];

export const JoyDiscriptionProps = [
  { className: "up", value: "yellow Icon Up (front)", icon: "↥" },
  { className: "down", value: "yellow Icon Down (back)", icon: "↧" },
  { className: "left", value: "yellow Icon Left (left)", icon: "↢" },
  { className: "right", value: "yellow Icon Right (right)", icon: "↣" },
  { className: "z", value: "green Icon KeyZ (greeting)", icon: "Z" },
];

export default function ToolTipButton({
  className,
  value,
  icon,
}: IJoyDiscription) {
  return (
    <S.SToolTipDiscription className={className}>
      <div>{icon}</div>
      <p>{value}</p>
    </S.SToolTipDiscription>
  );
}
