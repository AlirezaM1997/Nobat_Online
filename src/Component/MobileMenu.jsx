import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAllState } from "../Provider";

import "../Style/MobileMenu.css";

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const { auth } = useAllState(false);
  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { allUsers } = useAllState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getIndexByUserName = (currentUsername) => {
    return allUsers.findIndex(
      (item) => item.username === currentUsername.userNameOfUser
    );
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
          {auth ? (
            <Link
              to={"/userprofile"}
              title="حساب کاربری" id="accountMobLink"
            >
              <div className="d-inline-block goToAccount">
                <img
                  className="headerImgProf"
                  src={allUsers[getIndexByUserName(currentUser)].img}
                ></img>
                <span className="headerNameProf text-white">
                  {allUsers[getIndexByUserName(currentUser)].username}
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
                <Link to={"/"} className="mob-item p-3">
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
                          <Link to="" className="mob-item p-3">
                            سلامت زنان
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="mob-item p-3">
                            سلامت خانواده
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="mob-item p-3">
                            بیماری کرونا
                          </Link>
                        </li>
                        <li>
                          <Link to="" className="mob-item p-3">
                            بهداشت روان
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to={"#"} className="mob-item p-3">
                  منو
                </Link>
              </li>
              <li>
                <Link to={"#"} className="mob-item p-3">
                  منو
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="mob-item p-3">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
          <div className={`row d-flex ${auth ? "justify-content-center" : ""}`}>
            <div
              className={`col-4 d-flex justify-content-center ${
                auth ? "d-none" : ""
              }`}
            >
              <Link to={"/login"}>ورود کاربران</Link>
            </div>
            <div className={`col-4 d-flex justify-content-center ${
                auth ? "col-5 bg-primary rounded" : ""
              }`}>
              <Link to={"/doctor-register"} className={`${
                auth ? "text-white rounded py-2" : ""
              }`}>ثبت نام پزشکان</Link>
            </div>
            <div className={`col-4 d-flex justify-content-center ${
                auth ? "d-none" : ""
              }`}>
              <Link to={"/user-register"}>ثبت نام کاربران</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
