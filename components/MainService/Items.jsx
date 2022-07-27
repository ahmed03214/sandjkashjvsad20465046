/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "../../styles/services.module.scss";

const Items = ({
  items,
  color = "red",
  className = "",
  itemClassName = "",
  mark,
  mt = 5,
}) => {
  const getMark = () => {
    const markRepo = "/assets/how-are-we/advantages-logo";
    const colorNum = color === "red" ? "2" : color === "blue" ? "3" : null;
    const currentIcon = `icon${colorNum}.webp`;

    return mark ? mark : `${markRepo}/${currentIcon}`;
  };

  return (
    <ul className={`${className} list-unstyled mt-${mt}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`item ${itemClassName} w-fit my-3 flex-center gap-3`}
        >
          <div className={`${style.marker} flex-end`}>
            <img className="w-100 rounded-circle" src={getMark()} alt="logo" />
          </div>
          <li className="fw-bold">
            <p className="m-0">{item.item || item}</p>

            {item.muted && <p className="text-muted small">{item.muted}</p>}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Items;
