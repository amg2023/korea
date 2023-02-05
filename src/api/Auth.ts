import { SERVER_URL } from "data/constant";
import { ILoginFormAtom } from "store/login/type";
import { IRegisterFormAtom } from "store/register/type";

import Api from "./methods";

export const getCheckApi = async () => {
  return await Api().getToken(`${SERVER_URL}/auth/check`);
};

export const postLoginApi = async (body: ILoginFormAtom) => {
  return await Api().post(`${SERVER_URL}/auth/login`, body);
};

export const postRegisterApi = async (body: IRegisterFormAtom) => {
  return await Api().post(`${SERVER_URL}/auth/register`, body);
};
