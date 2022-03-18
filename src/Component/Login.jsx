import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Header2 from "./Header2";

export default function Login() {
  return (
    <div className="container py-3 px-5 min-vh-100 mw-100 bg-user-log">
      <Header2 />
      <div className="row d-flex flex-lg-row flex-column align-content-center justify-content-center pt-1">
        <div className="col-lg-5 col-md-8 p-5">
          <div className="form-bg">
            <div className="container">
              <div className="row d-flex flex-md-column">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <form className="bg-white form-horizontal">
                      <h3 className="title">ورود بیماران</h3>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          className="form-control"
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
                          className="form-control"
                          type="password"
                          placeholder="رمز عبور"
                          dir="rtl"
                        />
                      </div>

                      <div className="d-flex align-items-center">
                        <Link to={"/userprofile"} className="text-white">
                          <button className="btn signin">ورود</button>
                        </Link>
                        <span className="forgot-pass">
                          <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link className="h6 text-danger" to={"/user-register"}>
                          ثبت نام نکردی ؟
                        </Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-8 p-5">
          <div className="form-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <form className="form-horizontal">
                      <h3 className="title">ورود پزشکان</h3>
                      <div className="form-group">
                        <span className="input-icon">
                          <i className="fa fa-user"></i>
                        </span>
                        <input
                          className="form-control"
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
                          className="form-control"
                          type="password"
                          placeholder="رمز عبور"
                          dir="rtl"
                        />
                      </div>

                      <div className="d-flex align-items-center ">
                        <Link to={"#"} className="text-white">
                          <button className="btn signin" id="signin-doctor">
                            ورود
                          </button>
                        </Link>
                        <span className="forgot-pass">
                          <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link
                          className="h6 text-danger"
                          to={"/doctor-register"}
                        >
                          ثبت نام پزشکان
                        </Link>
                      </span>
                    </form>
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
