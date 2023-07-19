import React, { useEffect, useState } from "react";
import "./Detail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Products } from "../../api/Product";
import { OrderDetail } from "../../api/OrderDetail";
import { Order } from "../../api/Order";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../store/UpdateProSlice";
import { format } from "date-fns";
const Detail = () => {
  const location = useLocation();
  const [user, setUser] = useState("");
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [selectSizes, setSelectedSizes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = new Date();
  const dataToday = format(today, "yyyy-MM-dd HH:mm:ss");
  const update = useSelector((state) => state.update);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location.pathname, update]);

  useEffect(() => {
    Products.getProductById(params.id).then((data) => setProducts(data));
  }, [location.pathname, update]);
  const handleSizeClick = (e) => {
    setSelectedSizes("");
    const size = e.target.innerHTML;
    setSelectedSizes((prevSizes) => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter((prevSize) => prevSize !== size);
      } else {
        return [...prevSizes, size];
      }
    });
  };
  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please Login !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      const orderValue = {
        order_date: dataToday,
        user_id: user.id,
      };

      Order.postOrder(orderValue);

      const orderResponse = await Order.getOrderById(user.id);
      console.log("OK");
      if (!selectSizes[0]) {
        toast.error("Please choose size !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const data = await OrderDetail.getOrderDetailById(user.id);

        const checkProduct = data.findIndex(
          (item) => item.product_id == params.id
        );

        if (checkProduct !== -1) {
          const quantityValue = {
            quantity: data[checkProduct].quantity
              ? data[checkProduct].quantity + 1
              : 1,
            size_product: selectSizes[0],
          };
          OrderDetail.updateQuantity(params.id, quantityValue);
        } else {
          const orderDetailValue = {
            product_id: params.id,
            order_id: orderResponse[0].id,
            size_product: selectSizes[0],
          };
          OrderDetail.postOrderDetail(orderDetailValue).then(() =>
            dispatch(updateState())
          );
        }
      }
    }
  };

  return (
    <div className="container1 forms">
      <ToastContainer />
      <div className="container">
        {products &&
          products.map((product) => {
            return (
              <div className="row list-image gap-6" key={product.id}>
                <div className="col-8">
                  <div className="row row-cols-1 row-cols-md-2 g-1 listimage-detail">
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_1}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_2}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_3}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img
                          src={product.Images[0].image_4}
                          className="card-img-top image-zoom"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 content-right-detail">
                  <div className="content-detail">
                    <h3 className="text-danger">{product.name}</h3>
                    <h5 className="fst-italic pb-2">{product.type}</h5>
                    <h5>{product.price} $</h5>
                  </div>
                  <table className="table-size">
                    <thead>
                      <tr>
                        <th colSpan={3} className="pb-2">
                          Select Size
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 35.5") ? "selected" : "td"
                          }
                        >
                          EU 35.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 36") ? "selected" : "td"
                          }
                        >
                          EU 36
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 36.5") ? "selected" : "td"
                          }
                        >
                          EU 36.5
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 37") ? "selected" : "td"
                          }
                        >
                          EU 37
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 37.5") ? "selected" : "td"
                          }
                        >
                          EU 37.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 38") ? "selected" : "td"
                          }
                        >
                          EU 38
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 39") ? "selected" : "td"
                          }
                        >
                          EU 39
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 39.5") ? "selected" : "td"
                          }
                        >
                          EU 39.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 40") ? "selected" : "td"
                          }
                        >
                          EU 40
                        </td>
                      </tr>
                      <tr>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 40.5") ? "selected" : "td"
                          }
                        >
                          EU 40.5
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 41") ? "selected" : "td"
                          }
                        >
                          EU 41
                        </td>
                        <td
                          onClick={handleSizeClick}
                          className={
                            selectSizes.includes("EU 41.5") ? "selected" : "td"
                          }
                        >
                          EU 41.5
                        </td>
                      </tr>
                      <tr className="btn-list">
                        <th colSpan={3} id="add-cart" className="btn-add-cart">
                          <button onClick={handleAddToCart}>Add to Cart</button>{" "}
                          <button>Favourite</button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Detail;
