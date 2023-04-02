import React from "react";

import Navbar from "./SubComps/Navbar";
import Footer from "./SubComps/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
