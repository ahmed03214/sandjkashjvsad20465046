/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

import Layout from "../../layout";
import Button from "../../components/Button";

import Head from "next/head";
import Link from "next/link";

import LoadingSpinner from "../../components/LoadingSpinner";
import getMainData from "../../utils/getMainData";

const Error = () => {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    getMainData().then((data) => setMainData(data));
  }, []);

  return (
    <>
      <Head>
        <title>يمناك - صفحه غير موجوده</title>
      </Head>

      {mainData ? (
        <Layout
          social={mainData.social}
          services={mainData.services}
          className="min-h-85vh flex-center"
        >
          <div className="backDrop back-index position-absolute w-100 h-100">
            <img
              draggable={false}
              className="w-100"
              src="/assets/404/backdrop-404.webp"
              alt=""
            />
          </div>

          <section className="text-center">
            <img className="mb-2" src="/assets/404/Break-404.webp" alt="" />
            <h2 className="mb-3">حدث خطأ</h2>
            <Link href="/">
              <Button className="px-3 py-2">حاول مره اخري</Button>
            </Link>
          </section>
        </Layout>
      ) : (
        <div className="w-100 vh-100 flex-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default Error;
