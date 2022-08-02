/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Layout from "../../layout";
import Head from "next/head";
import Button from "../../components/Button";

import style from "../../styles/join.module.scss";
import formStyle from "../../styles/contact-us-section.module.scss";
import getMainData from "../../utils/getMainData";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import { useRouter } from "next/router";

const API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const MAX_FILE_SIZE = "3150000"; // 3MB

const schema = yup.object({
  name: yup.string().required("يرجي مليْ كل الحقول"),
  email: yup
    .string()
    .email("يرجي ادخال ايميل صالح")
    .required("يرجي مليْ كل الحقول"),
  phone: yup.string().required("يرجي مليْ كل الحقول"),
  specialty: yup.string().required("يرجي مليْ كل الحقول"),
  notes: yup.string().optional(),
  ata: yup
    .mixed()
    .test({
      message: `يرجي ادخال سيرة ذاتيه`,
      test: (file) => {
        return file[0];
      },
    })
    .test({
      message: `حجم الملف كبير جدا`,
      test: (file) => {
        const isValid = file[0]?.size < +MAX_FILE_SIZE;

        return isValid;
      },
    }),
});

const Join = ({ mainData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const recaptchaRef = React.createRef();
  const router = useRouter();

  const [recaptcha, setRecaptcha] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(false);

  const sendRequest = async (data) => {
    if (!recaptcha) {
      return setError("recaptcha", {
        type: "recaptcha",
        message: "يرجي حل الكابتشا للمتابعه",
      });
    }

    data.ata = data.ata[0];

    const formData = new FormData();

    Object.keys(data).map((key) => {
      formData.append(key, data[key]);
    });

    setIsRequestPending(true);
    await axios
      .post(`${API}/joinus.php`, formData)
      .then(({ data }) => {
        if (data.code === 200) {
          setIsRequestPending(false);

          return router.push("/thanks");
        }

        recaptchaRef.current?.reset();
        setIsRequestPending(false);
        Swal.fire("فشل", data.msg || data.message, "error");
      })
      .catch(() => {
        recaptchaRef.current?.reset();
        setIsRequestPending(false);

        Swal.fire("فشل", "حدث خطا غير معروف", "error");
      });
  };

  return (
    <>
      <Head>
        <title>يمناك - انضم الينا</title>
      </Head>

      <Layout
        social={mainData.social}
        services={mainData.services}
        className={`min-h-80vh ${style.jointUs}`}
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
              <h2>انضم الينا</h2>
              <p className="text-muted">
                لأننا نؤمن أن وجود إستراتيجية تسويقية صحيحة أمرً هام، إذ من
                خلالها يمكن رسم خريطة الوصول إلى تحقيق النجاح وإزدهار الأعمال
              </p>
            </div>

            <div className="img flex-center d-md-flex d-none">
              <img className="w-75" src="/assets/join/header.webp" alt="" />
            </div>
          </header>

          <main className={`${style.main}`}>
            <div className={`${style.formContainer}`}>
              <form
                onSubmit={handleSubmit(sendRequest)}
                className={`${formStyle.form} border p-4`}
              >
                <div className="mb-3 flex-column flex-md-row flex-between gap-3">
                  <input
                    className="border m-auto m-md-0"
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    {...register("name")}
                  />
                  <input
                    className="border m-auto m-md-0"
                    type="text"
                    name="phone"
                    placeholder="رقم الهاتف"
                    {...register("phone")}
                  />
                </div>

                <div className="flex-column flex-md-row flex-between gap-3">
                  <input
                    className="border m-auto m-md-0"
                    type="email"
                    name="email"
                    placeholder="البريد الالكتروني"
                    {...register("email")}
                  />
                  <input
                    className="border m-auto m-md-0"
                    type="text"
                    name="specialty"
                    placeholder="التخصص"
                    {...register("specialty")}
                  />
                </div>

                <textarea
                  className="border mt-3"
                  name="notes"
                  placeholder="ملاحظات"
                  {...register("notes")}
                />

                <div className="resume-corner">
                  <label
                    htmlFor="resume"
                    className="cu-pointer w-fit mt-4 mb-3 text-center m-auto d-block"
                  >
                    <img src="/assets/join/upload.webp" alt="" />
                    <p className="m-0 mt-3">ارفق السيرة الذاتية</p>
                    <p className="small">{watch("ata")?.[0]?.name}</p>
                  </label>

                  <input
                    hidden
                    type="file"
                    id="resume"
                    accept="application/pdf"
                    {...register("ata")}
                  />
                </div>

                <div className="recaptcha d-block mx-auto my-4 w-fit">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(e) => setRecaptcha(e)}
                  />
                </div>

                {/* First error message */}
                <p className="error fw-bold mt-2 px-2 fs-5 text-danger">
                  {errors[Object.keys(errors)[0]]?.message}
                </p>

                <Button
                  disabled={isRequestPending}
                  className="px-4 py-2 d-block m-auto"
                >
                  {isRequestPending ? "جاري التحميل..." : "ارسال"}
                </Button>
              </form>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Join;

export const getServerSideProps = async () => {
  const data = await getMainData();

  return {
    props: {
      mainData: data,
    },
  };
};
