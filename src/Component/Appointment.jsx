import "../Style/Appointment.css";
import { useAllState } from "../Provider";
import { useState, useEffect } from "react";
import CommentsBlock from "simple-react-comments";
import commentsData from "../commentsData";
import data from "../data";
import { DynamicStar } from "react-dynamic-star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowLeft,
  faLocationDot,
  faMoneyCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Appointment() {
  const { allDoctors } = useAllState(data);
  const { currentAppoin } = useAllState();
  const { setCurrentAppoin } = useAllState();
  const [selectedTime, setSelectedTime] = useState("");
  // console.log(selectedTime);

  useEffect(() => {
    if (selectedTime !== "") {
      let scrollDiv = document.getElementById("getAppoinRow").offsetTop;
      window.scrollTo({ top: scrollDiv - 400, behavior: "smooth" });
    }
  });
  const makeDate = (s) => {
    let n = String(s);
    let arr = [n.slice(0, 4), n.slice(4, 6), n.slice(6, 8)];
    return `${arr[0]}/${arr[1]}/${arr[2]}`;
  };

  const currentDocTimes = allDoctors
    .filter((item) => item.id === currentAppoin)
    .map((item) => item.date);
  const UpdateTable = () => {
    let values = Object.values(currentDocTimes[0]);
    let keys = Object.keys(currentDocTimes[0]);
    return keys.map((key, index) => {
      return (
        <tr>
          <th className="text-center bg-info p-2" key={index}>
            {makeDate(key)}
          </th>
          {values[index].map((value) => {
            return (
              <td>
                <button
                  disabled={false}
                  className={`table-btn ${
                    selectedTime === key + value ? "bg-warning" : ""
                  }`}
                  value={key + value}
                  id={key + value}
                  onClick={(e) => setSelectedTime(e.target.value)}
                >
                  {value}
                </button>
              </td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <>
      <div>
        <Link to={"/result"} className="">
          <div className="m-3 text-center text-md-start backToResult">
            {" "}
            <FontAwesomeIcon className="ms-1" icon={faArrowLeft} /> بازگشت به
            نتایج جستجو
          </div>
        </Link>
        <div className="appoinContent">
          <div className="container">
            {allDoctors
              .filter((item) => item.id === currentAppoin)
              .map((item) => (
                <div className="shadow-lg bg-white appoinBox">
                  <div className="cover-bg p-3 p-lg-4 ">
                    <div className="row">
                      <div className="col-lg-4 col-md-5 d-flex flex-column align-items-center">
                        <div>
                          {" "}
                          <DynamicStar
                            className="justify-content-center"
                            width={20}
                            height={20}
                            emptyStarColor={"gray"}
                            rating={item.rate}
                          />
                        </div>
                        <div className="docImg hover-effect bg-white shadow-sm p-1">
                          <img
                            src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${item.imgUrl}`}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-8 col-md-7 text-center text-md-end"
                        id="docInfo"
                      >
                        <h2 className="h1 mt-2 text-white">
                          دکتر {item.fname} {item.lname}
                        </h2>
                        <p className="h4 my-3 text-warning">
                          متخصص {item.expert}
                        </p>
                        <h5 className="text-light">
                          از دانشگاه {item.university}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col">
                      <div className="text-md-end text-center mb-2 d-flex align-items-center justify-content-center justify-content-md-end">
                        {`تومان`}{" "}
                        <b className="mx-1">
                          <span className="h5"> {item.visit} </span>
                          {" : "}
                          {` ویزیت`}
                        </b>{" "}
                        <FontAwesomeIcon className="ms-1" icon={faMoneyCheck} />
                      </div>
                      <div className="text-md-end text-center mb-2">
                        <b>
                          {` تلفن مطب`}
                          {" : "}
                        </b>{" "}
                        {item.phone}
                        <FontAwesomeIcon className="ms-1" icon={faPhone} />
                      </div>
                      <div className="text-md-end text-center mb-2">
                        <b>
                          {` نشانی`}
                          {" : "}
                        </b>{" "}
                        {item.address2}
                        <FontAwesomeIcon
                          className="ms-1"
                          icon={faLocationDot}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="getAppoin-section pt-4 px-3 px-lg-4 mt-2">
                    <div className="row my-3 justify-content-center">
                      <h5 className="text-center py-2 px-3 text-white bg-primary chooseAppoin">
                        لطفا از بین ساعت های فعال یکی را انتخاب نمایید
                      </h5>
                      <FontAwesomeIcon
                        className="arrowDown my-3 text-success"
                        icon={faArrowCircleDown}
                      />
                    </div>
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        <table dir="rtl">
                          <UpdateTable />
                        </table>
                      </div>
                    </div>
                    <div
                      className={`row mb-5 mt-2 align-items-center ${
                        selectedTime === "" ? "d-none" : ""
                      }`}
                      id="getAppoinRow"
                    >
                      <div className="col d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon
                          className="arrowDown my-3 text-warning"
                          icon={faArrowCircleDown}
                        />
                        <button className="getAppoinBtn">دریافت نوبت</button>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-5" />
                  <div className="work-experience-section px-3 px-lg-4">
                    <h2 className="h3 mb-4 text-end">نظرات کاربران</h2>
                    {/* <CommentsBlock
                  // comments={commentsData}
                  // signinUrl={"/signin"}
                  isLoggedIn
                  reactRouter // set to true if you are using react-router
                  // onSubmit={(text) => {
                  //   if (text.length > 0) {
                  //     this.setState({
                  //       comments: [
                  //         ...commentsData,
                  //         {
                  //           authorUrl: "#",
                  //           avatarUrl: "#avatarUrl",
                  //           createdAt: new Date(),
                  //           fullName: "Name",
                  //           text,
                  //         },
                  //       ],
                  //     });
                  //     console.log("submit:", text);
                  //   }
                  // }}
                /> */}
                    <div className="comments">
                      {item.comments.map((i) => (
                        <div className="comments-card comments-card-primary card shadow-sm">
                          <div className="comments-body">
                            <div className="h5 mb-1">
                              {i.name}
                            </div>
                            <div className="text-muted text-small mb-2">
                              {i.date}
                            </div>
                            <div>{i.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="" />
                  <div
                    className="contant-section px-3 px-lg-4 pb-4"
                    id="contact"
                  >
                    <h2 className="h3 text-end mb-3">نظرات</h2>
                    <h6 className="text-end mb-3">
                      لطفا نظر خود را ثبت نمایید
                    </h6>
                    <div className="row">
                      <div className="col-md-7 ">
                        <div className="my-2">
                          <form
                            action="https://formspree.io/your@email.com"
                            method="POST"
                          >
                            <div className="row">
                              <div className="col-6">
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                              <div className="col-6">
                                <input
                                  className="form-control"
                                  type="email"
                                  id="email"
                                  name="_replyto"
                                  placeholder="Your E-mail"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group my-2">
                              <textarea
                                className="form-control"
                                style={{ resize: "none" }}
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                required
                              ></textarea>
                            </div>
                            <button
                              className="btn btn-primary mt-2"
                              type="submit"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
