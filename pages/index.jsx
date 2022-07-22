/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";

import style from "../styles/landing.module.scss";

import { useRouter } from "next/router";

import Layout from "../layout";
import BackDrop from "../layout/BackDrop";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import Head from "next/head";
import AdvantageCard from "../components/AdvantageCard";
import CustomersOpinions from "../components/CustomersOpinions";
import ContactUsSection from "../components/ContactUsSection";
import ToTopBtn from "../components/ToTopBtn";

import getMainData from "../utils/getMainData";

// AOS
import "aos/dist/aos.css";
import AOS from "aos";

const advantages = [
  {
    title: "ماذا سنقدم لك في يمناك",
    desc: "لدينا فريق عمل من مصممين محترفين، الذين لا نستطيع إلا تسميتهم بالفنانين المبدعين، فنخرج لك بتصاميم لافتة تبقي في ذهن العميل بل وتستمر من خلالهم",
  },
  {
    title: "ماذا سنقدم لك في يمناك",
    desc: "تصاميم إبداعية تناسب أعمالكم وتجذب جمهوركم",
  },
  {
    title: "ماذا سنقدم لك في يمناك",
    desc: "تتعامل يُمناك مع عملية إدارة منصات التواصل الإجتماعي من خلال منهجية علمية منظمة. تم إختبار هذا النهج عدة مرات في العديد من المواقع وحققت نتائج إيجابية.",
  },
];

const advantages2 = [
  {
    title: "موقعك سيظهر قبل مواقع منافسيك",
  },
  {
    title:
      "نقوم بتهيئة موقعك لمحركات البحث بالتعديلات البرمجية الخاضعة للمعايير القياسية لـمحركات البحث العالمية",
  },
  {
    title: "نعمل على إشهار وتسويق موقعك للوصول لأكبر عدد من العملاء",
  },
  {
    title:
      "٩٣% من حصة السوق تمتلكها محركات بحث جوجل، مما يجعلها تتصدر قائمة الأهمية عن غيرها، فخدمات تهيئة موقعك لمحركات البحث تستهدف تحسين ظهور موقعك في جوجل أولاً.",
  },
];

const opinion = [
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
  { avatar: "/assets/avatar.png", name: "Ahmed", opinion: "حلو جدا 🔥🐱‍🏍" },
];

