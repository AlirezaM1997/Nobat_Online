import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useFlagState } from "../Provider";

export default function Hero() {
  const { flag } = useFlagState(false);
  const  {setFlag}  = useFlagState();
  console.log(flag);
  // const [flag, setFlag] = useState(false);
  const [searchDoc, setSearchDoc] = useState("");
  const [searchExp, setSearchExp] = useState("");
  return (
    <section id="hero" className="d-flex align-items-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6">
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
                        !flag
                          ? "btn btn-warning w-100 _active"
                          : "btn btn-warning w-100"
                      }`}
                      id="docSearch"
                      onClick={() => {setFlag(true)}}
                    >
                      جستجوی نام پزشک
                    </button>
                  </div>
                  <div className="col-6 p-0">
                    <button
                      className={`${
                        flag
                          ? "btn btn-warning w-100 _active"
                          : "btn btn-warning w-100"
                      }`}
                      id="expSearch"
                      onClick={() => {setFlag(false)}}
                    >
                      جستجو بر اساس تخصص
                    </button>
                  </div>
                </div>
                <div className="row h-100">
                  <div className="bg-primary p-4">
                    {{flag} ? (
                      <div className="doctorSearch d-flex flex-column ">
                        <h5 className="searchTitle">
                          نام پزشک مورد نظر خود را وارد کنید{" "}
                        </h5>
                        <input
                          className="w-75 bg-light py-2 my-2 w-100 hero-input border-0"
                          dir="rtl"
                          value={searchDoc}
                          onChange={(e) => setSearchDoc(e.target.value)}
                        ></input>

                        <Link
                          className="text-black align-self-center"
                          to={`/result`}
                        >
                          <button className="btn btn-warning  px-5 mt-2">
                            جستجو
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div className="expertSearch d-flex flex-column">
                        <h5 className="searchTitle">
                          تخصص مورد نظر خود را وارد کنید{" "}
                        </h5>
                        <select
                          dir="rtl"
                          class="w-75 bg-light my-2 w-100 hero-input py-2 border-0"
                          value={searchExp}
                          onChange={(e) => setSearchExp(e.target.value)}
                        >
                          <option value={`عمومی`}>پزشک عمومی</option>
                          <option value={`داخلی`}>متخصص داخلی</option>
                          <option value={`زنان`}>متخصص زنان</option>
                          <option value={`اعصاب`}>متخصص اعصاب و روان</option>
                          <option value={`اطفال`}>متخصص اطفال</option>
                          <option value={`حلق`}>متخصص گوش و حلق و بینی</option>
                          <option value={`قلب`}>متخصص قلب و عروق</option>
                          <option value={`پوست`}>متخصص پوست</option>
                          <option value={`اورولوژی`}>متخصص اورولوژی</option>
                          <option value={`چشم`}>متخصص چشم</option>
                          <option value={`غدد`}>متخصص غدد</option>
                          <option value={`ارتوپدی`}>متخصص ارتوپدی</option>
                          <option value={`بیهوشی`}>متخصص بیهوشی</option>
                          <option value={`رادیولوژی`}>متخصص رادیولوژی</option>
                          <option value={`جراحی`}>متخصص جراحی</option>
                          <option value={`زیبایی`}>متخصص زیبایی</option>
                          <option value={`عفونی`}>
                            متخصص بیماری های عفونی
                          </option>
                          <option value={`روماتولوژی`}>متخصص روماتولوژی</option>
                          <option value={`تغذیه`}>متخصص تغذیه</option>
                          <option value={`مامایی`}>مامایی</option>
                          <option value={`دندانپزشکی`}>دندانپزشکی</option>
                          <option value={`روانپزشکی`}> روانپزشکی</option>
                          <option value={`روانشناسی`}>روانشناسی</option>
                        </select>
                        <Link
                          className="text-black align-self-center"
                          to={`/result`}
                        >
                          <button className="btn btn-warning  px-5 mt-2">
                            جستجو
                          </button>
                          
                        </Link>
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
