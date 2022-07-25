import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const phone = process.env.NEXT_PUBLIC_PHONE_NUM;

const FloatingBtn = () => {
  const openWhatsapp = () => {
    window.open(`https://wa.me/${phone}`, "_blanc");
  };

  return (
    <>
      <div
        title="طلب عن طريق الواتساب"
        onClick={openWhatsapp}
        className="whatsapp-floating-btn flex-center"
      >
        <BsWhatsapp size="30" />
      </div>
    </>
  );
};

export default FloatingBtn;
