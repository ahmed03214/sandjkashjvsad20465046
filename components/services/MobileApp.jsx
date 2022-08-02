/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Layout from "../../layout";

import style from "../../styles/services.module.scss";
import BackDrop from "../MainService/BackDrop";
import BackBtn from "../MainService/BackBtn";
import MianCard from "../MainService/MianCard";
import Items from "../MainService/Items";
import Heading from "../MainService/Heading";
import MainFotterServices from "../MainFotterServices";

const MobileApp = ({ mainData, service }) => {
  const SliceItems = ({ items }) => {
    const [hideOverItems, setHideOverItems] = useState(true);

    return (
      <div className="pb-2">
        <Items
          className="row"
          mt={3}
          itemClassName="col-lg-6 justify-content-start"
          items={hideOverItems ? items.slice(0, 6) : items}
        />
        <p
          className="me-2 fw-bold cu-pointer text-primary w-fit"
          onClick={() => setHideOverItems((prev) => !prev)}
        >
          قراءة
          {hideOverItems ? " المزيد" : " اقل"}
        </p>
      </div>
    );
  };

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
            img={`/assets/services/phoneAps/header.webp`}
          />
        </header>

        <main>
          <div className="sections">
            <div className="container">
              <section
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    className="text-center mt-3"
                    color="#000"
                    orderList="/assets/how-are-we/advantages-logo/icon2.webp"
                    rounded
                  >
                    ماذا سنقدم لك في يمناك
                  </Heading>

                  <p className="body mt-3 fw-bold font-bold">
                    {service.sections[0].body}
                  </p>

                  <Items items={service.sections[0].items} />
                </div>
              </section>

              <section
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    color="#B84A85"
                    className="text-center title mb-3 font-bold fw-bold"
                  >
                    {service.sections[1].title}
                  </Heading>

                  <div className="body mt-4 pt-2">
                    {service.sections[1].body.map((body, idx) => (
                      <p key={idx} className="font-bold fw-bold mt-2">
                        {body}
                      </p>
                    ))}
                  </div>
                </div>
              </section>

              <section
                className={`${style.bodyContainer} rounded shadow pt-1 mt-4 pb-3`}
              >
                <div className="container">
                  <Heading
                    color="#B84A85"
                    className="title text-center mb-3 mt-4 pt-4 font-bold fw-bold"
                  >
                    {service.sections[1].title2}
                  </Heading>

                  <Items items={service.sections[1].items} />
                </div>
              </section>

              <section
                className={`${style.bodyContainer} rounded shadow py-4 mt-4`}
              >
                <div className="container">
                  <Heading
                    color="#B84A85"
                    className="title text-center mb-3 mt-4 pt-4 font-bold fw-bold"
                  >
                    {service.sections[2].title}
                  </Heading>

                  <div className="body mt-4 pt-2">
                    {service.sections[2].body.map((body, idx) => (
                      <p key={idx} className="font-bold fw-bold mt-2">
                        {body}
                      </p>
                    ))}
                  </div>

                  <Heading
                    color="#3ebde7"
                    className="title text-center mt-4 pt-4 font-bold fw-bold"
                  >
                    {service.sections[2].title2}
                  </Heading>

                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <Items
                        mt={4}
                        mark="/assets/landing/advantages-icons/icon4.webp"
                        items={service.sections[2].itemsWithMuted}
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
              </section>
            </div>
          </div>
          <MainFotterServices serviceName={service.name} />
        </main>
      </div>
    </Layout>
  );
};

export default MobileApp;
