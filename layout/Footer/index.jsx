/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import style from "../../styles/layout/footer.module.scss";
import Link from "next/link";

//  Icons =>
import { FaSnapchatGhost, FaLinkedinIn } from "react-icons/fa";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const taps = [
  {
    title: "تصفح",
    taps: [
      {
        title: "الرئيسية",
        route: "/",
      },
      {
        title: "خدماتنا",
        route: "/services",
      },
      {
        title: "من نحن",
        route: "/definition",
      },
    ],
  },

  {
    title: "تصفح",
    taps: [
      {
        title: "المدونة",
        route: "/blog",
      },
      {
        title: "تواصل معنا",
        route: "/contact",
      },
      {
        title: "انضم الينا",
        route: "/join",
      },
    ],
  },

  {
    title: "المزيد",
    taps: [
      {
        title: "شروط الاستخدام",
        route: "/terms-of-use",
      },
      {
        title: "سياسة الخصوصية",
        route: "/privacy-policy",
      },
    ],
  },
];

const Footer = ({ social }) => {
  const [socialTaps] = useState([
    { Icon: AiFillYoutube, link: social?.youtube?.link || "" },
    { Icon: FaLinkedinIn, link: social?.linkedin?.link || "" },
    { Icon: AiOutlineTwitter, link: social?.twitter?.link || "" },
    { Icon: AiFillFacebook, link: social?.facebook?.link || "" },
    { Icon: AiOutlineInstagram, link: social?.instagram?.link || "" },
    { Icon: FaSnapchatGhost, link: social?.snapshat?.link || "" },
  ]);

  return (
    <footer className={style.footer}>
      <div className={style.waterMark}>
        <img src="/assets/footer/back-drop-logo.webp" alt="" />
      </div>

      <div className={style.backDrop}>
        <div className={style.mainColor}></div>
      </div>

      <div className={`container ${style.mainFooter}`}>
        <div className="taps flex-between flex-column gap-md-0 gap-4 flex-md-row">
          <div className="logo w-75">
            <img width={220} src="/assets/footer/logo.webp" alt="" />

            <div className="socialTaps mb-3 mt-4 d-flex gap-2">
              {socialTaps.map(({ Icon, link }, idx) => (
                <a
                  target="_blanc"
                  href={link}
                  key={idx}
                  className={`icon ${style.footerTap} text-light me-1`}
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          <div className="taps flex-wrap flex-between w-100">
            {taps.map((list, idx) => (
              <ul key={idx} className={`tap${idx + 1}`}>
                <p className="w-fit me-3 text-light">{list.title}</p>

                {list.taps.map(({ title, route }, idx) => (
                  <Link key={idx} href={route}>
                    <li
                      className={`${style.footerTap} w-fit list-unstyled me-3 cu-pointer mb-3 text-light`}
                    >
                      {title}
                    </li>
                  </Link>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className="text-light text-center m-0 mt-5 pb-3">
          جميع الحقوق محفوظه لدى يمناك 2022©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
