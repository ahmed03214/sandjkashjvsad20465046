import React, { useState } from "react";
import axios from "axios";

import Button from "../Button";
import style from "../../styles/contact-us-section.module.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string().required("يرجي مليْ كل الحقول"),
  email: yup
    .string()
    .email("يرجي ادخال ايميل صالح")
    .required("يرجي مليْ كل الحقول"),
  topic: yup.string().required("يرجي مليْ كل الحقول"),
  message: yup.string().required("يرجي مليْ كل الحقول"),
  phone: yup.string().required("يرجي مليْ كل الحقول"),
});

const Form = ({ initValue = "" }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const recaptchaRef = React.createRef();

  const [recaptcha, setRecaptcha] = useState(false);

  const sendMessage = (data) => {
    if (!recaptcha) {
      return setError("recaptcha", {
        type: "recaptcha",
        message: "يرجي حل الكابتشا للمتابعه",
      });
    }

    axios
      .post("/api/post/contactUs", data)
      .then(({ data }) => {
        if (data.code === 200) {
          return router.push("/thanks");
        }

        Swal.fire("فشل", data.msg || data.message, "error");
      })
      .catch(() => {
        Swal.fire("فشل", "حدث خطا غير معروف", "error");
      });

    recaptchaRef.current.reset();
    setRecaptcha(false);
  };

  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className={`${style.form} border p-4`}
    >
      <div className="flex-column flex-md-row flex-between gap-3 mb-3">
        <input
          className="border m-auto m-md-0"
          type="text"
          name="name"
          {...register("name")}
          placeholder="الاسم"
        />
        <input
          className="border m-auto m-md-0"
          type="email"
          name="email"
          {...register("email")}
          placeholder="البريد الالكتروني"
        />
      </div>

      <div className="flex-column flex-md-row flex-between gap-3">
        <input
          className="border m-auto m-md-0"
          type="text"
          name="topic"
          {...register("topic")}
          placeholder="الموضوع"
        />

        <input
          className="border m-auto m-md-0"
          type="text"
          name="phone"
          {...register("phone")}
          placeholder="رقم الهاتف"
        />
      </div>
      <textarea
        className="border mt-3"
        name="message"
        {...register("message")}
        placeholder="نص الرسالة"
        defaultValue={initValue}
      />

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
      <Button className="px-4 py-2 d-block me-auto mt-2">ارسال</Button>
    </form>
  );
};

export default Form;
