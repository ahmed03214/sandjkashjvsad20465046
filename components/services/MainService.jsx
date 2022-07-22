/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";

import style from "../../styles/services.module.scss";
import BackDrop from "../MainService/BackDrop";
import BackBtn from "../MainService/BackBtn";
import MianCard from "../MainService/MianCard";
import Items from "../MainService/Items";
import MainFotterServices from "../MainFotterServices";

const MainService = ({ service, mainData }) => {
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
            img="/assets/services/header.webp"
          />
        </header>

        <main>
          <div className={`${style.bodyContainer} rounded border py-4 mt-4`}>
            <div className="container">
              <div className="body">
                <div className="content lh-lg fs-5">
                  <p>{service.description}</p>
                </div>
              </div>

              <div className="items">
                <Items color="red" items={service.items} />
              </div>
            </div>
          </div>

          <MainFotterServices serviceName={service.name} />
        </main>
      </div>
    </Layout>
  );
};

export default MainService;
