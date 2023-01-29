import { Dispatch, SetStateAction } from "react";

export type ITap = {
  step?: number;
  setStep?: Dispatch<SetStateAction<number>>;
};

export type IOption = {
  id: number;
  package: boolean;
  checked: boolean;
  title: string;
  content: string;
  schedule: string;
  price: number;
};
