import { getCheckApi } from "../../api/Auth";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "./atom";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { IUser } from "type/user";
import cache from "utils/cache";
import { createToast } from "utils/toast";

export function useUserQueryEffect() {
  const [_, setModal] = useAtom(modalAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, data, isError, error, isLoading } = useMutation(getCheckApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setModal({
        on: false,
        type: "",
      });
    },
    onError(err: Error) {
      setUser({
        ...user,
        error: "Error : " + err.message,
      });
    },
  });
  // 라이프사이클
  // 체크 로직
  useEffect(() => {
    if (cache.get("token")) {
      mutate();
    }
  }, []);
  return { check: mutate, data, isError, error, isLoading };
}

export function useUserActions() {
  const [_, setModal] = useAtom(modalAtom);
  const [__, setUser] = useAtom(userAtom);

  const logout = async () => {
    localStorage.clear();
    setUser({ error: "", user: null });
    setModal({
      on: false,
      type: "",
    });
    createToast("logout ");
  };

  const commentLogout = async () => {
    localStorage.clear();
    setUser({ error: "", user: null });
    setModal({
      on: false,
      type: "",
    });
  };

  return {
    logout,
    commentLogout,
  };
}
