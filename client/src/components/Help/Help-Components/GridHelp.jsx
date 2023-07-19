import React from "react";

const GridHelp = ({ options }) => {
  return (
    <div className="d-flex flex-column gap-2 cursor-pointer text-start">
      {options.map((e) => (
        <span key={e.Id}>{e.Title}</span>
      ))}
    </div>
  );
};

export default GridHelp;
