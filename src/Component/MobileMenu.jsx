import Offcanvas from "react-bootstrap/Offcanvas";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";

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
            <Link to={'#'} class="list-group-item list-group-item-action p-3">
              صفحه اصلی
            </Link>
            <Link to={'#'} class="list-group-item list-group-item-action p-3">
              منو کشویی
            </Link>
            <Link to={'#'} class="list-group-item list-group-item-action p-3">
              منو
            </Link>
            <Link to={'#'} class="list-group-item list-group-item-action p-3">
              مجله سلامت
            </Link>
            <Link to={'#'} class="list-group-item list-group-item-action p-3">
              درباره ما
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
