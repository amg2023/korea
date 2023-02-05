import { CSSProperties } from "react";

export type IInput = {
  type?: string;
  name?: string;
  onChange?: Function;
  value?: string;
  style?: CSSProperties;
  background?: string;
  label: string;
  placeholder?: string;
};
