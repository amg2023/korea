import { useEffect, useState } from "react";
import usePayActions from "store/pay/query";
import * as S from "./style";
import { IInput } from "./types";
import Select from "react-select";
import countryList from "react-select-country-list";

export const GradientInput = ({ placeholder, value, style, label }: IInput) => {
  const { pay, onSetForm, onSetValidate } = usePayActions();
  const [error, setError] = useState("please type " + label);
  const background_red =
    "linear-gradient(45deg,#ee0979,#ff6a00,#8e2de2,#4a00e0,#ee0979,#ff6a00)";
  const background_blue =
    "linear-gradient(45deg,#b294ff,#57e6e6,#feffb8,#57e6e6,#b294ff,#57e6e6)";

  useEffect(() => {
    if (value === "") {
      setError("please type " + label);
    } else if (label === "name") {
      if (pay.form.name !== "") {
        setError("");
        onSetValidate("name");
      }
    } else if (label === "email") {
      const f = value?.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (f !== -1) {
        setError("");
        onSetValidate("email");
      } else {
        setError("please enter correct email type");
      }
    } else if (label === "country") {
      if (pay.form.country !== "") {
        setError("");
        onSetValidate("country");
      }
    } else if (label === "birth") {
      const f = value?.search(/^[0-9]{4}[\.]+[0-9]{2}[\.]+[0-9]{2}$/);
      if (f !== -1) {
        setError("");
        onSetValidate("birth");
      } else {
        setError("please enter correct birth type");
      }
    } else if (label === "phone") {
      const f = value?.search(/^[0-9]{3}[-]+[0-9]{3,4}[-]+[0-9]{4}$/);
      if (f !== -1) {
        setError("");
        onSetValidate("phone");
      } else {
        setError("please enter correct phone type");
      }
    } else if (label === "memberId") {
      if (pay.form.memberId !== "") {
        setError("");
        onSetValidate("memberId");
      }
    } else {
      setError("");
    }
  }, [value]);

  return (
    <S.GradientInput
      style={style}
      label={label}
      background={error === "" ? background_blue : background_red}
    >
      <div>
        <h4
          style={{
            color: error !== "" ? "#c7c7c7" : "#57e6e6",
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
        <div>
          <input
            placeholder={placeholder}
            onChange={(e) => onSetForm(label, e.target.value)}
            value={value}
            style={style}
            autoComplete="off"
          />
        </div>
      )}

      <div>
        <h5
          style={{
            color: error !== "" ? "#ff5f64" : "#57e6e6",
          }}
        >
          * {error === "" ? "ok" : error}
        </h5>
      </div>
    </S.GradientInput>
  );
};
