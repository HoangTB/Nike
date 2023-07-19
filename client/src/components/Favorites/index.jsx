import React, { useEffect } from "react";

const Favorites = () => {
  // useEffect(() => {
  //   document.title = "Favoriler | Nike Clone";
  // }, []);
  return (
    <div className="mt-4" style={{ minHeight: "445px" }}>
      <h1 className="">Favorites</h1>
      <div className="d-flex text-center justify-center mt-5">
        The favorited items will be saved here..
      </div>
    </div>
  );
};

export default Favorites;
