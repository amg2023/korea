import { IOption } from "components/page/RegisterPage/type";

export type ILanguage = {
  language: "ENGLISH" | "KOREAN";
};
export type FormParams =
  | "name"
  | "birth"
  | "email"
  | "phone"
  | "country"
  | "memberId";

export type IForm = { [K in FormParams]: string };
export type IFormValid = { [K in FormParams]: boolean };

export type IPay = {
  course: IOption[];
  option: IOption[];
  form: IForm;
  total: number;
  validate: IFormValid;
};
