import { Link } from "react-router-dom";
import { bottom } from "@popperjs/core";
import MobileMenu from "./MobileMenu";
import Image from "react-bootstrap/Image";

export default function Header() {
  return (
    <div>
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-between">
          <div class="contact-info d-flex align-items-center"></div>
          <div class="d-none d-lg-flex social-links align-items-center"></div>
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div
          className="container d-flex align-items-center justify-content-around"
          id="containerHeader"
        >
          <div id="header3">
            <Link
              className="btn btn-primary me-2 btnHeader headerBtn"
              to={"/user"}
            >
              ورود کاربران
            </Link>

            <Link
              className="btn btn-primary btnHeader headerBtn"
              to={"/doctor-register"}
            >
              ثبت نام پزشکان
            </Link>
          </div>
          <div id="header2">
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link to="" className="nav-link scrollto">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link scrollto">
                    مجله سلامت
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link scrollto">
                    منو
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="">
                    <span>منو کشویی</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="">1</Link>
                    </li>
                    <li>
                      <Link to="">2</Link>
                    </li>
                    <li>
                      <Link to="">3</Link>
                    </li>
                    <li>
                      <Link to="">4</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="" className="nav-link scrollto ">
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
              id="logo"
              src={require("/Users/alireza/Desktop/Makeen/Project/Online appointments/src/images/logo.png")}
            ></Image>
          </div>
        </div>
      </header>
    </div>
  );
}
