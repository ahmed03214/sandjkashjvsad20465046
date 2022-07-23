/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import MainFotterServices from "../MainFotterServices";
import BackDrop from "../../components/MainService/BackDrop";
import MianCard from "../../components/MainService/MianCard";
import BackBtn from "../../components/MainService/BackBtn";
import Heading from "../../components/MainService/Heading";
import Items from "../../components/MainService/Items";

import style from "../../styles/services.module.scss";

const GraphicDesign = ({ mainData, service }) => {
  return (
    <Layout
      social={mainData.social}
      services={mainData.services}
      className={`${style.mainService} ${style.mangeAds} ${style.design}`}
    >
      <BackDrop />

      <div className="container py-5">
        <header className={`pt-4 pb-4 ${style.header}`}>
          <BackBtn to="/services" title={service.name} />

          <MianCard
            bg="/assets/services/design/backdrop.webp"
            body={service.sections[0].body}
            title={service.name}
            img="/assets/services/design/header.webp"
          />
        </header>

        <main>
          <div className="sections">
            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <Heading
                    className="text-center"
                    color="#000"
                    orderList="/assets/services/design/logo.webp"
                  >
                    {service.sections[0].title}
                  </Heading>
                  <h5 className="text-center">
                    {service.sections[0].helpTitle}
                  </h5>
                </header>

                <main>
                  <div className="net flex-between align-items-start">
                    <div className="info mt-2 p-0 mt-md-5">
                      <p className="mb-3">{service.sections[0].body}</p>

                      <Heading className="mt-5 pt-5" color="#B84A85">
                        {service.sections[0].title}
                      </Heading>

                      <p className="mb-3 text-muted fs-5">
                        {service.sections[0].body2}
                      </p>
                    </div>

                    <div className="img d-md-flex d-none w-75">
                      <img
                        src="/assets/services/design/sections/section1.webp"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <Heading>{service.sections[1].title}</Heading>
                  <p className="text-muted mb-5 mt-3">
                    {service.sections[1].body}
                  </p>
                </header>

                <main>
                  <Items
                    className={style.itemsNetFirst}
                    itemClassName="justify-content-start border py-2 px-3 w-100"
                    items={service.sections[1].items}
                    color="red"
                  />
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <main>
                  <div className="net flex-between align-items-start">
                    <div className="info mt-2 p-0 mt-md-5">
                      <Heading color="#000">
                        {service.sections[0].title}
                      </Heading>

                      <p className="mb-3 text-muted lh-lg">
                        {service.sections[2].body}
                      </p>
                    </div>

                    <div className="img d-md-flex d-none w-75">
                      <img
                        src="/assets/services/design/sections/section2.webp"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <Heading>{service.sections[3].title}</Heading>
                  <p className="text-muted pb-4 mb-5 mt-3">
                    {service.sections[1].body}
                  </p>
                </header>

                <main>
                  <Items
                    className={`${style.itemsNetSecound} gap-3`}
                    itemClassName={`${style.itemM0} justify-content-start border py-2 px-3 w-100`}
                    items={service.sections[3].items}
                    color="blue"
                  />
                </main>
              </div>
            </div>
          </div>

          <MainFotterServices serviceName={service.name} />
        </main>
      </div>
    </Layout>
  );
};

export default GraphicDesign;
