import React from "react";
import "../Style/Register.css";
import { Link } from "react-router-dom";
export default function ModalDoc(props) {
  return (
    <>
      <div className="container">
        <div
          className={`${props.showHideClassName}`}
          onClick={() => props.hideModal()}
        >
          <section
            id="Modal-Doc"
            onClick={(e) => e.stopPropagation()}
          ></section>
        </div>
      </div>
    </>
  );
}
