/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import MainFotterServices from "../MainFotterServices";
import BackDrop from "../../components/MainService/BackDrop";
import MianCard from "../../components/MainService/MianCard";
import BackBtn from "../../components/MainService/BackBtn";

import style from "../../styles/services.module.scss";
import Items from "../../components/MainService/Items";

const SocialMange = ({ mainData, service }) => {
  console.log(service);
  return (
    <Layout
      social={mainData.social}
      services={mainData.services}
      className={style.mainService}
    >
      <BackDrop />

      <div className="container py-5">
        <header className={`pt-4 pb-4 ${style.header}`}>
          <BackBtn to="/services" title={service.name} />

          <MianCard
            bg="/assets/services/socialMange/backdrop.webp"
            body={service.sections[0].pices[0]}
            title={service.name}
            img="/assets/services/socialMange/header.webp"
          />
        </header>

        <main>
          <div className="sections">
            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <div className="flex-center gap-5">
                  <div className="info">
                    {service.sections[0].pices.map((pice, idx) => (
                      <p
                        key={idx}
                        className={`fw-bold ${idx === 2 ? "text-muted" : ""}`}
                      >
                        {pice}
                      </p>
                    ))}
                  </div>

                  <div className="img d-md-flex d-none">
                    <img
                      className="w-100"
                      src="/assets/services/socialMange/sections/section1.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <h5 className="fw-bold">{service.sections[1].title}</h5>
                <p className="text-muted small">{service.sections[1].body} </p>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <h5 className="fw-bold">{service.sections[3].title}</h5>
                <p className="small text-muted">{service.sections[3].muted}</p>

                <Items color="blue" items={service.sections[3].items} />
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <div className="flex-center gap-5">
                  <div className="img d-md-flex d-none">
                    <img
                      className="w-100"
                      src="/assets/services/socialMange/sections/section2.webp"
                      alt=""
                    />
                  </div>

                  <div className="info">
                    <h5 className="fw-bold">{service.sections[4].title}</h5>
                    <p className="small text-muted">
                      {service.sections[4].muted}
                    </p>

                    <Items
                      muted
                      color="blue"
                      items={service.sections[4].itemsWithMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <MainFotterServices serviceName={service.name} />
        </main>
      </div>
    </Layout>
  );
};

export default SocialMange;
