import { IUser } from "type/user";

export type IUserAtom = {
  user: IUser | null;
  error: string;
};
