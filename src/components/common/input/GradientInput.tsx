import { useEffect, useState } from "react";
import { usePayActions } from "store/pay/query";
import * as S from "./style";
import { IInput } from "./types";
import Select from "react-select";
import countryList from "react-select-country-list";

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
  const { onSetForm } = usePayActions();
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
      {label === "country" ? (
        <div>
          <Select
            styles={{
              control: (base) => ({
                ...base,
                background: "transparent",
                borderColor: "none",
                marginBottom: "3rem",
                color: "#0f0f0f",
                position: "relative",
                width: "80vw",
                zIndex: 30,
              }),
              menu: (base) => ({
                ...base,
                color: "#0f0f0f",
                position: "relative",
                width: "80vw",
                zIndex: 30,
              }),
              menuList: (base) => ({
                ...base,
                background: "#1d1d1d",
                position: "relative",
                width: "80vw",
                color: "white",
                zIndex: 30,
              }),
              option: (base) => ({
                ...base,
                position: "relative",
                width: "80vw",
                color: "white",
              }),
              singleValue: (base) => ({
                ...base,
                position: "relative",
                width: "80vw",
                color: "white",
              }),
            }}
            options={countryList().getData()}
            onChange={(e) => onSetForm("country", e?.label ?? "")}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "black",
                primary: "black",
              },
            })}
          />
        </div>
      ) : (
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
      )}

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
