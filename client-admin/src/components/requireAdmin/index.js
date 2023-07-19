import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function RequiredAdmin() {
  const [hasToken] = useState(JSON.parse(localStorage.getItem("admin")));
  return hasToken && Number(hasToken?.role) === 2 ? (
    <Outlet />
  ) : (
    <Navigate to={"/login-manager"} />
  );
}
export default RequiredAdmin;
