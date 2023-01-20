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
