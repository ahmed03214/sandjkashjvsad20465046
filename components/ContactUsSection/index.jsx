import React from "react";

import style from "../../styles/contact-us-section.module.scss";
import Form from "./Form";

// mt = margin top => bootstrap
const ContactUsSection = ({
  serviceName = "",
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
          </header>
        )}

        <Form serviceName={serviceName} />
      </div>
    </section>
  );
};

export default ContactUsSection;
