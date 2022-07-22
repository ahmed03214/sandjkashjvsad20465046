/* eslint-disable @next/next/no-img-element */
import React from "react";

const GetOrderListImg = ({ src, children, color = "#000", className = "" }) => {
  return (
    <div className="heading flex-center gap-2">
      <img width="65px" className="d-none d-md-block" src={src} alt="" />
      <h2 style={{ color }} className={`${className} fs-4`}>
        {children}
      </h2>
      <img width="65px" className="d-none d-md-block" src={src} alt="" />
    </div>
  );
};

export default GetOrderListImg;
