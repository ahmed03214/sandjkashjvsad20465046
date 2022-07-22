/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "../../styles/services.module.scss";

const Items = ({
  items,
  color = "red",
  className = "",
  itemClassName = "",
}) => {
  return (
    <ul className={`${className} list-unstyled mt-5`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`item ${itemClassName} w-fit my-3 flex-center gap-3`}
        >
          <div className={`${style.marker} flex-end`}>
            <img
              className="w-100 rounded-circle"
              src={`/assets/how-are-we/advantages-logo/icon${
                color === "red" ? "2" : color === "blue" ? "3" : ""
              }.webp`}
              alt="logo"
            />
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
