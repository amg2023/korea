import { ChangeEventHandler, CSSProperties } from "react";

export type IInput = {
  type?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  style?: CSSProperties;
  background?: string;
  label?: string;
  placeholder?: string;
  readonly?: boolean;
  pattern?: string | RegExp;
  errorMsg?: string;
  check?: () => boolean;
  cb?: () => void;
  _cb?: () => void;
  successCB?: () => void;
  failCB?: () => void;
};
