import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navibar from "../../components/Navibar/Navibar";
import SwiperNotification from "../../components/SwiperNotification/SwiperNotification";

const DefaultLayout = ({ children, onFilteredOptionsApp }) => {
  const onFilteredOptions = async (filteredOptions) => {
    try {
      await onFilteredOptionsApp(filteredOptions);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <Navibar onFilteredOptions={onFilteredOptions} />
      <SwiperNotification />
      <br />
      {children}
      <br />
      <Footer />
    </>
  );
};

export default DefaultLayout;
