/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../../layout";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

import style from "../../../styles/article.module.scss";
import Head from "next/head";

//  social =>
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "next-share";
import getMainData from "../../../utils/getMainData";

import axios from "axios";

const API = process.env.NEXT_PUBLIC_LOCAL_URL;
const PUBLIC_API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const Article = ({ mainData, article }) => {
  const getLink = () => {
    if (typeof window !== "undefined") {
      // browser code
      return window.location.href;
    }

    return "";
  };

  return (
    <>
      <Head>
        <title>يمناك - {article.title}</title>
        <meta name="keywords" content={article.keywords} />
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={style.article}
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
          <header className={`pt-4 pb-4 ${style.header}`}>
            <div
              className={`${style.back} flex-center justify-content-start gap-1`}
            >
              <Link href="/blog">
                <p className="m-0">
                  <GrFormNextLink className="cu-pointer" size={26} />
                </p>
              </Link>
              <span className="text-main">تفاصيل الخبر</span> &lt;{" "}
              <span>المدونة</span>
            </div>

            <div className="bottom mt-4">
              <p className="display-6 mb-1">{article.title}</p>

              <p
                dangerouslySetInnerHTML={{ __html: article.article }}
                className={`text-muted mb-4 ${style.lineOfBody}`}
              />
              <p className={`${style.date} small pt-2`}>{article.date}</p>
            </div>
          </header>

          <main>
            <article className={`${style.body} border rounded`}>
              <div className={`${style.img} mb-4`}>
                <img
                  draggable={false}
                  className="w-100"
                  src={`${PUBLIC_API}/${article.image}`}
                  alt={article.title}
                />
              </div>

              <div className="container">
                <p
                  style={{ backgroundColor: "#B84A85" }}
                  className={`${style.hash} rounded px-3 py-1 mb-4`}
                >
                  {article.hash}
                </p>

                <article
                  className="mb-3 px-3"
                  dangerouslySetInnerHTML={{ __html: article.article }}
                />
              </div>
            </article>

            <footer className="flex-between align-items-center px-2 pt-3">
              <p className="fw-bold m-0">شارك الخبر</p>
              <article className={`${style.shareBox} flex-center`}>
                <ul className="list-unstyled m-0 w-fit flex-center gap-3 px-2 py-1 rounded">
                  <li>
                    <LinkedinShareButton
                      url={getLink()}
                      title={`${article.title}\n`}
                    >
                      <FaLinkedinIn size={20} />
                    </LinkedinShareButton>
                  </li>
                  <li>
                    <TwitterShareButton
                      url={getLink()}
                      title={`${article.title}\n`}
                    >
                      <AiOutlineTwitter size={20} />
                    </TwitterShareButton>
                  </li>
                  <li>
                    <FacebookShareButton
                      quote={`${article.title}\n`}
                      url={getLink()}
                    >
                      <AiFillFacebook size={20} />
                    </FacebookShareButton>
                  </li>
                  <li>
                    <WhatsappShareButton
                      url={getLink()}
                      title={`${article.title}\n`}
                    >
                      <FaWhatsapp size={20} />
                    </WhatsappShareButton>
                  </li>
                </ul>
              </article>
            </footer>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Article;

export const getServerSideProps = async ({ params }) => {
  const { id, title } = params;

  const { data: article } = await axios(`${API}/api/get/getArticleById/${id}`);

  if (article.code != 200) {
    return {
      redirect: {
        permanent: false,
        destination: `/404`,
      },
    };
  }

  const validTitle = article.data.title.toString().replaceAll(" ", "+");

  if (title != validTitle) {
    return {
      redirect: {
        permanent: false,
        destination: `/blog/${id}/${encodeURI(validTitle)}`,
      },
    };
  }

  const data = await getMainData();

  return {
    props: {
      mainData: data,
      article: article.data,
    },
  };
};
