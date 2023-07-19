import React from "react";
import "./Profiles.css";
import { useState } from "react";
import { UserAPI } from "../../api/User";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Profiles = () => {
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    UserAPI.getUserId(user.id).then((data) => setUserData(data.data[0]));
  }, [location.pathname]);

  return (
    <div className="mt-4 ">
      <div className="container form-profile">
        <h1 className="mb-5">Account Settings</h1>
        <div className="bg-white rounded-lg d-block d-sm-flex">
          <div className="profile-tab-nav border-right">
            <div className="p-4">
              <div className="img-circle text-center mb-3">
                <img
                  src="/avatar.png"
                  alt="..."
                  className="shadow avatar-file"
                />
              </div>
              <h4 className="text-center">
                {userData.lastName} {userData.firstName}
              </h4>
            </div>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {" "}
            </div>
          </div>
          <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 className="mb-4">Account Settings</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={userData.firstName}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={userData.lastName}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={userData.email}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={
                        userData.birthday && userData.birthday.slice(0, 10)
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-light">Update</button>{" "}
                <button className="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
