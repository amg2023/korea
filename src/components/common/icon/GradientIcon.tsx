import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { IGradientIcon } from "./type";
import { $ } from "utils/JQuery";

export const GradientIcon = ({
  children,
  text,
  className,
  onClick,
  id,
  iconStyle,
  toolTipStyle,
}: IGradientIcon) => {
  const [isHover, setIsHover] = useState(false);
  const iconRef = useRef(null);

  const OverEvent = () => {
    setIsHover(true);
  };

  const OutEvent = () => {
    setIsHover(false);
  };

  useEffect(() => {
    $(iconRef.current!).on("mouseover", OverEvent);
    $(iconRef.current!).on("mouseout", OutEvent);
    return () => {
      $(iconRef.current!).remove("mouseover", OverEvent);
      $(iconRef.current!).remove("mouseout", OutEvent);
    };
  }, []);

  return (
    <S.GradientIconOuter
      style={iconStyle}
      className={`gradient-icon ${className ? className : ""}`}
    >
      <S.GradientIcon
        className={`gradient-icon ${className ? className : ""}`}
        ref={iconRef}
        onClick={onClick}
        id={id}
        style={iconStyle}
      >
        {children}
        {/* <S.GradientBorder isHover={isHover}></S.GradientBorder> */}
      </S.GradientIcon>
      <S.GradientToolTip isHover={isHover} style={toolTipStyle}>
        <p>{text}</p>
      </S.GradientToolTip>
    </S.GradientIconOuter>
  );
};
