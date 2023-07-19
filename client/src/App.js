import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import LoginLayout from "./layout/LoginLayout/LoginLayout";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites";
import ManProducts from "./components/ManProducts";
import Detail from "./components/Detail/Detail";
import Help from "./components/Help";
import Payment from "./components/Payment/Payment";
import History from "./components/History/History";
import { useState } from "react";
import Profiles from "./components/Profiles/Profiles";
import RequiredAuth from "./components/requireAuth/requireAuth";

function App() {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const onFilteredOptionsApp = (filteredOptions) => {
    setFilteredOptions(filteredOptions);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} index />

        <Route
          path="/home"
          index
          element={<DefaultLayout children={<Home />} />}
        />
        <Route
          path="/help"
          element={
            <DefaultLayout>
              <Help />
            </DefaultLayout>
          }
        />

        <Route
          path="/login"
          element={
            <LoginLayout>
              <Register />
            </LoginLayout>
          }
        />
        <Route
          path="/product"
          element={
            <DefaultLayout onFilteredOptionsApp={onFilteredOptionsApp}>
              <ManProducts filteredOptions={filteredOptions} />
            </DefaultLayout>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <DefaultLayout>
              <Detail />
            </DefaultLayout>
          }
        />
        <Route element={<RequiredAuth />}>
          <Route
            path="/favorites"
            element={
              <DefaultLayout>
                <Favorites />
              </DefaultLayout>
            }
          />
          <Route
            path="/cart/"
            element={
              <DefaultLayout>
                <Cart />
              </DefaultLayout>
            }
          />

          <Route
            path="/payment"
            element={
              <LoginLayout>
                <Payment />
              </LoginLayout>
            }
          />
          <Route
            path="/history"
            element={
              <LoginLayout>
                <History />
              </LoginLayout>
            }
          />
          <Route
            path="/profiles"
            element={
              <DefaultLayout>
                <Profiles />
              </DefaultLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
