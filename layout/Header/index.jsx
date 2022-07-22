/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Link from "next/link";

import style from "../../styles/layout/header.module.scss";
import { useRouter } from "next/router";

const Taps = [
  {
    title: "الرئيسية",
    route: "/",
  },
  {
    title: "خدمتنا",
    sub: true,
    route: "/services",
  },
  {
    title: "من نحن",
    route: "/definition",
  },
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
];

const services = [
  {
    title: "خطط واستراتيجيات التسويق الرقمية",
    route: "/services/1",
  },
  {
    title: "كتابة محتوى تسويقي",
    sub: true,
    route: "/services/2",
  },
  {
    title: "إدارة منصات التواصل الإجتماعي",
    route: "/services/3",
  },
  {
    title: "تصميم تطبيقات الجوال",
    route: "/services/4",
  },
  {
    title: "تصميم متاجر إلكترونيه",
    route: "/services/5",
  },
  {
    title: "تحسين محركات البحث",
    route: "/services/6",
  },
  {
    title: "التصميم الجرافيكي",
    route: "/services/7",
  },
  {
    title: "تصميم مواقع",
    route: "/services/8",
  },
  {
    title: "اخر",
    route: "/services",
  },
];

const Header = ({ services }) => {
  const router = useRouter();

  // For Small Devices
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  // For get active tap
  const getCurrentTap = () => {
    // Split route and get [1] index for get primary route
    let route = router.pathname.split("/")[1];

    // Add "/" to route
    route = "/" + route;

    const tap = Taps.find((tap) => tap.route === route);

    return tap?.title || "";
  };

  return (
    <header className={`${style.header} py-3`}>
      <div className={`container ${style.container}`}>
        <div className="logo">
          <Link href="/">
            <img
              className="cu-pointer"
              width={150}
              src="/assets/logo.webp"
              alt="Error"
            />
          </Link>
        </div>

        {/* Navigate Pages */}
        <nav
          className={`flex-center ${style.nav} ${isOpen ? style.active : ""}`}
        >
          <button
            onClick={closeNavbar}
            type="button"
            aria-label="Close"
            className="btn-close d-md-none mt-3 mb-2 cu-pointer mx-4 me-auto d-block"
          />
          <ul className="d-flex flex-column flex-md-row list-unstyled gap-2 m-0 h-100">
            {Taps.map(({ title, route, sub }, idx) => (
              <li
                className={`${sub ? style.services : ""} ${
                  style.tapContainer
                } flex-center me-md-3 p-md-0 p-3`}
                key={idx}
              >
                <Link href={route}>
                  <p
                    className={`${style.tapNav} m-0 cu-pointer ${
                      getCurrentTap() === title ? style.activeTapNav : ""
                    }`}
                  >
                    {title}
                  </p>
                </Link>

                {sub && (
                  <article className={`${style.servicesList} border`}>
                    <ul>
                      {services.slice(0, 8).map(({ name, id }, idx) => (
                        <Link key={idx} href={`/services/${id}/${name}`}>
                          <li className="list-unstyled cu-pointer m-3">
                            {name}
                          </li>
                        </Link>
                      ))}
                      <Link href="/services">
                        <li className="list-unstyled cu-pointer m-3">اخر</li>
                      </Link>
                    </ul>
                  </article>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* // Navbar Backdrop */}
        {isOpen && (
          <div
            onClick={closeNavbar}
            className={`${style.navBackdrop} d-md-none`}
          />
        )}

        {/* Open Nav Bar In Small Devices button */}
        <div
          onClick={() => setIsOpen(true)}
          className={`${style.navbarToggler} navbar-light d-md-none me-auto`}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <p>{getCurrentTap()}</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
