import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../../../store/getProductSlice";
const Price = () => {
  const dispatch = useDispatch();
  const handleClickSidebar = (minPrice, maxPrice) => {
    dispatch(setSideBar({ min: minPrice, max: maxPrice }));
  };
  return (
    <div className="p-3 d-flex flex-column">
      <h4>Filter by Price</h4>
      <div
        className="mt-2 mt-4 cursor-pointer btn btn-light"
        onClick={() => handleClickSidebar(179, 329)}
      >
        <p className="ml-1 m-0">179 $ - 329 $</p>
      </div>
      <div
        className="mt-4 cursor-pointer btn btn-light"
        onClick={() => handleClickSidebar(329, 499)}
      >
        <p className="ml-1 m-0">329 $ - 499 $</p>
      </div>

      <div
        className="mt-2 mt-4 cursor-pointer btn btn-light"
        onClick={() => handleClickSidebar(499, Infinity)}
      >
        <p className="ml-1 m-0">Above 499 $</p>
      </div>
    </div>
  );
};

export default Price;
