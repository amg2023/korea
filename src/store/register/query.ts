import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { registerFormAtom } from "./atom";
import { postRegisterApi } from "../../api/Auth";
import { IUser } from "type/user";
import { createToast } from "utils/toast";

export function useRegisterActions() {
  const [modal, setModal] = useAtom(modalAtom);
  const [registerform, setRegisterForm] = useAtom(registerFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading } = useMutation(postRegisterApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setRegisterForm({
        name: "",
        email: "",
        password: "",
      });
      setModal({
        on: false,
        type: "",
      });
      createToast("SIGNUP");
    },
    onError(res: Error) {
      setUser({
        ...user,
        error: "Error : signup failed",
      });
    },
  });

  const changeRegisterForm = (e: any) => {
    setRegisterForm({ ...registerform, [e.target.name]: e.target.value });
  };

  const initializeAuth = () => {
    setUser({
      ...user,
      error: "",
    });
  };

  const register = async () => {
    mutate(registerform);
  };

  return {
    register,
    registerform,
    changeRegisterForm,
    initializeAuth,
    RegisterLoading: isLoading,
  };
}
