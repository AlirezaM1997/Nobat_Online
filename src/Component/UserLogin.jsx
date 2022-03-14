import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function UserLogin() {
  return (
    <div className="container py-3 min-vh-100 mw-100 bg-user-reg">
      <div className="d-flex bg-white w-100 p-2 mb-2 justify-content-evenly">
        <div className="d-flex align-items-center ">
          <button className="btn py-1 px-2 bg-danger ">
            <Link className="text-light" to={"/"}>
              صفحه اصلی
            </Link>
          </button>
        </div>
        <div id="" className="d-flex align-items-center ">
          <h1 className="logo">
            <Link to="">نوبت آنلاین</Link>
          </h1>
          <Image
            id="doc-reg-logo"
            src={require("/Users/alireza/Desktop/Makeen/Project/Online appointments/src/images/logo.png")}
          ></Image>
        </div>
      </div>
      <div className="row d-flex flex-lg-row flex-column align-content-center pt-1">
        <div className="col-lg-6 col-md-8 p-5">
          <div className="form-bg">
            <div className="container">
              <div className="row d-flex flex-md-column">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <form className="form-horizontal">
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
                      <button className="btn signin">
                        <Link to={"#"} className="text-white">
                          ورود
                        </Link>
                      </button>
                      <span className="forgot-pass">
                        <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                      </span>
                      <span className="register">
                        <Link className="h6 text-danger" to={"/user-register"}>ثبت نام نکردی ؟</Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 p-5">
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
                      <button className="btn signin" id="signin-doctor">
                        <Link to={"#"} className="text-white">
                          ورود
                        </Link>
                      </button>
                      <span className="forgot-pass">
                        <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                      </span>
                      <span className="register">
                        <Link className="h6 text-danger"  to={"/doctor-register"}>ثبت نام پزشکان</Link>
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
