/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/landing.module.scss";

const AdvantageCard = ({ className = "", idx, title }) => {
  return (
    <div
      className={`${className} ${style.advantageCard} flex-center text-center`}
    >
      <img
        className={style.icon}
        src={`/assets/landing/advantages-icons/icon${idx}.webp`}
        alt=""
      />
      <p className="flex-center m-0">{title}</p>
    </div>
  );
};

export default AdvantageCard;
