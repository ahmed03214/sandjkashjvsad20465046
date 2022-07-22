import React, { useEffect, useState } from "react";
import style from "../../styles/landing.module.scss";

import { AiOutlineArrowUp } from "react-icons/ai";

const ToTopBtn = () => {
  const [isActive, setIsActive] = useState(false);

  // Show Btn
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 600) {
        setIsActive(true);
      } //
      else {
        setIsActive(false);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`${style.toTopBtn} ${
        isActive ? style.active : ""
      } flex-center cu-pointer text-light`}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ToTopBtn;
