import React from "react";

import style from "../../styles/contact-us-section.module.scss";
import Form from "./Form";

// mt = margin top => bootstrap
const ContactUsSection = ({
  initValue = "",
  className = "",
  mt = "5",
  header = true,
}) => {
  return (
    <section className={`mt-${mt} ${className} ${style.contactUsSection}`}>
      <div className="container">
        {header && (
          <header className="text-center pb-3">
            <h2>تواصل معنا</h2>
            <p className="text-muted small">
              ينما يستثمر الناس في ترقية أنماط الحياة نستثمر نحن في المقدرة على
              تحقيقه بينما يستثمر الناس في ترقية أنماط الحياة نستثمر نحن في
              المقدرة على تحقيقها
            </p>
          </header>
        )}

        <Form initValue={initValue} />
      </div>
    </section>
  );
};

export default ContactUsSection;
