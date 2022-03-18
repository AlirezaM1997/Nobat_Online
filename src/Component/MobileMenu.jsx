import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom";
import "../Style/MobileMenu.css"

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
                <Link to={'/'} class="list-group-item list-group-item-action p-3">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to={'#'} class="list-group-item list-group-item-action p-3">
                مجله سلامت
                </Link>
              </li>
              <li>
                <Link to={'#'} class="list-group-item list-group-item-action p-3">
                  منو
                </Link>
              </li>
              <li>
                <Link to={'#'} class="list-group-item list-group-item-action p-3">
                منو
                </Link>
              </li>
              <li>
                <Link to={'/about'} class="list-group-item list-group-item-action p-3">
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
