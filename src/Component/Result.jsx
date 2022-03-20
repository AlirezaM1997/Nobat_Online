import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Result.css";
import { useAllState } from "../Provider";
import StickyBox from "react-sticky-box";
import { DynamicStar } from "react-dynamic-star";
import { faLocationDot, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import data from "../data";
import DoctorList from "./DoctorList";

export default function Result() {
  const { flag } = useAllState();
  const { searchExp } = useAllState();
  const { searchDoc } = useAllState('!');
  const {allDoctors} = useAllState(data);
  const {isAdvancedSearch} = useAllState();
  const {setIsAdvancedSearch} = useAllState();

  
  const [isLoaded, setIsLoaded] = useState(true);
  const [nameDoc, setNameDoc] = useState("");
  const [expertDoc, setExpertDoc] = useState("");
console.log(isAdvancedSearch);
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
  // const navigateToExp = useNavigate();

  // const setRedirectDoc = () => {
    
  //     setIsAdvancedSearch(true)
    
  //     navigateToExp("/result");
    
  // };
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
            {((!flag && !isAdvancedSearch)
              ? allDoctors.filter((item) =>
                  item.expert.toLowerCase().includes(searchExp.toLowerCase())
                )
              : allDoctors.filter(
                  (item) =>
                    item.fname
                      .toLowerCase()
                      .includes(searchDoc.toLowerCase()) ||
                    item.lname.toLowerCase().includes(searchDoc.toLowerCase())
                )
            ).map((item) => (
              <div className="cart m-auto mb-2 ">
                <span className="remove-item"></span>
                <div className="px-3 my-2">
                  <div className="container cart-doctor p-0  justify-content-end">
                    <div className="row d-flex flex-column flex-sm-row rowOfCart">
                      <div className="col-sm-3 col-6 star">
                        <DynamicStar
                          width={15}
                          height={15}
                          emptyStarColor={"gray"}
                          rating={item.rate}
                        />
                      </div>
                      <div className="col-sm-6 col-6 d-flex flex-column cart-doctor-info ">
                        <div className="row">
                          <div className="d-flex justify-content-end flex-column flex-sm-row">
                            <h4 className="cart-doctor-title text-end d-inline">
                              دکتر {item.fname} {item.lname}
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="text-info fw-bold text-sm-end text-center">
                            متخصص {item.expert}
                          </div>
                        </div>
                        <div className="row">
                          <span className="text-muted font-weight-medium text-sm-end text-center">
                            از دانشگاه : {item.university}
                          </span>
                        </div>
                        <div className="row">
                          <span className="text-secondary font-weight-medium text-sm-end text-center mt-1">
                            : روزهای کاری <br></br>
                            {item.date.map((i) => (
                              <span className="d-inline-block bg-warning text-dark m-1 rounded py-1 px-2 pb-1">
                                {" " + i + "  "}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6 cart-doctor-thumb ">
                        <img
                          className="rounded"
                          src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${item.imgUrl}`}
                          alt="doctor"
                        />
                      </div>
                    </div>
                    <div className="row d-flex align-items-center flex-column flex-sm-row ">
                      <div className="col order-sm-0 order-1 d-flex justify-content-sm-start justify-content-center">
                        <Link to={"#"}>
                          <button id="appointment">دریافت نوبت</button>
                        </Link>
                      </div>
                      <div className="col order-sm-1 order-0 d-flex align-items-center justify-content-sm-end justify-content-center">
                        <span className="text-muted font-weight-medium text-sm-end text-center">
                          آدرس مطب : {item.address}
                        </span>
                        <FontAwesomeIcon
                          className="mx-2"
                          icon={faLocationDot}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isAdvancedSearch ? (
              <div>
                <h3>Advanced Search</h3>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4 col-12 pb-5 order-md-1 order-0" id="">
            <StickyBox id="StickyBox" offsetTop={170} offsetBottom={-100}>
              <div className="container p-1" id="search">
                <div className="row w-100 m-0 p-3 d-flex justify-content-center">
                  <div className="col text-center mb-2">
                    <h5>
                      جستجوی پیشرفته
                      <FontAwesomeIcon
                        className="mx-2 text-warning"
                        icon={faSearchPlus}
                      />
                    </h5>
                  </div>
                </div>
                <div className="row w-100 m-0 p-3 pt-0 d-flex align-items-center flex-column justify-content-center">
                  <p className="text-end mb-1">نام پزشک</p>
                  <input
                    dir="rtl"
                    className=""
                    value={nameDoc}
                    onChange={(e) => setNameDoc(e.target.value)}
                  ></input>
                  <p className="text-end mb-1">تخصص</p>
                  <select
                    dir="rtl"
                    class=" bg-light my-2 w-100  py-2 border-0"
                    value={expertDoc}
                    onChange={(e) => {
                      setExpertDoc(e.target.value);
                    }}
                  >
                    <DoctorList />
                  </select>
                </div>
                <div className="row w-100 m-0 p-3">
                  <button onClick={setIsAdvancedSearch(true)}>
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
// const getIndexById = (id) => {
//     return items.findIndex((item) => item.id === id);
//   };
