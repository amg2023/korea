import { useEffect, useState } from "react";
import * as S from "./style";
import { IInput } from "./types";

export const GradientInput = ({
  type,
  placeholder,
  value,
  style,
  label,
  name,
  readonly = false,
  pattern,
  errorMsg,
  cb,
  _cb,
  onChange,
  check,
  successCB,
  failCB,
}: IInput) => {
  const [error, setError] = useState("please type " + label);
  const background_red =
    "linear-gradient(45deg,#ee0979,#ff6a00,#8e2de2,#4a00e0,#ee0979,#ff6a00)";
  const background_blue =
    "linear-gradient(45deg,#b294ff,#57e6e6,#feffb8,#57e6e6,#b294ff,#57e6e6)";

  useEffect(() => {
    if (check) {
      if (check()) {
        setError("");
        cb ? cb() : () => {};
        successCB ? successCB() : () => {};
      } else {
        setError(errorMsg || "please type " + name);
        _cb ? _cb() : () => {};
        failCB ? failCB() : () => {};
      }
    } else if (value?.search(pattern || /(.){1,}/) !== -1) {
      setError("");
      cb ? cb() : () => {};
      successCB ? successCB() : () => {};
    } else {
      setError(errorMsg || "please type " + name);
      _cb ? _cb() : () => {};
      failCB ? failCB() : () => {};
    }
  }, [value, errorMsg]);

  return (
    <S.GradientInput
      style={style}
      label={label}
      background={error === "" ? background_blue : background_red}
      className="gradient-input"
    >
      <div>
        <h4
          style={{
            color: error !== "" ? "#ff5f64" : "#57e6e6",
          }}
        >
          {label}
        </h4>
      </div>

      <input
        placeholder={placeholder}
        onChange={onChange ? onChange : () => {}}
        value={value}
        style={style}
        type={type}
        name={name!}
        autoComplete="off"
        readOnly={readonly}
      />
      <div className="error">
        <h5
          style={{
            color: error !== "" ? "#ff5f64" : "#57e6e6",
          }}
        >
          * {error === "" ? "complete" : error}
        </h5>
      </div>
    </S.GradientInput>
  );
};
