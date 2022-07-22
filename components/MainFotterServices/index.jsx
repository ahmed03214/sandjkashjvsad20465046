import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import Button from "../Button";

const Phonenumber = process.env.NEXT_PUBLIC_PHONE_NUM;

const MainFotterServices = ({ serviceName }) => {
  const requestServiceWhatsapp = () => {
    const message = `السلام عليكم, اتكلم معاك بخصوص خدمة ${serviceName}`;
    const whatsappAPI = `https://wa.me/${Phonenumber}?text=${message}`;

    window.open(whatsappAPI, "_blanc");
  };

  return (
    <div className="btns flex-between">
      <button
        className="btn btn-success flex-center px-3 py-2 mt-4 d-block"
        onClick={requestServiceWhatsapp}
      >
        <BsWhatsapp className="mb-1 ms-2" size="25" /> طلب من الواتساب
      </button>

      <Button className="px-3 py-2 mt-4 d-block" requestService={serviceName}>
        اطلب الخدمة الان
      </Button>
    </div>
  );
};

export default MainFotterServices;
