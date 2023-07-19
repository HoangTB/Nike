import React from "react";
import SliceBar from "../../components/SliceBar/SliceBar";

const DefaultLayout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <SliceBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
