import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
