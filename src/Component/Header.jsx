import { Link, Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Image from "react-bootstrap/Image";

export default function Header() {
  return (
    <div>
      <div id="topbar" className="d-flex align-items-center fixed-top bg-white">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center"></div>
          <div className="d-none d-lg-flex social-links align-items-center"></div>
        </div>
      </div>
      <header id="header" className="fixed-top bg-white">
        <div
          className="container d-flex align-items-center justify-content-around"
          id="containerHeader"
        >
          <div id="header3">
            <Link
              className="btn btn-primary me-2 btnHeader d-inline-block text-white headerBtn"
              to={"/login"}
            >
              ورود کاربران
            </Link>

            <Link
              className="btn btn-primary btnHeader d-inline-block text-white headerBtn"
              to={"/doctor-register"}
            >
              ثبت نام پزشکان
            </Link>
          </div>
          <div id="header2">
            <nav id="navbar" className="navbar order-last order-lg-0 p-0">
              <ul className="d-flex m-0 p-0 align-items-center">
                <li>
                  <Link to="/about" className="nav-link">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link">
                    منو
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link">
                    منو
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="">
                    <span>مجله سلامت</span>{" "}
                  </Link>
                  <ul className="position-absolute d-flex align-items-end flex-column m-0 bg-white end-0">
                    <li>
                      <Link to="">سلامت زنان</Link>
                    </li>
                    <li>
                      <Link to="">سلامت خانواده</Link>
                    </li>
                    <li>
                      <Link to="">بیماری کرونا</Link>
                    </li>
                    <li>
                      <Link to="">بهداشت روان</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/" className="nav-link ">
                    صفحه اصلی
                  </Link>
                </li>
              </ul>
              <MobileMenu />
            </nav>
          </div>
          <div id="header1" className="d-flex align-items-center ">
            <h1 className="logo">
              <Link to="">نوبت آنلاین</Link>
            </h1>
            <Image
            className="m-0 p-0"
              id="logo"
              src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/logo.png")}
            ></Image>
          </div>
        </div>
      </header>
      <Outlet/>
    </div>
  );
}
