/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";

import Head from "next/head";
import getMainData from "../../utils/getMainData";

import style from "../../styles/services.module.scss";
import ServiceCard from "../../components/ServiceCard";

const Services = ({ mainData }) => {
  return (
    <>
      <Head>
        <title>يمناك - خدمتنا</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={`min-h-80vh ${style.services}`}
      >
        <div className="backDrop back-index position-absolute w-100 h-100">
          <img
            draggable={false}
            className="w-100"
            src="/assets/404/backdrop-404.webp"
            alt=""
          />
        </div>

        <div className="container py-5">
          <header className={`py-5 mt-5 flex-center ${style.header}`}>
            <div className={`${style.info}`}>
              <h2>خدماتنا</h2>
              <p className="small text-muted">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أم ٌر هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>
            </div>

            <div className="img flex-center d-md-flex d-none">
              <img className="w-75" src="/assets/services/header.webp" alt="" />
            </div>
          </header>

          <main className={`${style.main}`}>
            <h2 className="mb-3">ماذا سنقدم لك في يمناك</h2>

            <div className={`${style.gridNet}`}>
              {mainData.services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  id={service.id}
                  name={service.name}
                  desc={service.des}
                  className="border"
                />
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Services;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
