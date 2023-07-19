import React from "react";
import "./Success.css";
const Success = ({ closeSuccess }) => {
  return (
    <div className="modal2">
      <div className="modal-null2">
        <p>Successfully !</p>
        <div className="modal-null-button">
          <button onClick={() => closeSuccess()}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
