/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import Button from "../../components/Button";

import Head from "next/head";
import Link from "next/link";
import getMainData from "../../utils/getMainData";

const Thanks = ({ mainData }) => {
  return (
    <>
      <Head>
        <title>يمناك - شكرا لك !</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className="min-h-85vh flex-center"
      >
        <div className="backDrop back-index position-absolute w-100 h-100">
          <img
            draggable={false}
            className="w-100"
            src="/assets/thanks/backdrop-thanks.webp"
            alt=""
          />
        </div>

        <section className="text-center">
          <img
            className="mb-3 w-75"
            src="/assets/thanks/like-icon.webp"
            alt=""
          />
          <h2>شكرا لك !</h2>
          <p className="text-muted m-0 mb-3">تم الارسال بنجاح</p>
          <Link href="/">
            <Button className="px-3 py-2">العودة للرئيسية</Button>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default Thanks;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
