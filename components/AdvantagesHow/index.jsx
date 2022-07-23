/* eslint-disable @next/next/no-img-element */
import React from "react";

const AdvantagesHow = ({ className = "", idx, title, desc }) => {
  const getColor = () => {
    let result = "";

    switch (idx) {
      case 1:
        result = "#5980D5";
        break;

      case 2:
        result = "#B84A85";
        break;

      case 3:
        result = "#3DBEE6";
        break;

      case 4:
        result = "#63BC21";
        break;

      default:
        result = "#000";
    }

    return result;
  };

  return (
    <div
      className={`${className} shadow rounded py-3 px-3 gap-3 mb-3 flex-start text-center`}
    >
      <div className="img flex-center">
        <img
          className="w-75"
          src={`/assets/how-are-we/advantages-logo/icon${idx}.webp`}
          alt=""
        />
      </div>

      <div className="info text-end">
        <p className="m-0 fs-5" style={{ color: getColor() }}>
          {title}
        </p>
        <p className="desc text-muted m-0">{desc}</p>
      </div>
    </div>
  );
};

export default AdvantagesHow;
