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

const DigitalDesign = ({ mainData, service }) => {
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
            img={`/assets/services/digtalMarkiting/header.webp`}
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
                    className="text-center mt-3 fw-bold font-blod"
                    color="#000"
                    orderList="/assets/how-are-we/advantages-logo/icon3.webp"
                    rounded
                  >
                    {service.sections[0].title}
                  </Heading>

                  <div className="body mt-4 pt-2">
                    {service.sections[0].body.map((body, idx) => (
                      <p key={idx} className="font-bold fw-bold mt-2">
                        {body}
                      </p>
                    ))}
                  </div>

                  <Items
                    className="row"
                    itemClassName="col-md-6 justify-content-start"
                    color="blue"
                    items={service.sections[0].items}
                    mark="/assets/landing/advantages-icons/icon4.webp"
                  />
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

export default DigitalDesign;
