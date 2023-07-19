import React, { useState } from "react";
import LoginForm from "./Register-Components/LoginForm";
import RegisterForm from "./Register-Components/RegisterForm";

const Register = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {isShow ? (
        <LoginForm setIsShow={setIsShow} />
      ) : (
        <RegisterForm setIsShow={setIsShow} />
      )}
    </>
  );
};

export default Register;
