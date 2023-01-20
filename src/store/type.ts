import { IMsg } from "../components/Chat/type";

export type IMsgAtom = {
  msg: IMsg[];
  error: string;
};

export type IUserAtom = {
  user: string;
  error: string;
};

export type IJoiner = {
  user: "";
  model: "";
  error: "";
};

export type IJoinerAtom = {
  joiner: {
    [name: string]: IJoiner[];
  };
  error: string;
};
