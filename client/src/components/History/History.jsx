import React, { useEffect, useState } from "react";
import "./History.css";
import { HistoryAPI } from "../../api/History";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const History = () => {
  const [dataHistory, setDataHistory] = useState([]);

  const update = useSelector((state) => state.update);
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    HistoryAPI.getHistoryIdOrder(user.id).then((data) => {
      setDataHistory(data);
    });
  }, []);

  return (
    <div className="pb-5 form-history">
      <div className="container flex-column">
        <div className="row class-form">
          <div className="col-lg-12 p-5 bg-white rounded">
            {/* Shopping cart table */}
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Status</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataHistory &&
                    dataHistory?.map((e) => {
                      return (
                        <tr key={e.id}>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src={e.Product.image}
                                alt=""
                                width={300}
                                className="img-fluid rounded shadow-sm"
                              />
                              <div className="ml-3 d-inline-block align-middle p-3">
                                <h5 className="mb-0">
                                  {" "}
                                  <Link
                                    to={`/detail/${e.product_id}`}
                                    className="text-dark d-inline-block align-middle"
                                  >
                                    {e.Product.name}
                                  </Link>
                                </h5>
                                <span className="text-muted font-weight-normal font-italic d-block pt-2">
                                  Type: {e.Product.type}
                                </span>
                                <span className="text-muted font-weight-normal font-italic d-block pt-2">
                                  Size: {e.size_product}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle">
                            <strong>
                              ${" "}
                              {(e.Product.price * e.quantity).toLocaleString()}
                            </strong>
                          </td>
                          <td className="border-0 align-middle">
                            <strong>{e.quantity}</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <a href="#" className="text-dark">
                              <strong>
                                {e.status === 2
                                  ? "Processing"
                                  : e.status === 3
                                  ? "Out for Delivery"
                                  : e.status === 4
                                  ? "Delivered"
                                  : "Pending"}
                              </strong>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
