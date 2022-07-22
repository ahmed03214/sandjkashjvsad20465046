import React from "react";
import style from "../../styles/services.module.scss";

import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

const BackBtn = ({ title, to }) => {
  return (
    <div className={`${style.back} flex-center justify-content-start gap-1`}>
      <Link href={to}>
        <p className="m-0">
          <GrFormNextLink className="cu-pointer" size={26} />
        </p>
      </Link>
      <span className="text-main">{title}</span> &lt; <span>خدمتنا</span>
    </div>
  );
};

export default BackBtn;
