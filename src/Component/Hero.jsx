import "../Style/Hero.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAllState } from "../Provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DoctorList from "../DoctorList";
import Select from "react-select";

export default function Hero() {
  const [hintExp, setHintExp] = useState(false);
  const [hintDoc, setHintDoc] = useState(false);
  const { flag } = useAllState(1);
  const { setFlag } = useAllState();
  const { searchExp } = useAllState("");
  const { setSearchExp } = useAllState();
  const { searchDoc } = useAllState("");
  const { setSearchDoc } = useAllState();
  // console.log(flag);

  const handlerSearchExp = (event) => {
    const value = event.value
    setSearchExp(value)
    setHintExp(false);
}

  const navigateToExp = useNavigate();
  const setRedirectExp = () => {
    setFlag(1);
    if (searchExp === "") {
      setHintExp(true);
    } else {
      navigateToExp("/result");
    }
  };
  const setRedirectDoc = () => {
    setFlag(2);
    if (searchDoc === "") {
      setHintDoc(true);
    } else {
      navigateToExp("/result");
    }
  };

  return (
    <section id="hero" className="d-flex  p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 searchBoxCol">
            <div className="row">
              <h3 className="hero-title text-center p-3">
                به سایت نوبت دهی آنلاین پزشکان ایران خوش آمدید
              </h3>
            </div>
            <div className="row">
              <div className="container d-flex flex-column w-100 searchBox">
                <div className="row ">
                  <div className="col-6 p-0 ">
                    <button
                      className={`${
                        flag === 1
                          ? "btn btn-warning w-100 _active"
                          : "btn btn-warning w-100"
                      }`}
                      id="docSearch"
                      onClick={() => {
                        setFlag(2);
                      }}
                    >
                      جستجوی نام پزشک
                    </button>
                  </div>
                  <div className="col-6 p-0">
                    <button
                      className={`${
                        flag === 2 || flag === 3
                          ? "btn btn-warning w-100 _active"
                          : "btn btn-warning w-100"
                      }`}
                      id="expSearch"
                      onClick={() => {
                        setFlag(1);
                      }}
                    >
                      جستجو بر اساس تخصص
                    </button>
                  </div>
                </div>
                <div className="row h-100">
                  <div className="bg-primary p-4 searchBoxBottom">
                    {flag === 2 || flag === 3 ? (
                      <div className="doctorSearch d-flex flex-column ">
                        <h5 className="text-white text-right">
                          نام پزشک مورد نظر خود را وارد کنید{" "}
                        </h5>
                        <input
                          className="bg-light py-2 my-2 w-100 hero-input rounded border-0"
                          dir="rtl"
                          value={searchDoc}
                          onChange={(e) => {
                            setSearchDoc(e.target.value);
                            setHintDoc(false);
                          }}
                        ></input>

                        <span
                          className={`${hintDoc ? "showHint" : "hideHint"}`}
                        >
                          لطفا نام یک پزشک را وارد نمایید
                          <FontAwesomeIcon
                            className="mx-2 text-danger"
                            icon={faArrowLeft}
                          />
                        </span>
                        <button
                          className="btn btn-warning text-black align-self-center px-5 mt-2 "
                          id="searchBtn"
                          onClick={setRedirectDoc}
                        >
                          جستجو
                        </button>
                      </div>
                    ) : (
                      <div className="expertSearch d-flex flex-column">
                        <h5 className="text-white text-right">
                          تخصص مورد نظر خود را وارد کنید{" "}
                        </h5>
                        <Select 
                          menuPlacement="bottom"
                          className="w-75 bg-light my-2 w-100 hero-input text-end border-0 rounded"
                          placeholder="انتخاب کنید"
                          value={DoctorList.filter((obj) =>
                            searchExp.includes(obj.value)
                          )}
                          options={DoctorList}
                          onChange={handlerSearchExp}
                          isSearchable={false}
                        />

                        <span
                          className={`${hintExp ? "showHint" : "hideHint"}`}
                        >
                          لطفا یک تخصص را انتخاب کنید
                          <FontAwesomeIcon
                            className="mx-2 text-danger"
                            icon={faArrowLeft}
                          />
                        </span>
                        <button
                          className="btn btn-warning text-black align-self-center px-5 mt-2 "
                          id="searchBtn"
                          onClick={setRedirectExp}
                        >
                          جستجو
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
