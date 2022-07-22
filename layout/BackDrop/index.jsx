import React from "react";
import style from "../../styles/landing.module.scss";

const BackDrop = ({ className = "", children }) => {
  return <div className={`${style.backDrop} ${className}`}>{children}</div>;
};

export default BackDrop;
