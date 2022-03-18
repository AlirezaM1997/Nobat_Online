import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import "./index.css";
import Home from "./Home";
import DoctorRegister from "./Component/DoctorRegister";
import UserRegister from "./Component/UserRegister";
import Login from "./Component/Login";
import Result from "./Component/Result";
import UserProfile from "./Component/UserProfile";
import Header from "./Component/Header";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Provider from "./Provider"
ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Route>
        <Route path="/doctor-register" element={<DoctorRegister />}></Route>
        <Route path="/user-register" element={<UserRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/userprofile"
          element={
            <RequireAuth redirectTo="/login">
              <UserProfile />
            </RequireAuth>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

function RequireAuth({ children, redirectTo }) {
  // let isAuthenticated = getAuth();
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
