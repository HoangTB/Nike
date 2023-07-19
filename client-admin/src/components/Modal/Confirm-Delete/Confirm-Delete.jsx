import React from "react";
import "./Confirm-Delete.css";
import { Link } from "react-router-dom";
import { ProductsServer } from "../../../api/Product";
const ConfirmDelete = ({ handleCancel, idDelete, handleLoading }) => {
  const handleSuccess = async () => {
    await ProductsServer.deleteProduct(idDelete)
      .then(() => {
        handleLoading();
        handleCancel();
      })
      .catch((error) => {
        handleLoading();
        handleCancel();
      });
  };
  return (
    <div className="modal">
      <div className="modal-null1">
        <p>Do you want to delete this product?</p>
        <div className="modal-null-button">
          <button onClick={() => handleSuccess()}>Yes</button>{" "}
          <button onClick={() => handleCancel()}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
