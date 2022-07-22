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
  [
    {
      title: "الرئيسية",
      route: "/",
    },
    {
      title: "خدمتنا",
      route: "/services",
    },
    {
      title: "من نحن",
      route: "/definition",
    },
  ],
  [
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
    <footer className={style.footer + " pt-5"}>
      <div className="container">
        <div className="taps flex-between flex-column gap-md-0 gap-4 flex-md-row">
          <div className="logo w-75">
            <img width={160} src="/assets/footer/logo.webp" alt="" />

            <div className="socialTaps mt-4 d-flex gap-2">
              {socialTaps.map(({ Icon, link }, idx) => (
                <a
                  target="_blanc"
                  href={link}
                  key={idx}
                  className={`icon ${style.footerTap} text-light me-1`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="taps flex-between w-100">
            {taps.map((list, idx) => (
              <ul key={idx} className={`tap${idx + 1}`}>
                {list.map(({ title, route }, idx) => (
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

        <p className="text-light text-center m-0 small pb-3">
          جميع الحقوق محفوظه لدي يمناك 2022©
        </p>
      </div>
    </footer>
  );
};

export default Footer;
