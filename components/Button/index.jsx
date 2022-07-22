import React from "react";
import style from "../../styles/layout/mainButton.module.scss";

const Button = ({
  className = "",
  disabled = false,
  children,
  onClick = null,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style.mainBtn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
