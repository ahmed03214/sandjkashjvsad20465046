import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ToTopBtn from "../components/ToTopBtn";
import FloatingBtn from "../components/FloatingBtn";

const UserLayout = ({ children, className = "", social, services }) => {
  return (
    <>
      <Header services={services} />
      <main className={className}>
        {children}

        <ToTopBtn />
        <FloatingBtn />
      </main>
      <Footer social={social} />
    </>
  );
};

export default UserLayout;
