import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Result.css";
import { useAllState } from "../Provider";
import Image from "react-bootstrap/Image";
import StickyBox from "react-sticky-box";
import {
  faCalendarDays,
  faNotesMedical,
  faSearchPlus,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import data from "../data";
import DoctorList from "./DoctorList";
import ResultItem from "./ResultItem";

export default function Result() {
  const { flag } = useAllState();
  const { setFlag } = useAllState();
  const { searchExp } = useAllState();
  const { searchDoc } = useAllState();
  const { allDoctors } = useAllState(data);
  const { noResult } = useAllState(false);
  const { setNoResult } = useAllState();

  const [isLoaded, setIsLoaded] = useState(true);
  const [nameDoc, setNameDoc] = useState("");
  const [expertDoc, setExpertDoc] = useState("");
  const [workingDay, setWorkingDay] = useState("");

  // useEffect(() => {
  //   const url = ``;
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw Error(response.status);
  //       }
  //     })
  //     .then((result) => {
  //       setItems();
  //       setIsLoaded(true);
  //     });
  // }, []);

  if (flag === 1) {
    const array = allDoctors.filter((item, index, arr) =>
      item.expert.toLowerCase().includes(searchExp.toLowerCase())
    );
    if (array.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  } else if (flag === 2) {
    const array = allDoctors.filter(
      (item) =>
        item.fname.toLowerCase().includes(searchDoc.toLowerCase()) ||
        item.lname.toLowerCase().includes(searchDoc.toLowerCase())
    );
    if (array.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  } else {
  }

  return !isLoaded ? (
    <div className="text-center mt-5">
      <svg
        role="status"
        className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  ) : (
    <div className="py-3 mw-100 px-5" id="bg-result">
      <div className="container">
        <div className="row mt-4 d-flex justify-content-center px-1">
          <div className="col-md-8 col-12 pb-5 order-md-0 order-1">
            {flag === 1
              ? allDoctors
                  .filter((item, index, arr) =>
                    item.expert.toLowerCase().includes(searchExp.toLowerCase())
                  )
                  .map((item, index, arr) => <ResultItem item={item} />)
              : ""}
            {flag === 2
              ? allDoctors
                  .filter(
                    (item) =>
                      item.fname
                        .toLowerCase()
                        .includes(searchDoc.toLowerCase()) ||
                      item.lname.toLowerCase().includes(searchDoc.toLowerCase())
                  )
                  .map((item) => <ResultItem item={item} />)
              : ""}
            {flag === 3
              ? allDoctors
                  .filter(
                    (item) =>
                      (item.fname
                        .toLowerCase()
                        .includes(nameDoc.toLowerCase()) ||
                        item.lname
                          .toLowerCase()
                          .includes(nameDoc.toLowerCase())) &&
                      item.expert
                        .toLowerCase()
                        .includes(expertDoc.toLowerCase())
                  )
                  .map((item) => <ResultItem item={item} />)
              : ""}
            {noResult ? (
              <Image
                className="img-fluid noResult"
                src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/no-result.png")}
              ></Image>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4 col-12 pb-5 order-md-1 order-0" id="">
            <StickyBox id="StickyBox" offsetTop={170} offsetBottom={-100}>
              <div className="container p-1" id="search">
                <div className="row w-100 m-0 p-3 d-flex justify-content-center">
                  <div className="col text-center mb-2">
                    <h5 className="adSearchTitle">
                      جستجوی پیشرفته
                      <FontAwesomeIcon
                        className="mx-2 text-warning"
                        icon={faSearchPlus}
                      />
                    </h5>
                  </div>
                </div>
                <div className="row w-100 m-0 p-3 pt-0 d-flex align-items-center flex-column justify-content-center">
                  <p className="text-end text-warning h6 mb-1">
                    نام پزشک{" "}
                    <FontAwesomeIcon
                      className="mx-2 text-white"
                      icon={faUserDoctor}
                    />
                  </p>
                  <input
                    dir="rtl"
                    className="bg-light py-2 px-1 my-2 w-100 rounded border-0 expertInput"
                    value={nameDoc}
                    onChange={(e) => setNameDoc(e.target.value)}
                  ></input>
                  <p className="text-end text-warning h6 mb-1">
                    تخصص{" "}
                    <FontAwesomeIcon
                      className="mx-2 text-white"
                      icon={faNotesMedical}
                    />
                  </p>
                  <select
                    dir="rtl"
                    className="bg-light py-2 px-1 my-2 w-100 rounded border-0 expertInput"
                    value={expertDoc}
                    onChange={(e) => {
                      setExpertDoc(e.target.value);
                    }}
                  >
                    <DoctorList />
                  </select>
                  <p className="text-end text-warning h6 mb-1">
                    روزهای کاری{" "}
                    <FontAwesomeIcon
                      className="mx-2 text-white"
                      icon={faCalendarDays}
                    />
                  </p>
                  <select
                    dir="rtl"
                    className="bg-light py-2 px-1 my-2 w-100 rounded border-0 expertInput"
                    value={workingDay}
                    onChange={(e) => {
                      setWorkingDay(e.target.value);
                    }}
                  >
                    <option value={`شنبه`}>شنبه</option>
                    <option value={`یکشنبه`}>یکشنبه</option>
                    <option value={`دوشنبه`}>دوشنبه</option>
                    <option value={`سه شنبه`}>سه شنبه</option>
                    <option value={`چهارشنبه`}>چهارشنبه</option>
                    <option value={`پنجشنبه`}>پنجشنبه</option>
                  </select>
                </div>
                <div className="row w-75 m-auto p-3">
                  <button className="adSearchBtn" onClick={() => setFlag(3)}>
                    جستجو
                  </button>
                </div>
              </div>
            </StickyBox>
          </div>
        </div>
      </div>
    </div>
  );
}
