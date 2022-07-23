/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";

import style from "../../styles/services.module.scss";
import BackDrop from "../MainService/BackDrop";
import BackBtn from "../MainService/BackBtn";
import MianCard from "../MainService/MianCard";
import Items from "../MainService/Items";
import MainFotterServices from "../MainFotterServices";

const MainService = ({
  service,
  mainData,
  noCard = false,
  mainClassName = "",
  descriptionClass = "",
  heading = false,
}) => {
  return (
    <Layout
      social={mainData.social}
      services={mainData.services}
      className={style.mainService}
    >
      <BackDrop />

      <div className="container py-5">
        {!noCard && (
          <header className={`pt-4 pb-4 ${style.header}`}>
            <BackBtn to="/services" title={service.name} />

            <MianCard
              body={service.description}
              title={service.name}
              img={`/assets/services/${service.repo}/header.webp`}
            />
          </header>
        )}

        <main className={mainClassName}>
          <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
            <div className="container">
              {heading && <h3 className="text-center my-3">{heading}</h3>}

              <div className="body">
                <div className="content lh-lg fs-5">
                  <p
                    className={descriptionClass}
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </div>

              {!noCard && (
                <div className="items">
                  <Items color="red" items={service.items} />
                </div>
              )}
            </div>
          </div>

          {!noCard && <MainFotterServices serviceName={service.name} />}
        </main>
      </div>
    </Layout>
  );
};

export default MainService;
