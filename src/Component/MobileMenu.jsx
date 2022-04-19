import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAllState } from "../Provider";

import "../Style/MobileMenu.css";

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const { auth } = useAllState(false);
  const { setAuth } = useAllState();
  const { docAuth } = useAllState(false);
  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { currentDoctor } = useAllState({ userNameOfDoctor: "" });
  const { allUsers } = useAllState();
  const { allDoctors } = useAllState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getIndexByUserNameForUser = (currentUsername) => {
    return allUsers.findIndex(
      (item) => item.username === currentUsername.userNameOfUser
    );
  };
  const getIndexByUserNameForDoctor = (currentUsername) => {
    return allDoctors.findIndex(
      (item) => item.username === currentUsername.userNameOfDoctor
    );
  };

  const logOutNav = useNavigate();
  const logout = () => {
    setAuth(false);
    logOutNav("/");
  };
  return (
    <>
      <FontAwesomeIcon
        onClick={handleShow}
        icon={faBars}
        className="mobile-nav-toggle"
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          className="bg-primary d-flex offcanvasHeader"
          closeButton
        >
          {auth || docAuth ? (
            <span
            id="logout-mob-menue"
              className="logout mx-2"
              title="خروج"
              onClick={(e) => {
                logout(e);
                handleClose(e);
              }}
            ></span>
          ) : (
            ""
          )}
          {auth ? (
            <Link
              to={"/userprofile"}
              onClick={(e) => handleClose(e)}
              title="حساب کاربری"
              id="accountMobLink"
            >
              <div className="d-inline-block goToAccount">
                <img
                  className="headerImgProf"
                  src={allUsers[getIndexByUserNameForUser(currentUser)].img}
                ></img>
                <span className="headerNameProf text-white">
                  {allUsers[getIndexByUserNameForUser(currentUser)].username}
                </span>
              </div>
            </Link>
          ) : (
            ""
          )}
          {docAuth ? (
            <Link
              to={"/doctorprofile"}
              onClick={(e) => handleClose(e)}
              title="حساب کاربری"
              id="accountMobLink"
            >
              <div className="d-inline-block goToAccount">
                <img
                  className="headerImgProf"
                  src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${
                    allDoctors[getIndexByUserNameForDoctor(currentDoctor)]
                      .imgUrl
                  }`}
                ></img>
                <span className="headerNameProf text-white">
                  {
                    allUsers[getIndexByUserNameForDoctor(currentDoctor)]
                      .username
                  }
                </span>
              </div>
            </Link>
          ) : (
            ""
          )}
          <Offcanvas.Title className="me-2 text-white h2">
            نوبت آنلاین
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="container">
          <div className="row list-group">
            <ul>
              <li>
                <Link
                  to={"/"}
                  className="mob-item p-3"
                  onClick={(e) => handleClose(e)}
                >
                  صفحه اصلی
                </Link>
              </li>
              <li className="mobile-dropdown">
                <Link to={"#"} className="mob-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="d-flex justify-content-between align-items-center  p-3"
                      id="mobile-btn-nav"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      مجله سلامت
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body my-3 p-0">
                      <ul>
                        <li>
                          <Link
                            to=""
                            className="mob-item p-3"
                            onClick={(e) => handleClose(e)}
                          >
                            سلامت زنان
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="mob-item p-3"
                            onClick={(e) => handleClose(e)}
                          >
                            سلامت خانواده
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="mob-item p-3"
                            onClick={(e) => handleClose(e)}
                          >
                            بیماری کرونا
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="mob-item p-3"
                            onClick={(e) => handleClose(e)}
                          >
                            بهداشت روان
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="mob-item p-3"
                  onClick={(e) => handleClose(e)}
                >
                  منو
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="mob-item p-3"
                  onClick={(e) => handleClose(e)}
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
          <div
            id="buttonsOfMenue"
            className={`row d-flex ${auth ? "justify-content-center" : ""}`}
          >
            <div
              className={`col-4 d-flex justify-content-center ${
                auth ? "d-none" : ""
              }`}
            >
              <Link to={"/login"} onClick={(e) => handleClose(e)}>
                ورود کاربران
              </Link>
            </div>
            <div
              className={`col-4 d-flex justify-content-center ${
                auth ? "col-5 bg-primary rounded" : ""
              }`}
            >
              <Link
                to={"/doctor-register"}
                className={`text-center ${auth ? "text-white  rounded py-2" : ""}`}
                onClick={(e) => handleClose(e)}
              >
                ثبت نام پزشکان
              </Link>
            </div>
            <div
              className={`col-4 d-flex justify-content-center ${
                auth ? "d-none" : ""
              }`}
            >
              <Link to={"/user-register"} onClick={(e) => handleClose(e)}>
                ثبت نام کاربران
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
