import React, { useState } from "react";
import "./Payment.css";
import { OrderDetail } from "../../api/OrderDetail";
import { Order } from "../../api/Order";
import { useDispatch } from "react-redux";
import { updateState } from "../../store/UpdateProSlice";
import Thanks from "../Modal/Thanks/Thanks";
import { HistoryAPI } from "../../api/History";
import { Products } from "../../api/Product";
const Payment = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    let isValid = true;
    const errors = {};
    if (fullName.trim() === "") {
      isValid = false;
      errors.fullName = "Please enter your Full name";
    }

    if (email.trim() === "") {
      isValid = false;
      errors.email = "Please enter your email";
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.email = "Please enter a valid email";
    }
    if (address.trim() === "") {
      isValid = false;
      errors.address = "Please enter your address";
    }

    if (phone.trim() === "") {
      isValid = false;
      errors.phone = "Please enter your phone";
    }
    setErrors(errors);
    if (isValid) {
      OrderDetail.getOrderDetailById(user.id).then((dataDetail) => {
        dataDetail?.map(async (e) => {
          console.log(e.product_id);
          return Order.getOrderById(user.id)
            .then(async (order) => {
              let historyValue = {
                quantity: e.quantity,
                size_product: e.size_product,
                fullName: fullName,
                email: email,
                address: address,
                phone: phone,
                status: 2,
                order_date: order[0].order_date,
                order_id: e.order_id,
                product_id: e.product_id,
              };
              HistoryAPI.createHistory(historyValue);
              const product = await Products.getProductById(e.product_id);

              let updateInventory = product[0].quantity_inventory - e.quantity;

              Products.updateProduct(e.product_id, {
                quantity_inventory: updateInventory,
              });
            })
            .then(() => {
              // const updateInventory = {
              //   quantity_inventory:
              // }
              // Products.getProductById(e.product_id).then((data) => {
              //   console.log(data);
              // });
              // Products.updateProduct(e.product_id);
            });
        });
      });
      OrderDetail.deleteOrderDetailByHistory(user.id);

      dispatch(updateState());
      setIsShowForm(!isShowForm);
    }
  };
  return (
    <div className="container">
      {isShowForm && <Thanks />}
      <form action="" onSubmit={handlePayment}>
        <div className="row">
          <div className="col">
            <h3 className="title">billing address</h3>
            <div className="inputBox">
              <span>full name :</span>
              <input
                type="text"
                placeholder="Truong Bao Hoang"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="inputBox">
              <span>email :</span>
              <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputBox">
              <span>address :</span>
              <input
                type="text"
                placeholder="room - street - locality"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <div className="inputBox">
              <span>phone :</span>
              <input
                type="text"
                placeholder="0905485884"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
        </div>
        <input
          type="submit"
          defaultValue="proceed to checkout"
          className="submit-btn"
        />
      </form>
    </div>
  );
};

export default Payment;
