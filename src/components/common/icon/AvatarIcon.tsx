import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { IAvatarIcon } from "./type";
import { $ } from "utils/JQuery";

export const AvatarIcon = ({ children, username, onLogout }: IAvatarIcon) => {
  const [isHover, setIsHover] = useState(false);
  const iconRef = useRef(null);
  const tooltipRef = useRef(null);

  const OverEvent = () => {
    setIsHover(true);
  };

  const OutEvent = () => {
    setIsHover(false);
  };

  useEffect(() => {
    $(iconRef.current!).on("mouseover", OverEvent);
    $(tooltipRef.current!).on("mouseover", OverEvent);

    $(iconRef.current!).on("mouseout", OutEvent);
    $(tooltipRef.current!).on("mouseout", OutEvent);

    return () => {
      $(iconRef.current!).remove("mouseover", OverEvent);
      $(tooltipRef.current!).remove("mouseover", OverEvent);

      $(iconRef.current!).remove("mouseout", OutEvent);
      $(tooltipRef.current!).remove("mouseout", OutEvent);
    };
  }, []);

  return (
    <S.GradientIconOuter>
      <S.GradientIcon className="Avatar-icon" ref={iconRef}>
        {children}
        <S.GradientBorder isHover={isHover}></S.GradientBorder>
      </S.GradientIcon>
      <S.AvatarToolTip isHover={isHover} ref={tooltipRef}>
        <p className="tooltip-item username-tooltip">{username}</p>
        <p className="tooltip-item logout-tooltip" onClick={onLogout}>
          LOGOUT
        </p>
      </S.AvatarToolTip>
    </S.GradientIconOuter>
  );
};
