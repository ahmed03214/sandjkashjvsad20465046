/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";

import style from "../../styles/services.module.scss";
import BackDrop from "../MainService/BackDrop";
import BackBtn from "../MainService/BackBtn";
import MianCard from "../MainService/MianCard";
import Items from "../MainService/Items";
import MainFotterServices from "../MainFotterServices";
import Heading from "../MainService/Heading";

const SEO = ({ mainData, service }) => {
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
            body={service.description}
            title={service.name}
            img={`/assets/services/seo/header.webp`}
          />
        </header>

        <main>
          <div className="container">
            <div className="sections">
              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    className="text-center mt-3"
                    color="#000"
                    orderList="/assets/how-are-we/advantages-logo/icon3.webp"
                    rounded
                  >
                    {service.sections[0].title}
                  </Heading>

                  <div className="body text-center mt-4 font-bold fw-bold">
                    {service.sections[0].body}
                  </div>
                </div>
              </div>

              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    color="#B84A85"
                    className="title text-center fw-bold mt-4 pt-4"
                  >
                    {service.sections[1].title}
                  </Heading>

                  <div className="body">
                    {service.sections[1].body.map((body, idx) => (
                      <p key={idx} className="font-bold fw-bold mt-4">
                        {body}
                      </p>
                    ))}
                  </div>

                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <Items
                        mark="/assets/landing/advantages-icons/icon4.webp"
                        items={service.sections[1].items}
                      />
                    </div>

                    <div className="col-lg-6">
                      <div className="img d-lg-flex d-none w-100">
                        <img
                          src="/assets/services/adsMange/sections/section3.webp"
                          alt=""
                        />
                      </div>
                    </div>
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

export default SEO;
