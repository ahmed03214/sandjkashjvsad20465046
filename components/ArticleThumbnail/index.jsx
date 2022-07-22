/* eslint-disable @next/next/no-img-element */
import React from "react";

import style from "../../styles/article.module.scss";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_PUBLIC_URL;

const ArticleThumbnail = ({ idx, id, title, desc, img, hash, date }) => {
  const getHashColor = () => {
    let result = "";

    switch (idx) {
      case 1:
        result = "#B84A85";
        break;

      case 2:
        result = "#4A73CB";
        break;

      case 3:
        result = "#3DBEE6";
        break;

      case 4:
        result = "#B84A85";
        break;

      case 5:
        result = "#4A73CB";
        break;

      case 6:
        result = "#3DBEE6";
        break;

      default:
        result = "#000";
    }

    return result;
  };

  const validTitle = (name) => name.toString().replaceAll(" ", "+");

  return (
    <Link href={`blog/${id}/${validTitle(title)}`}>
      <article className={`${style.articleThumbnail} border w-100 bg-lighter`}>
        <div className={`${style.img} h-50 mb-3 flex-center position-relative`}>
          <img className="w-100" src={`${API}/${img}`} alt="" />
          <div
            style={{ backgroundColor: getHashColor() }}
            className={`${style.hash} rounded position-absolute bottom-0 end-0`}
          >
            <p className="text-light m-0 py-1 px-2">{hash}</p>
          </div>
        </div>

        <footer className="px-2">
          <p className="title fw-bold m-0 text-cut">{title}</p>

          <p className={`${style.desc} small text-muted`}>
            {/* Get description without html tags */}
            {desc.replace(/<\/?[^>]+(>|$)/g, " ").replace(/(&)[a-z]+;/g, " ")}
          </p>

          <div className="date">
            <p className={`small ${style.date}`}>{date}</p>
          </div>
        </footer>
      </article>
    </Link>
  );
};

export default ArticleThumbnail;
