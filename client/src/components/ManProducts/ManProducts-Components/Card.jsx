import React from "react";
import { Link } from "react-router-dom";
import "../../ManProducts/Products.css";
import { useSelector } from "react-redux";
const Card = ({ options }) => {
  const sidebarValue = useSelector((state) => state.sidebar);

  const dataFilterPrice = options?.filter(
    (o) =>
      (sidebarValue.min === undefined || o.price >= sidebarValue.min) &&
      (sidebarValue.max === undefined || o.price <= sidebarValue.max)
  );

  const itemsToPrice =
    dataFilterPrice && dataFilterPrice.length > 0 ? dataFilterPrice : options;
  return (
    <>
      {itemsToPrice &&
        itemsToPrice !== "" &&
        itemsToPrice.map((e) => {
          return (
            <div className="cursor-pointer position-relative" key={e.id}>
              <Link
                class="fa-solid fa-circle-info detail-product-detail"
                to={`/detail/${e.id}`}
              />
              <img
                className="mb-2 image-add"
                src={e.image}
                alt="..."
                style={{ width: "500px" }}
              />
              <div className="d-flex flex-column">
                {e?.new === 1 ? (
                  <span className="text-warning">New Arrival</span>
                ) : (
                  ""
                )}
                <span>{e.name}</span>
                <span className="text-muted">{e.type}</span>
                <span className="mt-2 ">{e.price} $</span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
