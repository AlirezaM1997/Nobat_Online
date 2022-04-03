import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Style/Result.css";
import { useAllState } from "../Provider";
import Image from "react-bootstrap/Image";
import data from "../data";
import ResultItem from "./ResultItem";
import DoctorList from "../DoctorList";
import StickyBox from "react-sticky-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faNotesMedical,
  faSearchPlus,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

export default function Result() {
  const { flag } = useAllState();
  const { setFlag } = useAllState();
  const { searchExp } = useAllState();
  const { searchDoc } = useAllState();
  const { allDoctors } = useAllState(data);
  const { noResult } = useAllState(false);
  const { setNoResult } = useAllState();
  const { adSearchName } = useAllState();
  const { adSearchExp } = useAllState();
  const { workingDay } = useAllState("");
  const { setAdSearchName } = useAllState();
  const { setAdSearchExp } = useAllState();
  const { setWorkingDay } = useAllState();

  const [isLoaded, setIsLoaded] = useState(true);
  const [render, setRender] = useState(false);

  const weekDays = [
    {
      value: "شنبه",
      label: "شنبه",
    },
    {
      value: "یکشنبه",
      label: "یکشنبه",
    },
    {
      value: "دوشنبه",
      label: "دوشنبه",
    },
    {
      value: "سه شنبه",
      label: "سه شنبه",
    },
    {
      value: "چهارشنبه",
      label: "چهارشنبه",
    },
    {
      value: "پنجشنبه",
      label: "پنجشنبه",
    },
  ];

  // console.log(workingDay);
  // console.log(adSearchExp);
  // console.log(flag);

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


  const setAdvancedRusult = () => {
    setFlag(3);
    setRender(true);
  }

  useEffect(() => {
    setRender(false);

    if (flag === 1) {
      const array = allDoctors.filter((item) =>
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
      const array = allDoctors.filter(
        (item) =>
          (item.fname.toLowerCase().includes(adSearchName.toLowerCase()) ||
            item.lname.toLowerCase().includes(adSearchName.toLowerCase())) &&
          item.expert.includes(adSearchExp) &&
          (workingDay === ""
            ? true
            : workingDay === []
            ? true
            : workingDay.length !== 0
            ? item.workDay.some((i) => workingDay.some((j) => j === i))
            : true)
      );
      if (array.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
    }
  });

  const handleChangeDay = (e) => {
    setWorkingDay(Array.isArray(e) ? e.map((x) => x.value) : "");
  };

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
                  .filter((item) => item.expert.includes(searchExp))
                  .map((item) => <ResultItem item={item} />)
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
                        .includes(adSearchName.toLowerCase()) ||
                        item.lname
                          .toLowerCase()
                          .includes(adSearchName.toLowerCase())) &&
                      item.expert.includes(adSearchExp) &&
                      (workingDay === ""
                        ? true
                        : workingDay === []
                        ? true
                        : workingDay.length !== 0
                        ? item.workDay.some((i) =>
                            workingDay.some((j) => j === i)
                          )
                        : true)
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
          <div className="col-md-4 col-12 pb-5 order-md-1 order-0">
            <StickyBox id="StickyBox" offsetTop={100} offsetBottom={-100}>
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
                    value={adSearchName}
                    onChange={(e) => setAdSearchName(e.target.value)}
                  ></input>
                  <p className="text-end text-warning h6 mb-1">
                    تخصص{" "}
                    <FontAwesomeIcon
                      className="mx-2 text-white"
                      icon={faNotesMedical}
                    />
                  </p>
                  <Select
                    menuPlacement="bottom"
                    className="px-1 my-2 w-100 rounded border-0 expertInput text-end"
                    placeholder="انتخاب کنید"
                    value={DoctorList.filter((obj) =>
                      adSearchExp.includes(obj.value)
                    )}
                    onChange={(e) => {
                      setAdSearchExp(e.value);
                    }}
                    options={DoctorList}
                    isSearchable={false}
                  />
                  <p className="text-end text-warning h6 mb-1">
                    روزهای کاری{" "}
                    <FontAwesomeIcon
                      className="mx-2 text-white"
                      icon={faCalendarDays}
                    />
                  </p>
                  <Select
                    menuPlacement="top"
                    className="px-1 my-2 w-100 rounded border-0 expertInput text-end"
                    placeholder="انتخاب کنید"
                    value={weekDays.filter((obj) =>
                      workingDay.includes(obj.value)
                    )}
                    options={weekDays}
                    onChange={handleChangeDay}
                    isSearchable={false}
                    isMulti
                    isClearable
                  />
                </div>
                <div className="row w-75 m-auto p-3">
                  <button className="adSearchBtn" onClick={() => setAdvancedRusult()}>
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
