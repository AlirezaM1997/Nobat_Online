import { Link, Outlet, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Image from "react-bootstrap/Image";
import "../Style/Header.css";
// import { useEffect } from "react";
import { useAllState } from "../Provider";
import Headroom from "react-headroom";

export default function Header() {
  const { auth } = useAllState(false);
  const { setAuth } = useAllState();
  const { docAuth } = useAllState(false);
  const { setDocAuth } = useAllState();
const logOutNav = useNavigate()
  // const { currentUser } = useAllState({ userNameOfUser: "" });
  const { currentDoctor } = useAllState({ userNameOfDoctor: "" });
  const { currentUser, setCurrentUser } = useAllState({
    userNameOfUser: "",
    passwordOfUser: "",
  });
  let { setSearchExp } = useAllState();
  let { setSearchDoc } = useAllState();
  const { allUsers } = useAllState();
  const { allDoctors } = useAllState();


  const getIndexByUserName = (currentUsername) => {
    if (auth) {
      return allUsers.findIndex(
        (item) => item.username === currentUsername.userNameOfUser
      );
    } else {
      return allDoctors.findIndex(
        (item) => item.username === currentUsername.userNameOfDoctor
      );
    }
  };

  const logout = () => {
    setAuth(false)
    setDocAuth(false)
    logOutNav('/')
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
            className="container d-flex align-items-center justify-content-between"
            id="containerHeader"
          >
            <div id="header3" className="d-flex align-items-center">
              {auth || docAuth ? (
                <span
                  className="logout mx-2"
                  title="خروج"
                  onClick={logout}
                ></span>
              ) : (
                ""
              )}
              {auth ? (
                <Link to={"/userprofile"} title="حساب کاربری">
                  <div className="d-inline-block goToAccount x-5">
                    <img
                      className="headerImgProf"
                      src={allUsers[getIndexByUserName(currentUser)].img}
                    ></img>
                    <span className="headerNameProf">
                      {allUsers[getIndexByUserName(currentUser)].username}
                    </span>
                  </div>
                </Link>
              ) : docAuth ? (
                <Link to={"/doctorprofile"} title="حساب کاربری">
                  <div className="d-inline-block goToAccount x-5">
                    <img
                      className="headerImgProf"
                      src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${
                        allDoctors[getIndexByUserName(currentDoctor)].imgUrl
                      }`}
                    ></img>
                    <span className="headerNameProf">
                      {allDoctors[getIndexByUserName(currentDoctor)].username}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  className="btn btn-primary me-2 btnHeader d-inline-block text-white"
                  to={"/login"}
                >
                  ورود کاربران
                </Link>
              )}

              {!docAuth ? (
                <Link
                  className="btn btn-primary btnHeader d-inline-block text-white"
                  to={"/doctor-register"}
                >
                  ثبت نام پزشکان
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="" id="header2">
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
