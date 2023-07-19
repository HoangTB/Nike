import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import UserManager from "./components/UserManager/UserManager";
import ProductManager from "./components/ProductManager/ProductManager";
import OrderManager from "./components/OrderManager/OrderManager";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import DefaultLayoutLogin from "./layout/DefaultLayoutLogin/DefaultLayoutLogin";
import RequiredAdmin from "./components/requireAdmin";
import Revenue from "./components/Revenue/Revenue";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login-manager" index />} />
        <Route path="/login-manager" element={<DefaultLayoutLogin />} />

        <Route element={<RequiredAdmin />}>
          <Route
            path="/home"
            index
            element={<DefaultLayout children={<Home />} />}
          />
          <Route
            path="/user-manager"
            element={<DefaultLayout children={<UserManager />} />}
          />
          <Route
            path="/product-manager"
            element={<DefaultLayout children={<ProductManager />} />}
          />
          <Route
            path="/order-manager"
            element={<DefaultLayout children={<OrderManager />} />}
          />
          <Route
            path="/revenue-manager"
            element={<DefaultLayout children={<Revenue />} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
