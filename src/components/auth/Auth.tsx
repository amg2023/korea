import React, { ChangeEvent, FormEvent } from "react";
import { modalAtom } from "../../store/modal/atom";
import { GradientButton } from "../common/button/GradientButton";
import { GradientInput } from "../common/input/GradientInput";

import * as S from "./style";
import { CancelButton } from "../common/cancel/CancelButton";
import { useAtom, useAtomValue } from "jotai";
import { useLoginActions } from "../../store/login/query";
import { useRegisterActions } from "../../store/register/query";
import { userAtom } from "../../store/user/atom";
import PulseButton from "components/common/button/PulseButton";
import { LineInput } from "components/common/input/LineInput";
import useModalActions from "store/modal/query";

export default function Auth() {
  const { modal, setModal } = useModalActions();
  const user = useAtomValue(userAtom);
  const { login, loginform, LoginLoading, changeLoginForm } = useLoginActions();
  const { register, registerform, RegisterLoading, changeRegisterForm } =
    useRegisterActions();

  const onLoginOrRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modal.type === "login") {
      await login();
    } else if (modal.type === "register") {
      await register();
    }
  };

  const changeform = (e: ChangeEvent<HTMLInputElement>) => {
    if (modal.type === "register") {
      changeRegisterForm(e);
    } else {
      changeLoginForm(e);
    }
  };

  const ToggleType = () => {
    setModal({
      on: true,
      type: modal.type === "login" ? "register" : "login",
    });
  };

  return (
    <S.Auth>
      <div className="login-text">
        {modal.type === "login" ? "LOGIN" : "SIGNIN"}
      </div>
      <form onSubmit={(e) => onLoginOrRegister(e)}>
        <LineInput
          type={"text"}
          name={"name"}
          placeholder={"enter name"}
          onChange={changeform}
          value={modal.type === "login" ? loginform.name : registerform.name}
          label={""}
        />
        {modal.type === "register" && (
          <LineInput
            type={"email"}
            name={"email"}
            placeholder={"enter email"}
            onChange={changeform}
            value={registerform.email}
            label={""}
          />
        )}
        <LineInput
          type={"password"}
          name={"password"}
          placeholder={"enter password"}
          onChange={changeform}
          value={
            modal.type === "login" ? loginform.password : registerform.password
          }
          label={""}
        />
        {LoginLoading && <p className="loading">please wait</p>}
        {RegisterLoading && <p className="loading">please wait</p>}
        <p className="error">{user.error}</p>
        <div onClick={ToggleType}>
          <p className="toggle">
            {modal.type === "login" ? "SIGNUP" : "LOGIN"}
          </p>
        </div>
        <PulseButton
          title={modal.type === "login" ? "LOGIN" : "SIGNUP"}
          style={{
            width: "6rem",
            height: "2.4rem",
            fontSize: "1rem",
            background: "linear-gradient(45deg,#ee0979,#ff6a00)",
            boxShadow: "0 0 10px #ee0979",
          }}
        />
      </form>
    </S.Auth>
  );
}
