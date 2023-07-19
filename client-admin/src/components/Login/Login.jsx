import React, { useEffect, useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../store/AdminSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    let isValid = true;
    const errors = {};

    if (email.trim() === "") {
      isValid = false;
      errors.email = "Please enter your email";
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.email = "Please enter a valid email";
    }

    if (password.trim() === "") {
      isValid = false;
      errors.password = "Please enter your password";
    }

    setErrors(errors);

    if (isValid) {
      const data = await dispatch(login({ email, password })).unwrap();
      console.log(data);
      if (data.status === 200) {
        if (data.data.user.role === 2) {
          navigate("/home");
        } else {
          toast.info("This is not an administrator account", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error(data.response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="container forms">
      <ToastContainer />
      <div className="form login" id="formSignIn">
        <div className="form-content">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/projectshoes-cf747.appspot.com/o/673483.png?alt=media&token=fb222f9d-7894-4adb-80c8-10729ef5b496"
            alt=""
          />

          <form action="#" onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <i className="bx bx-hide eye-icon" />
            </div>

            <div className="field button-field">
              <button type="submit" id="btnLogin">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
