/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import Head from "next/head";

import style from "../../styles/contact.module.scss";
import ContactUsSection from "../../components/ContactUsSection";
import getMainData from "../../utils/getMainData";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Map = dynamic(() => import("../../components/Map"), {
  loading: () => (
    <div className="w-100 h-100 flex-center bg-light">
      <div className="spinner-border mx-auto mt-5 d-block" role="status" />
    </div>
  ),
  ssr: false,
});

const Contact = ({ mainData }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>يمناك - تواصل معنا</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={`min-h-80vh ${style.contactUs}`}
      >
        <div className="backDrop back-index position-absolute w-100 h-100">
          <img
            draggable={false}
            className="w-100"
            src="/assets/thanks/backdrop-thanks.webp"
            alt=""
          />
        </div>

        <div className="container py-5">
          <header className={`pt-5 pb-4 mt-5 flex-center ${style.header}`}>
            <div className={`${style.info}`}>
              <h2>تواصل معنا</h2>
              <p className="text-muted">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أمرً هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>
            </div>

            <div className="img flex-center d-md-flex d-none">
              <img className="w-75" src="/assets/contact/header.webp" alt="" />
            </div>
          </header>

          <main className={`${style.main}`}>
            <div className={`${style.mapContainer} border`}>
              <div className={`${style.mapParent}`}>
                <Map coordinates={[30.009043710650083, 31.234041795569244]} />
              </div>
            </div>

            <ContactUsSection
              serviceName={router.query?.serviceName}
              mt="3"
              header={false}
            />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
