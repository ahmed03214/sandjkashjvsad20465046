/* eslint-disable @next/next/no-img-element */
import React from "react";

import Layout from "../../layout";
import Head from "next/head";

import style from "../../styles/definition.module.scss";
import IdeaCard from "../../components/IdeaCard";
import AdvantagesHow from "../../components/AdvantagesHow";

import getMainData from "../../utils/getMainData";

const ideaCardsData = [
  {
    title: "رؤيتنا",
    desc: "أن نكون رواد في مجال تصميم مواقع الإنترنت وتطويرها على مستوى منطقة الشرق الأوسط، نقدم مجموعة متكاملة من الخدمات التقنية الإبتكارية والحلول الجديدة، ينفذها ويشرف عليها الصفوة من المصممين والمبرمجين والمسوقين من أصحاب الخبرات العالية.",
    img: "/assets/how-are-we/ideas1.webp",
  },
  {
    title: "رسالتنا",
    desc: "تسخير التقنيات الحديثة لتعزيز حضور عملائنا على شبكة الإنترنت من خلال بيئة إبتكارية نلتزم فيها بتقديم كل ما هو جديد بسعر معقول وخدمة مميزة",
    img: "/assets/how-are-we/ideas2.webp",
  },
];

const advantages = [
  {
    title: "الإبتكار",
    desc: "نسعى دائما نحو إبتكار حلول جديدة لنكون رواد في مجالنا",
  },
  {
    title: "الإلتزام",
    desc: "نلتزم بتقديم كل ما هو جديد وفريد لنحقق نجاح عملائنا",
  },
  {
    title: "الشفافية",
    desc: "الشفافية في التعامل لكسب ثقة عملائنا وضمان حقوقهم",
  },
  {
    title: "العنايه بالعملاء",
    desc: "نحن نثق بأن العناية بعملائنا هو من أهم عوامل النجاح",
  },
];

const Definition = ({ mainData }) => {
  return (
    <>
      <Head>
        <title>يمناك - من نحن</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={`min-h-80vh ${style.definition}`}
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
          <header className={`pt-5 pb-4 mt-5 flex-center ${style.header}`}>
            <div className={`${style.info}`}>
              <h2>من نحن</h2>
              <p className="small text-muted">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أم ٌر هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>
            </div>

            <div className="img flex-center d-md-flex d-none">
              <img className="w-75" src="/assets/join/header.webp" alt="" />
            </div>
          </header>

          <main>
            <div className="ideas">
              {ideaCardsData.map(({ title, desc, img }, idx) => (
                <IdeaCard key={idx} title={title} desc={desc} img={img} />
              ))}
            </div>

            <div className="advantages">
              <h2 className="mb-2">قيمنا</h2>

              {advantages.map(({ title, desc }, idx) => (
                <AdvantagesHow
                  title={title}
                  desc={desc}
                  key={idx}
                  idx={idx + 1}
                />
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Definition;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
