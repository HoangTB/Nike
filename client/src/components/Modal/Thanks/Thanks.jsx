import React from "react";
import "./Thanks.css";
import { Link } from "react-router-dom";
const Thanks = () => {
  return (
    <div className="modal">
      <div className="modal-null">
        <p>Thank you for your order !</p>
        <div className="modal-null-button">
          <Link to={"/"}>
            <button>Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
