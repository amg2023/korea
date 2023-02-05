import { postLoginApi } from "../../api/Auth";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { loginFormAtom } from "./atom";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { IUser } from "type/user";
import { createToast } from "utils/toast";

export function useLoginActions() {
  const [modal, setModal] = useAtom(modalAtom);
  const [loginform, setLoginForm] = useAtom(loginFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading } = useMutation(postLoginApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setLoginForm({
        name: "",
        password: "",
      });
      setModal({
        on: false,
        type: "",
      });
      createToast("LOGIN");
    },
    onError(res: Error) {
      setUser({
        ...user,
        error: "Error : login fail. try again",
      });
    },
  });

  const changeLoginForm = (e: any) => {
    setLoginForm({ ...loginform, [e.target.name]: e.target.value });
  };

  const initializeAuth = () => {
    setUser({
      ...user,
      error: "",
    });
  };

  const login = async () => {
    mutate(loginform);
  };

  return {
    login,
    loginform,
    changeLoginForm,
    initializeAuth,
    LoginLoading: isLoading,
  };
}
