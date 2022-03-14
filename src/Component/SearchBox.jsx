import { Link } from "react-router-dom";
import React, { useState, useEffect, Fragment } from "react";

export default function SearchBox(props) {
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");

  if (props.flag) {
    return (
      <div className="doctorSearch d-flex flex-column ">
        <h5 className="searchTitle">نام پزشک مورد نظر خود را وارد کنید </h5>
        <input
          className="w-75 bg-light py-2 my-2 w-100 hero-input"
          dir="rtl"
          value={searchDoc}
          onChange={(e) => setSearchDoc(e.target.value)}
        ></input>

        <button className="btn btn-warning align-self-center px-5 mt-2">
          <Link className="text-black" to={"/result"}>
            جستجو
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <div className="expertSearch d-flex flex-column">
        <h5 className="searchTitle">تخصص مورد نظر خود را وارد کنید </h5>
        <select
          dir="rtl"
          class="w-75 bg-light my-2 w-100 hero-input py-2"
          value={searchExp}
          onChange={(e) => setSearchExp(e.target.value)}
        >
          <option value="General">پزشک عمومی</option>
          <option value="Internist">متخصص داخلی</option>
          <option value="Women">متخصص زنان</option>
          <option value="Neurologists">متخصص اعصاب و روان</option>
          <option value="Pediatrician">متخصص اطفال</option>
          <option value="Otolaryngologists">متخصص گوش و حلق و بینی</option>
          <option value="Heart">متخصص قلب و عروق</option>
          <option value="Dermatologist">متخصص پوست</option>
          <option value="Urologist">متخصص اورولوژی</option>
          <option value="Optometrist">متخصص چشم</option>
          <option value="Endocrinologist">متخصص غدد</option>
          <option value="Orthopedic">متخصص ارتوپدی</option>
          <option value="Anesthesiologist">متخصص بیهوشی</option>
          <option value="Radiologist">متخصص رادیولوژی</option>
          <option value="Surgeon">متخصص جراحی</option>
          <option value="Beauty">متخصص زیبایی</option>
          <option value="Infectious-Disease">متخصص بیماری های عفونی</option>
          <option value="Rheumatologist">متخصص روماتولوژی</option>
          <option value="Nutritionist">متخصص تغذیه</option>
          <option value="Midwifery">مامایی</option>
          <option value="Dental">دندانپزشکی</option>
          <option value="Psychiatry"> روانپزشکی</option>
          <option value="Psychology">روانشناسی</option>
        </select>
        <button className="btn btn-warning align-self-center px-5 mt-2">
          <Link className="text-black" to={"/result"}>
            جستجو
          </Link>
        </button>
      </div>
    );
  }
}
