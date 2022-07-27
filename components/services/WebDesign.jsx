/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";

import style from "../../styles/services.module.scss";
import BackDrop from "../MainService/BackDrop";
import BackBtn from "../MainService/BackBtn";
import MianCard from "../MainService/MianCard";
import Items from "../MainService/Items";
import Heading from "../MainService/Heading";
import MainFotterServices from "../MainFotterServices";

const WebDesign = ({ mainData, service }) => {
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
            img={`/assets/services/wesiteDesign/header.webp`}
          />
        </header>

        <main>
          <div className="container">
            <div className="sections">
              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <div className="body">
                    <Heading
                      className="text-center mt-3"
                      color="#000"
                      orderList="/assets/how-are-we/advantages-logo/icon2.webp"
                      rounded
                    >
                      {service.sections[0].title}
                    </Heading>
                    <h5 className="text-muted mt-2">
                      {service.sections[0].body}
                    </h5>

                    <Items items={service.sections[0].items} />
                  </div>
                </div>
              </div>

              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading className="mb-3 text-center mt-2" color="#B84A85">
                    {service.sections[1].title}
                  </Heading>
                  <p className="font-bold fw-bold lh-lg">
                    {service.sections[1].body1}
                  </p>
                  <p className="font-bold fw-bold lh-lg">
                    {service.sections[1].body2}
                  </p>
                  <p className="font-bold fw-bold lh-lg">
                    {service.sections[1].body3}
                  </p>

                  <Heading
                    color="#B84A85"
                    className="title font-bold fw-bold mt-5"
                  >
                    {service.sections[1].title2} ؟
                  </Heading>
                  <p className="text-muted small mb-1 font-bold fw-bold">
                    {service.sections[1].help}
                  </p>

                  <Items mt={4} items={service.sections[1].items} />
                </div>
              </div>

              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    className="text-center mt-3"
                    color="#000"
                    orderList="/assets/how-are-we/advantages-logo/icon2.webp"
                    rounded
                  >
                    مميزات الموقع مع يمناك
                  </Heading>
                  <div className="row align-items-center">
                    <div className="col-lg-5 p-2">
                      <div className="img d-lg-flex d-none w-100">
                        <img
                          src="/assets/services/adsMange/sections/section2.webp"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-7 pe-lg-4">
                      <Items items={service.sections[2].items} />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <h4 className="text-center title mb-5 font-bold fw-bold">
                    {service.sections[3].title}
                  </h4>
                  <Items
                    itemClassName="mb-4"
                    items={[
                      service.sections[3].body,
                      service.sections[3].body2,
                      service.sections[3].body3,
                    ]}
                  />
                </div>
              </div>

              <div
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    color="#3ebde7"
                    className="text-center title mb-5 font-bold fw-bold"
                  >
                    {service.sections[4].title}
                  </Heading>

                  <div className="row">
                    <div className="col-lg-6">
                      <Items
                        mark="/assets/landing/advantages-icons/icon4.webp"
                        items={service.sections[4].itemsWithMuted}
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

export default WebDesign;