const Landing = ({ mainData }) => {
  const router = useRouter();
  const secoundSection = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToSecoundSection = () => {
    secoundSection.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>يمناك - الرئيسية</title>
        <meta
          property="og:description"
          content="نحن شركه متخصصه في انتاج المحتوي الرقمي وتنميته"
        />
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={style.LandingPage}
      >
        <section className={`${style.mainSection} mb-5 pb-5 flex-center`}>
          <BackDrop className={style.backDropImgs}>
            <img draggable={false} src="/assets/landing/Oval2.webp" alt="" />
            <img draggable={false} src="/assets/landing/Oval.webp" alt="" />
          </BackDrop>
          <main className="container offset-top">
            <div className={`${style.mianNet} flex-center`}>
              <div
                data-aos="fade-left"
                data-aos-duration="800"
                className={`${style.info}`}
              >
                <h2>
                  نمنح المشاريع الناشئة والمشاريع المتعثرة حياة طويلة وأملا
                  جديدا ونموا متواصلا
                </h2>
                <p className="text-muted">
                  لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أم ٌر هام، إذ من
                  خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
                </p>
                <Button onClick={scrollToSecoundSection} className="px-4 py-2">
                  ابدء الان
                </Button>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                className={`${style.img} flex-center`}
              >
                <img
                  draggable={false}
                  src="/assets/landing/startup.webp"
                  alt=""
                />
              </div>
            </div>
          </main>
        </section>

        <section ref={secoundSection} className={style.servicesSection}>
          <div className={style.backDrop}>
            <img
              className={style.whiteCurve}
              src="/assets/landing/white-curve.webp"
              alt=""
            />

            <img
              src="/assets/landing/back-drop-logo.webp"
              className={`${style.logoIcon}`}
              alt=""
            />
          </div>
          <main
            className={`${style.main} container py-5 h-100 flex-between align-items-center`}
          >
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className={`info text-light`}
            >
              <h2 className="display-5">خدماتنا</h2>
              <p className="w-md-75">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أم ٌر هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>

              <Button
                onClick={() => router.push("/services")}
                className="px-4 py-2 mb-4"
              >
                شاهد الكل
              </Button>
            </div>

            <div className={`${style.serviceCardNet}`}>
              {mainData.services.slice(0, 4).map((service, idx) => (
                <ServiceCard
                  key={idx}
                  id={service.id}
                  name={service.name}
                  desc={service.des}
                  dataAos={idx <= 1 ? "flip-left" : "flip-right"}
                  dataAosDuration="500"
                />
              ))}
            </div>
          </main>
        </section>

        <section className={style.advantagesSection + " mt-5"}>
          <div className="container">
            <header className="text-center my-4">
              <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                ماذا سنقدم لك في يمناك
              </h2>
              <p
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="500"
                className="small text-muted px-3"
              >
                لدينا فريق عمل من مصممين محترفين، الذين لا نستطيع إلا تسميتهم
                بالفنانين المبدعين، فنخرج لك بتصاميم لافتة تبقي في ذهن العميل بل
                وتستمر من خلالهم .ليعلم بها الجميع، فنوفر لك تصميمات إحترافية
                وبتكلفة مالية مناسبة لك لكي تحظى بتصاميم جذابة وبوقت قياسي
              </p>
            </header>

            <div
              className={
                style.advantages + " flex-start flex-column flex-md-row"
              }
            >
              <div
                data-aos="flip-left"
                data-aos-duration="800"
                className={style.img}
              >
                <img src="/assets/landing/advantages-icon.webp" alt="" />
              </div>

              <ul className="mt-4">
                {advantages.map((advantage, idx) => (
                  <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="500"
                    data-aos-offset="1500"
                    data-aos-delay={`${400 * (idx + 1)}`}
                    key={idx}
                  >
                    <li className="fs-4">{advantage.title}</li>
                    <p className={`small text-muted ${style.desc}`}>
                      {advantage.desc}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={style.advantagesSection2 + " mt-3"}>
          <img
            className={style.whiteCurve}
            src="/assets/landing/white-curve.webp"
            alt=""
          />
          <div className="container pt-5">
            <header className="mb-4">
              <h2
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="text-light text-center fs-1 mt-2"
              >
                <span className="d-md-block">
                  اجعل أعمالك تتصدر نتائج متصفح
                </span>
                <span> البحث جوجل</span>
              </h2>
            </header>

            <main>
              <div className={style.mainNet + " flex-start d-block d-md-flex"}>
                <div
                  data-aos-offset="400"
                  data-aos-duration="500"
                  data-aos="flip-left"
                  className={style.img}
                >
                  <img src="/assets/landing/advantages-2-icon.webp" alt="" />
                </div>

                <div
                  data-aos="flip-right"
                  data-aos-offset="500"
                  className="advantages d-block m-auto mt-5 max-w-500"
                >
                  {advantages2.map((advantage, idx) => (
                    <AdvantageCard
                      animation={advantage.animation}
                      className={`mb-3`}
                      title={advantage.title}
                      key={idx}
                      idx={idx + 1}
                    />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </section>

        <section className={`${style.customersOpinions}`}>
          <div className={style.backDrop}>
            <img
              draggable={false}
              src="/assets/landing/opanion-backdrop.png"
              alt=""
            />
          </div>

          <div className="container pt-5 pb-5">
            <header className="text-center mb-5 pb-5">
              <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                آراء عملائنا
              </h2>
              <p
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="2700"
                data-aos-duration="500"
                className="text-muted small"
              >
                ينما يستثمر الناس في ترقية أنماط الحياة نستثمر نحن في المقدرة
                على تحقيقها بينما يستثمر الناس في ترقية أنماط الحياة نستثمر نحن
                في المقدرة على تحقيقها
              </p>
            </header>

            <main
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="2900"
              data-aos-duration="500"
              className="mb-5 pb-5"
            >
              <CustomersOpinions opinions={opinion} />
            </main>
          </div>
        </section>

        <ContactUsSection />

        <ToTopBtn />
      </Layout>
    </>
  );
};

export default Landing;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
