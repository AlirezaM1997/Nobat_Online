import { Link, Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Image from "react-bootstrap/Image";
import "../Style/Header.css";
// import { useEffect } from "react";
import { useAllState } from "../Provider";
import Headroom from "react-headroom";

export default function Header() {
  const { auth } = useAllState(false);
  const { currentUser } = useAllState({ userNameOfUser: "" });
  let { setSearchExp } = useAllState();
  let { setSearchDoc } = useAllState();
  const { updateAppoinList } = useAllState();

  const getIndexByUserName = (currentUsername) => {
    return updateAppoinList.findIndex(
      (item) => item.username === currentUsername.userNameOfUser
    );
  };

  return (
    <>
      <Headroom
        style={{
          zIndex: "10",
        }}
      >
        <header id="header" className="bg-white">
          <div
            className="container d-flex align-items-center justify-content-around"
            id="containerHeader"
          >
            <div id="header3">
              {!auth ? (
                <Link
                  className="btn btn-primary me-2 btnHeader d-inline-block text-white"
                  to={"/login"}
                >
                  ورود کاربران
                </Link>
              ) : (
                <Link to={"/userprofile"} title="حساب کاربری">
                  <div className="d-inline-block goToAccount">
                    <img
                      className="headerImgProf"
                      src={
                        updateAppoinList[getIndexByUserName(currentUser)].img
                      }
                    ></img>
                    <span className="headerNameProf">
                      {
                        updateAppoinList[getIndexByUserName(currentUser)]
                          .username
                      }
                    </span>
                  </div>
                </Link>
              )}
              <Link
                className="btn btn-primary btnHeader d-inline-block text-white"
                to={"/doctor-register"}
              >
                ثبت نام پزشکان
              </Link>
            </div>
            <div id="header2">
              <nav id="navbar" className="navbar order-last order-lg-0 p-0">
                <ul className="m-0 p-0 align-items-center">
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
                    <Link
                      to="/"
                      className="nav-link "
                      onClick={() => {
                        setSearchExp("");
                        setSearchDoc("");
                      }}
                    >
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
      </Headroom>

      <Outlet />
    </>
  );
}
