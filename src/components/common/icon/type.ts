import { CSSProperties } from "react";
export type IGradientIcon = {
  children: JSX.Element;
  onClick?: (e: any) => void;
  text: string;
  className?: string;
  id?: string;
  iconStyle?: CSSProperties;
  toolTipStyle?: CSSProperties;
};

export type IAvatarIcon = {
  children: JSX.Element;
  username: string;
  onClick?: (e: any) => void;
  onLogout?: (e: any) => void;
};
