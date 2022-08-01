import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import Home from "./Home";
import DoctorRegister from "./Component/DoctorRegister";
import UserRegister from "./Component/UserRegister";
import Login from "./Component/Login";
import Result from "./Component/Result";
import UserProfile from "./Component/UserProfile";
import DoctorProfile from "./Component/DoctorProfile";
import Header from "./Component/Header";
import reportWebVitals from "./reportWebVitals";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Appointment from "./Component/Appointment";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Provider from "./Provider";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Header />}>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/doctor-register" element={<DoctorRegister />}></Route>
          <Route path="/user-register" element={<UserRegister />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route
            path="/userprofile"
            element={
              <RequireAuth redirectTo={"/login"}>
                <UserProfile />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/doctorprofile"
            element={
              <RequireAuth redirectTo={"/login"}>
                <DoctorProfile />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

function RequireAuth({ children, redirectTo }) {
  // let isAuthenticated = getAuth();
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

reportWebVitals();
