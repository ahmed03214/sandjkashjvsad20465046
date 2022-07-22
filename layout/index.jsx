import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children, className = "", social, services }) => {
  return (
    <>
      <Header services={services} />
      <main className={className}>{children}</main>
      <Footer social={social} />
    </>
  );
};

export default UserLayout;
