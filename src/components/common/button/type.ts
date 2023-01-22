export interface IColorButton {
  color?: string;
  fontColor?: string;
  width?: string;
}

export type IButton = {
  children: JSX.Element;
  className?: string;
  onClick?: (e: any) => void;
  color?: string;
  fontColor?: string;
  width?: string;
};

export type ICancelButton = {
  className?: string;
  onClick?: (e: any) => void;
};
