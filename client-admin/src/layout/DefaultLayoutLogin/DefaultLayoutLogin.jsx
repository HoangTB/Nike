import React from "react";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DefaultLayoutLogin = () => {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default DefaultLayoutLogin;
