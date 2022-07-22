import React from "react";
import style from "../../styles/layout/mainButton.module.scss";

import { useRouter } from "next/router";

const Button = ({
  className = "",
  disabled = false,
  children,
  onClick = null,
  requestService,
}) => {
  const router = useRouter();

  const requestServiceContactus = () => {
    router.push(`/contact?serviceName=${requestService}`, "/contact");
  };

  return (
    <button
      disabled={disabled}
      onClick={requestService ? requestServiceContactus : onClick}
      className={`${style.mainBtn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
