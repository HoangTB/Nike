import React from "react";
import ContactUs from "./Help-Components/ContactUs";
import HelpContainer from "./Help-Components/HelpContainer";
import Search from "./Help-Components/Search";

const Help = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3>GET HELP</h3>
      <Search />
      <HelpContainer />
      <ContactUs />
    </div>
  );
};

export default Help;
