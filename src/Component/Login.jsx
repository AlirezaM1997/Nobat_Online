import { Link, useNavigate } from "react-router-dom";
import "../Style/Login.css";
import { useAllState } from "../Provider";
import { useState } from "react";
// import users from "../All-Data/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const navigateToUser = useNavigate();
  const navigateToDoctor = useNavigate();

  const { setAuth } = useAllState();
  const { auth } = useAllState();
  const { setDocAuth } = useAllState();

  const { allUsers } = useAllState();
  const { allDoctors } = useAllState();

  const [hintUserInput, setHintUserInput] = useState(false);
  const [hintUserWrong, setHintUserWrong] = useState(false);
  const [hintDoctorInput, setHintDoctorInput] = useState(false);
  const [hintDoctorWrong, setHintDoctorWrong] = useState(false);

  const { currentUser, setCurrentUser } = useAllState({
    userNameOfUser: "",
    passwordOfUser: "",
  });
  const { currentDoctor, setCurrentDoctor } = useAllState({
    userNameOfDoctor: "",
    passwordOfDoctor: "",
  });

  const userHandler = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const doctorHandler = (e) => {
    setCurrentDoctor({ ...currentDoctor, [e.target.name]: e.target.value });
  };

  const setRedirectToUser = () => {
    if (
      currentUser.userNameOfUser === "" ||
      currentUser.passwordOfUser === ""
    ) {
      setHintUserInput(true);
    } else {
      const usercheck = allUsers.find(
        (user) =>
          user.username === currentUser.userNameOfUser &&
          user.password === currentUser.passwordOfUser
      );
      if (usercheck) {
        setHintUserWrong(false);
        setHintUserInput(false);
        setDocAuth(false);
        setAuth(true);
        navigateToUser("/userprofile");
      } else {
        setHintUserInput(false);
        setHintUserWrong(true);
      }
    }
  };
  const setRedirectToDoctor = () => {
    if (
      currentDoctor.userNameOfDoctor === "" ||
      currentDoctor.passwordOfDoctor === ""
    ) {
      setHintDoctorInput(true);
    } else {
      const doctorcheck = allDoctors.find(
        (user) =>
          user.username === currentDoctor.userNameOfDoctor &&
          user.password === currentDoctor.passwordOfDoctor
      );
      if (doctorcheck) {
        setHintDoctorWrong(false);
        setHintDoctorInput(false);
        setAuth(false);
        setDocAuth(true);
        navigateToDoctor("/doctorprofile");
      } else {
        setHintDoctorInput(false);
        setHintDoctorWrong(true);
      }
    }
  };

  return (
    <div className="container py-3 px-5  mw-100 bg-user-log">
      <div className="row d-flex flex-lg-row flex-column align-content-center justify-content-center pt-1">
        <div className="col-lg-5 col-md-8 col-12 p-sm-5 p-2 my-md-0 my-4 loginCol">
          <div className="form-bg">
            <div className="container">
              <div className="row d-flex flex-md-column">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <div className="bg-white form-horizontal">
                      <h3 className="Title">ورود بیماران</h3>
                      <div className="form-group d-flex align-items-center justify-content-end">
                        <input
                          className="form-control d-inline-block"
                          type="email"
                          name="userNameOfUser"
                          placeholder="نام کاربری"
                          dir="rtl"
                          value={currentUser.userNameOfUser}
                          onChange={userHandler}
                        />
                        <FontAwesomeIcon icon={faUser} className="loginIcon" />
                      </div>
                      <div className="form-group  d-flex align-items-center justify-content-end">
                        <input
                          className="form-control d-inline-block"
                          type="password"
                          name="passwordOfUser"
                          placeholder="رمز عبور"
                          dir="rtl"
                          value={currentUser.passwordOfUser}
                          onChange={userHandler}
                        />
                        <FontAwesomeIcon icon={faLock} className="loginIcon" />
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
        <div className="col-lg-5 col-md-8 col-12 p-sm-5 p-2 my-md-0 my-4 loginCol">
          <div className="form-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <div className="bg-primary form-horizontal " id="docLog">
                      <h3 className="Title" id="docTitle">
                        ورود پزشکان
                      </h3>
                      <div className="form-group  d-flex align-items-center justify-content-end">
                        <input
                          className="form-control d-inline-block"
                          type="email"
                          name="userNameOfDoctor"
                          placeholder="نام کاربری"
                          dir="rtl"
                          value={currentDoctor.userNameOfDoctor}
                          onChange={doctorHandler}
                        />
                        <FontAwesomeIcon icon={faUser} className="loginIcon" />
                      </div>
                      <div className="form-group  d-flex align-items-center justify-content-end">
                        <input
                          className="form-control d-inline-block"
                          type="password"
                          name="passwordOfDoctor"
                          placeholder="رمز عبور"
                          dir="rtl"
                          value={currentDoctor.passwordOfDoctor}
                          onChange={doctorHandler}
                        />
                        <FontAwesomeIcon icon={faLock} className="loginIcon" />
                      </div>
                      <div
                        className={`${
                          hintDoctorInput ? "showDoctorHint" : "hideDoctorHint"
                        }`}
                      >
                        لطفا نام کاربری یا رمز عبور را وارد کنید
                      </div>
                      <div
                        className={`${
                          hintDoctorWrong
                            ? "showDoctorWrong"
                            : "hideDoctorWrong"
                        }`}
                      >
                        نام کاربری یا رمز عبور اشتباه است
                      </div>
                      <div className="d-flex align-items-center ">
                        {/* <Link to={"#"} className="text-white"> */}
                        <button
                          className="btn signin"
                          id="signin-doctor"
                          onClick={setRedirectToDoctor}
                        >
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
