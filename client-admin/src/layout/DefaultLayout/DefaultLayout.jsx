import React, { Children } from "react";
import SliceBar from "../../components/SliceBar/SliceBar";
import Footer from "../../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <SliceBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
