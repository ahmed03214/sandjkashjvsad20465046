import React from "react";
import GetOrderListImg from "./GetOrderListImg";

const Heading = ({ children, color, className = "", orderList = false }) => {
  return (
    <>
      {orderList ? (
        <GetOrderListImg color={color} className={className} src={orderList}>
          {children}
        </GetOrderListImg>
      ) : (
        <h2 style={{ color }} className={`${className} fs-4`}>
          {children}
        </h2>
      )}
    </>
  );
};

export default Heading;
