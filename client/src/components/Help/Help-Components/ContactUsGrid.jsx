import React from "react";

const ContactUsGrid = ({ options }) => {
  return (
    <div className="d-flex flex-column align-items-center gap-1">
      {options.map((e) => {
        return <img className="" src={e.Image} alt="" />;
      })}
      {options.map((f) => {
        return <span>{f.Title}</span>;
      })}
    </div>
  );
};

export default ContactUsGrid;
