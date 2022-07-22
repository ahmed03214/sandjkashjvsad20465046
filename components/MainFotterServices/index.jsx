import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import Button from "../Button";

import { useRouter } from "next/router";

const Phonenumber = process.env.NEXT_PUBLIC_PHONE_NUM;

const MainFotterServices = ({ serviceName }) => {
  const router = useRouter();

  const requestServiceWhatsapp = () => {
    const message = `السلام عليكم, اتكلم معاك بخصوص خدمة ${serviceName}`;
    const whatsappAPI = `https://wa.me/${Phonenumber}?text=${message}`;

    window.open(whatsappAPI, "_blanc");
  };

  const requestServiceContactus = () => {
    const message = `السلام عليكم, اتكلم معاك بخصوص خدمة ${serviceName}`;

    router.push(`/contact?requestService=${message}`, "/contact");
  };

  return (
    <div className="btns flex-between">
      <button
        className="btn btn-success flex-center px-3 py-2 mt-4 d-block"
        onClick={requestServiceWhatsapp}
      >
        <BsWhatsapp className="mb-1 ms-2" size="25" /> طلب من الواتساب
      </button>

      <Button
        onClick={requestServiceContactus}
        className="px-3 py-2 mt-4 d-block"
      >
        اطلب الخدمة الان
      </Button>
    </div>
  );
};

export default MainFotterServices;
