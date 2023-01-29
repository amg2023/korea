import { IOption } from "components/page/RegisterPage/type";

export type ILanguage = {
  language: "ENGLISH" | "KOREAN";
};
export type IForm = {
  name: string;
  email: string;
  phone: string;
  country: string;
  memberId: string;
};
export type IFormValid = {
  name: boolean;
  email: boolean;
  phone: boolean;
  country: boolean;
  memberId: boolean;
};
export type IPay = {
  course: IOption[];
  option: IOption[];
  form: IForm;
  total: number;
  validate: IFormValid;
};
