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

// 프로필 이미지 아바타 props타입
export interface IPulseButton {
  imageUrl?: string | null;
  width?: string;
  height?: string;
  boxShadow?: string;
  className?: string;
}
