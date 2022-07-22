/* eslint-disable @next/next/no-img-element */
import React from "react";

const BackDrop = () => {
  return (
    <div className="backDrop back-index position-absolute w-100 h-100">
      <img
        draggable={false}
        className="w-100"
        src="/assets/services/backdrop-services.webp"
        alt=""
      />
    </div>
  );
};

export default BackDrop;
