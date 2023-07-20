import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateState } from "../../store/UpdateProSlice";
import { UserAPI } from "../../api/User";
const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  let userLocal = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    UserAPI.getUserId(Number(userLocal?.id))
      .then((e) => setUser(e))
      .catch((err) => console.log(err));
  }, [update, location.pathname]);

  const handleUserClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUpdate(!update);
    setIsOpen(!isOpen);
    dispatch(updateState());
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-top">
        <div className="content-left">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/projectshoes-cf747.appspot.com/o/Jumpman_logo.svg.png?alt=media&token=f0107eb1-1835-477f-b1dc-4ab702e9dcf4"
            alt="jordan"
          />
        </div>
        <div className="content-right">
          <ul>
            <li>
              <a>Find a store</a>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            {user?.data && user?.data[0] ? (
              <li>
                <Link to="#">
                  Hi {user?.data[0]?.lastName} {user?.data[0]?.firstName}
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Sign In</Link>
              </li>
            )}
          </ul>
          {userLocal ? (
            <div className="user-dropdown">
              <i
                className={"fa-solid fa-user fa-fade i-user "}
                onClick={handleUserClick}
              ></i>
              {isOpen && (
                <ul className="user-list">
                  <Link to={"/profiles"}>
                    {" "}
                    <li>Profile</li>
                  </Link>
                  <Link to={"/history"}>
                    <li>History Order</li>
                  </Link>
                  <Link to={"/login"}>
                    <li onClick={handleLogOut}>Logout</li>
                  </Link>
                </ul>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
