import { CSSProperties } from "react";

export type IInput = {
  onChange?: Function;
  value?: string;
  style?: CSSProperties;
  background?: string;
  label: string;
  placeholder?: string;
};
