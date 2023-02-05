export type IUserForm = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type IUser = {
  id: number;
  name: string;
  hashedPassword: string;
  email: string;
  imageUrl: string;
  permission: number;
  register: IRegister;
};

export type IRegister = {
  id: number;
  name: string;
  email: string;
  birth: string;
  country: string;
  phone: string;
  memberId: string;
  course: string;
  confirm: boolean;
  category: string;
  user: IUser;
};

export type IRegisterForm = {
  birth: string;
  country: string;
  phone: string;
  memberId: string;
  course: string;
};
