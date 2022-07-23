/* eslint-disable @next/next/no-img-element */
import React from "react";

import Button from "../Button";
import style from "../../styles/services.module.scss";

const MianCard = ({ body, title, img, bottomImg = false, bg }) => {
  return (
    <div
      className={`${style.bottomHeader}  ${
        !bg ? style.bgWhite : ""
      } position-relative rounded shadow py-4 mt-4`}
    >
      {bg && (
        <div className="backdrop top-0 back-index position-absolute w-100 h-100">
          <img src={bg} alt="" className="w-100 h-100" />
        </div>
      )}

      <div className="container">
        <div className="flex-between align-items-center">
          <div
            className={`d-flex w-75 align-items-start gap-3 ${style.infoContainer}`}
          >
            <div
              style={{ width: "70px" }}
              className={`${style.marker} flex-end`}
            >
              <img
                className="w-100 rounded-circle"
                src={`/assets/how-are-we/advantages-logo/icon${
                  bg ? "5" : "2"
                }.webp`}
                alt=""
              />
            </div>

            <div className={`${style.info}`}>
              <p className="fs-3 mb-1">{title}</p>
              <div
                className={`mb-4 ${style.linesOfBody}`}
                dangerouslySetInnerHTML={{
                  __html: body,
                }}
              />
              <Button requestService={title} className="px-3 py-2 mt-2">
                اطلب الخدمة الان
              </Button>
            </div>
          </div>

          <div className="img flex-center d-md-flex d-none">
            <img
              style={bottomImg ? { transform: "translateY(50px)" } : {}}
              className="w-75"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MianCard;
