import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Style/MobileMenu.css";

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        onClick={handleShow}
        icon={faBars}
        className="mobile-nav-toggle"
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header
          className="bg-primary d-flex justify-content-end"
          closeButton
        >
          <Offcanvas.Title className="me-2 text-white h2">
            نوبت آنلاین
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <div class="list-group">
            <ul>
              <li>
                <Link
                  to={"/"}
                  class="list-group-item list-group-item-action p-3"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to={"#"}
                  class="list-group-item list-group-item-action p-3"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                    className="d-flex justify-content-between align-items-center"
                      id="mobile-btn-nav"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      مجله سلامت
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                    </button>
                    
                  </div>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body my-3 p-0">
                    <ul>
                  <li>
                    <Link to="" class="list-group-item list-group-item-action p-3">سلامت زنان</Link>
                  </li>
                  <li>
                    <Link to="" class="list-group-item list-group-item-action p-3">سلامت خانواده</Link>
                  </li>
                  <li>
                    <Link to="" class="list-group-item list-group-item-action p-3">بیماری کرونا</Link>
                  </li>
                  <li>
                    <Link to="" class="list-group-item list-group-item-action p-3">بهداشت روان</Link>
                  </li>
                </ul>
                    </div>
                  </div>
                </Link>
               
              </li>
              <li>
                <Link
                  to={"#"}
                  class="list-group-item list-group-item-action p-3"
                >
                  منو
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  class="list-group-item list-group-item-action p-3"
                >
                  منو
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  class="list-group-item list-group-item-action p-3"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
