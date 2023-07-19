import React from "react";
import "../Help.css";

const Search = () => {
  return (
    <div className="relative">
      <input
        className="search-input"
        placeholder="How can we assist you?"
        type="text"
      />
    </div>
  );
};

export default Search;
