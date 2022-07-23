/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import BackDrop from "../../components/MainService/BackDrop";
import MianCard from "../../components/MainService/MianCard";
import BackBtn from "../../components/MainService/BackBtn";
import Heading from "../../components/MainService/Heading";
import MainFotterServices from "../MainFotterServices";

import style from "../../styles/services.module.scss";
import Items from "../../components/MainService/Items";

const AdsMangement = ({ mainData, service }) => {
  return (
    <Layout
      social={mainData.social}
      services={mainData.services}
      className={style.mainService + " " + style.mangeAds}
    >
      <BackDrop />

      <div className="container py-5">
        <header className={`pt-4 pb-4 ${style.header}`}>
          <BackBtn to="/services" title={service.name} />

          <MianCard
            bg="/assets/services/adsMange/backdrop.webp"
            body={service.sections[0].body}
            title={service.name}
            img="/assets/services/adsMange/header.webp"
          />
        </header>

        <main>
          <div className="sections">
            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <Heading className="text-center" color="#B84A85">
                    {service.sections[0].title}
                  </Heading>
                  <h5 className="text-center">
                    {service.sections[0].helpTitle}
                  </h5>
                </header>

                <main>
                  <div className="net flex-between align-items-start">
                    <div className="info mt-2 p-0 mt-md-5">
                      <p>{service.sections[0].body}</p>
                    </div>

                    <div className="img d-md-flex d-none w-100">
                      <img
                        src="/assets/services/adsMange/sections/section1.webp"
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
                </header>

                <main>
                  <Items
                    className={style.itemsNetFirst}
                    itemClassName="border py-2 px-3 w-100 justify-content-start"
                    items={service.sections[1].items}
                    color="blue"
                  />
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <main>
                  <div className="net flex-center gap-3 align-items-start">
                    <div className="img d-md-flex d-none w-100">
                      <img
                        src="/assets/services/adsMange/sections/section2.webp"
                        alt=""
                        className="w-100"
                      />
                    </div>

                    <div className="info mt-3 w-100">
                      <h5>{service.sections[2].title}</h5>

                      <Items
                        className={style.itemsNetSecound}
                        itemClassName={style.item}
                        color="blue"
                        items={service.sections[2].items}
                      />
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <h5>{service.sections[3].title}</h5>
                  <p className="text-muted small">
                    {service.sections[3].helpTitle}
                  </p>
                </header>

                <main>
                  <div className={`row ${style.itemsRow3}`}>
                    <div className="col-md-6">
                      <p className="m-0">{service.sections[3].items[0]}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="m-0">{service.sections[3].items[1]}</p>
                    </div>
                    <div className="col-12">
                      <p className="m-0">{service.sections[3].items[2]}</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <header>
                  <Heading>{service.sections[4].title}</Heading>
                </header>

                <main>
                  <ul className={`row list-unstyled mt-5`}>
                    {service.sections[4].items.map((item, idx) => (
                      <div className="col-md-6 p-2" key={idx}>
                        <div
                          className={`item w-100 border py-2 flex-center justify-content-start gap-3`}
                        >
                          <div className={`${style.marker} flex-end`}>
                            <img
                              className="w-100 rounded-circle"
                              src={`/assets/how-are-we/advantages-logo/icon3.webp`}
                              alt="logo"
                            />
                          </div>
                          <li className="fw-bold">
                            <p className="m-0">{item}</p>
                          </li>
                        </div>
                      </div>
                    ))}
                  </ul>
                </main>
              </div>
            </div>

            <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
              <div className="container">
                <main>
                  <div className="net flex-center gap-3 align-items-start">
                    <div className="info mt-3 w-100">
                      <h5>{service.sections[5].title}</h5>

                      <Items
                        color="blue"
                        items={service.sections[5].itemsWithMuted}
                      />
                    </div>

                    <div className="img d-md-flex d-none w-100">
                      <img
                        src="/assets/services/adsMange/sections/section3.webp"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
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

export default AdsMangement;
