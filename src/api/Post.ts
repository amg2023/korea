import { IForm } from "./../store/pay/type";
import { MAIL_URL } from "data/constant";
import Api from "./methods";

export const postMailApi = async (body: IForm) => {
  return await Api().post<IForm>(`${MAIL_URL}api/mail`, body);
};
