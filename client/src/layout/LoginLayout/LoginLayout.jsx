import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navibar from "../../components/Navibar/Navibar";

const LoginLayout = ({ children }) => {
  return (
    <div className="vh-100">
      <Header />
      <Navibar />
      <br />
      {children}
      <br />
      <Footer />
    </div>
  );
};

export default LoginLayout;
