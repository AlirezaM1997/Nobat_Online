import { Link, useNavigate } from "react-router-dom";
import "../Style/Login.css";
import { useAllState } from "../Provider";
import { useState } from "react";
import users from "../users";

export default function Login() {
  const navigateToUser = useNavigate();
  const { setAuth } = useAllState(false);
  const [hintUserInput, setHintUserInput] = useState(false);
  const [hintUserWrong, setHintUserWrong] = useState(false);
  const {currentUser, setCurrentUser} = useAllState({
    userNameOfUser: "",
    passwordOfUser: ""
  });

  const changeHandler = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const setRedirectToUser = () => {
    if (
      currentUser.userNameOfUser === "" ||
      currentUser.passwordOfUser === ""
    ) {
      setHintUserInput(true);
    } else {
      const usercheck = users.find(
        (user) =>
          user.username === currentUser.userNameOfUser &&
          user.password === currentUser.passwordOfUser
      );
      if (usercheck) {
        setHintUserWrong(false);
        setHintUserInput(false);
        setAuth(true);
        navigateToUser("/userprofile");
      } else {
        setHintUserInput(false);
        setHintUserWrong(true);
      }
    }
  };
  return (
    <div className="container py-3 px-5  mw-100 bg-user-log">
      <div className="row d-flex flex-lg-row flex-column align-content-center justify-content-center pt-1">
        <div className="col-lg-5 col-md-8 col-12 p-md-5 p-1 mb-md-0 mb-4">
          <div className="form-bg">
            <div className="container">
              <div className="row d-flex flex-md-column">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <div className="bg-white form-horizontal">
                      <h3 className="Title">ورود بیماران</h3>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          className="form-control d-inline-block"
                          type="email"
                          name="userNameOfUser"
                          placeholder="نام کاربری"
                          dir="rtl"
                          value={currentUser.userNameOfUser}
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-lock"></i>
                        </span>
                        <input
                          className="form-control d-inline-block"
                          type="password"
                          name="passwordOfUser"
                          placeholder="رمز عبور"
                          dir="rtl"
                          value={currentUser.passwordOfUser}
                          onChange={changeHandler}
                        />
                      </div>
                      <div
                        className={`${
                          hintUserInput ? "showUserHint" : "hideUserHint"
                        }`}
                      >
                        لطفا نام کاربری یا رمز عبور را وارد کنید
                      </div>
                      <div
                        className={`${
                          hintUserWrong ? "showUserWrong" : "hideUserWrong"
                        }`}
                      >
                        نام کاربری یا رمز عبور اشتباه است
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          onClick={setRedirectToUser}
                          className="btn signin text-white"
                        >
                          ورود
                        </button>

                        <span className="forgot-pass">
                          <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link className="h6 text-dark" to={"/user-register"}>
                          ثبت نام نکردی ؟
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-8 col-12 p-md-5 p-1 mb-md-0 mb-4">
          <div className="form-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <div className="bg-primary form-horizontal " id="docLog">
                      <h3 className="Title" id="docTitle">
                        ورود پزشکان
                      </h3>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          className="form-control d-inline-block"
                          type="email"
                          placeholder="نام کاربری"
                          dir="rtl"
                        />
                      </div>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-lock"></i>
                        </span>
                        <input
                          className="form-control d-inline-block"
                          type="password"
                          placeholder="رمز عبور"
                          dir="rtl"
                        />
                      </div>

                      <div className="d-flex align-items-center ">
                        {/* <Link to={"#"} className="text-white"> */}
                        <button className="btn signin" id="signin-doctor">
                          ورود
                        </button>
                        {/* </Link> */}
                        <span className="forgot-pass">
                          <Link id="forgetPassDoc" to={"#"}>
                            رمز عبور را فراموش کردی؟
                          </Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link className="h6 text-white" to={"/doctor-register"}>
                          ثبت نام پزشکان
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
