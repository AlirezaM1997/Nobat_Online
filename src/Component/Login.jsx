import { Link } from "react-router-dom";
import '../Style/Login.css'
export default function Login() {
  return (

    <div className="container py-3 px-5  mw-100 bg-user-log">

      <div className="row d-flex flex-lg-row flex-column align-content-center justify-content-center pt-1">
        <div className="col-lg-5 col-md-8 col-12 p-md-5 p-1 mb-md-0 mb-4">
          <div className="form-bg">
            <div className="container">
              <div className="row d-flex flex-md-column">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <form className="bg-white form-horizontal">
                      <h3 className="Title">ورود بیماران</h3>
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

                      <div className="d-flex align-items-center">
                        <Link to={"/userprofile"} className="text-white">
                          <button className="btn signin">ورود</button>
                        </Link>
                        <span className="forgot-pass">
                          <Link to={"#"}>رمز عبور را فراموش کردی؟</Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link className="h6 text-dark" to={"/user-register"}>
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
        <div className="col-lg-5 col-md-8 col-12 p-md-5 p-1 mb-md-0 mb-4">
          <div className="form-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-offset-12 col-md-12 col-sm-offset-12 col-sm-12">
                  <div className="form-container">
                    <form className="bg-primary form-horizontal " id="docLog">
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
                        <Link to={"#"} className="text-white">
                          <button className="btn signin" id="signin-doctor">
                            ورود
                          </button>
                        </Link>
                        <span className="forgot-pass">
                          <Link id="forgetPassDoc" to={"#"}>رمز عبور را فراموش کردی؟</Link>
                        </span>
                      </div>
                      <span className="register">
                        <Link
                          className="h6 text-white"
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
