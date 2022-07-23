/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";

import Layout from "../../layout";
import Head from "next/head";

import style from "../../styles/blog.module.scss";
import ArticleThumbnail from "../../components/ArticleThumbnail";
import Pagination from "../../components/Pagination";
import LoadingSpinner from "../../components/LoadingSpinner";
import getMainData from "../../utils/getMainData";
import axios from "axios";

const Blog = ({ mainData }) => {
  const [articles, setArticles] = useState([]);

  const getDataByPage = useCallback(async (page) => {
    const { data: articles } = await axios(`/api/get/getArticlesByNum/${page}`);

    setArticles(articles);
  }, []);

  useEffect(() => {
    getDataByPage(1);
  }, [getDataByPage]);

  return (
    <>
      <Head>
        <title>يمناك - المدونه</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={`min-h-80vh ${style.blog}`}
      >
        <div className="backDrop back-index position-absolute w-100 h-100">
          <img
            draggable={false}
            className="w-100"
            src="/assets/blog/backdrop-blog.webp"
            alt=""
          />
        </div>

        <div className="container py-5">
          <header className={`pt-5 pb-4 mt-5 flex-center ${style.header}`}>
            <div className={`${style.info}`}>
              <h2 className="font-bold">المدونة</h2>
              <p className="text-muted">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أم ٌر هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>
            </div>

            <div className="img flex-center d-md-flex d-none">
              <img className="w-75" src="/assets/blog/header.webp" alt="" />
            </div>
          </header>

          <main>
            <div className="articles-container row min-h-50vh">
              {!articles?.data?.length ? (
                <p className="mt-4">
                  <LoadingSpinner />
                </p>
              ) : (
                articles?.data?.map(
                  ({ title, id, desc, img, hash, date }, idx) => (
                    <div
                      key={idx}
                      className="col-12 col-md-6 col-lg-4 py-2 px-3"
                    >
                      <ArticleThumbnail
                        idx={idx + 1}
                        id={id}
                        title={title}
                        desc={desc || "no description"}
                        img={img}
                        hash={hash}
                        date={date}
                      />
                    </div>
                  )
                )
              )}
            </div>

            <Pagination
              getDataByPage={getDataByPage}
              pagePerRow={3}
              lastPage={articles?.pages}
              className="mt-4"
            />
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
