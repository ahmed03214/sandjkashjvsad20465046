/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/services.module.scss";

import Link from "next/link";

const ServiceCard = ({
  dataAos = "",
  dataAosDuration = "",
  desc,
  id,
  name,
  className = "",
}) => {
  const validTitle = (name) => name.toString().replaceAll(" ", "+");

  return (
    <Link href={`services/${id}/${validTitle(name)}`}>
      <article
        data-aos={dataAos}
        data-aos-auration={dataAosDuration}
        className={`${style.serviceCard} ${className} py-5 px-3 cu-pointer shadow`}
      >
        <div className="logo mb-4">
          <img width={70} src="/assets/landing/service-card-icon.webp" alt="" />
        </div>
        <div className="data">
          <p className="name h3 mb-4 text-cut">{name}</p>
          <p className="description text-cut-2 w-95 text-muted">{desc}</p>
        </div>
      </article>
    </Link>
  );
};

export default ServiceCard;
