/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import MainFotterServices from "../MainFotterServices";
import BackDrop from "../../components/MainService/BackDrop";
import MianCard from "../../components/MainService/MianCard";
import BackBtn from "../../components/MainService/BackBtn";

import style from "../../styles/services.module.scss";
import Items from "../../components/MainService/Items";
import Heading from "../../components/MainService/Heading";

const Writing = ({ mainData, service }) => {
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
            bottomImg
            body={service.section1.body}
            title={service.name}
            img="/assets/services/writing/header.webp"
          />
        </header>

        <main>
          <div className={`${style.bodyContainer} rounded shadow py-4 mt-4`}>
            <div className="container">
              {Object.keys(service).map((key, idx) => {
                if (!idx) return;

                const currentSection = service[key];

                return (
                  <section key={idx} className="mb-5">
                    <Heading color={idx === 3 ? "#4A73CB" : "#B84A85"}>
                      {currentSection.title}
                    </Heading>

                    {currentSection.body && (
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: currentSection.body,
                        }}
                      />
                    )}

                    {currentSection.items?.length ? (
                      <Items
                        color={idx === 3 ? "blue" : "red"}
                        items={currentSection.items}
                        className={idx === 3 ? style.rowsItems : ""}
                      />
                    ) : (
                      <></>
                    )}
                  </section>
                );
              })}
            </div>
          </div>

          <MainFotterServices serviceName={service.name} />
        </main>
      </div>
    </Layout>
  );
};

export default Writing;
