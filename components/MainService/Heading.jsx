import React from "react";
import GetOrderListImg from "./GetOrderListImg";

const Heading = ({
  children,
  color,
  className = "",
  orderList = false,
  rounded,
}) => {
  return (
    <>
      {orderList ? (
        <GetOrderListImg
          rounded={rounded}
          color={color}
          className={className}
          src={orderList}
        >
          {children}
        </GetOrderListImg>
      ) : (
        <h2 style={{ color }} className={`${className} fw-bold font-blod fs-4`}>
          {children}
        </h2>
      )}
    </>
  );
};

export default Heading;
