import React from "react";
import "./Profiles.css";
import { useState } from "react";
import { UserAPI } from "../../api/User";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profiles = () => {
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const fetchUserData = async (userId) => {
    try {
      const response = await UserAPI.getUserId(userId);
      setUserData(response.data[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetchUserData(user.id);
    }
  }, [location.pathname]);

  useEffect(() => {
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setBirthday(userData.birthday);
  }, [userData]);

  const handleUpdate = async (id) => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    await UserAPI.updateUser(id, data)
      .then(() => {
        toast.success("Update Users Successfully !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error("Update User Error !", error, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="mt-4 ">
      <ToastContainer />
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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userData.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      value={birthday && birthday.slice(0, 10)}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => handleUpdate(userData.id)}
                >
                  Update
                </button>{" "}
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
