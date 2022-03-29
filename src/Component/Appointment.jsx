import "../Style/Appointment.css";
import { useAllState } from "../Provider";
import { useState } from "react";
import CommentsBlock from "simple-react-comments";
import commentsData from "../commentsData";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function Appointment() {
  const { allDoctors } = useAllState(data);
  const { currentAppoin } = useAllState();
  const { setCurrentAppoin } = useAllState();
  const [selectedTime, setSelectedTime] = useState();
  console.log(selectedTime);
  // cons () => {
  //   document.getElementById(selectedTime).classList.toggle("bg-warning");
  // };

  return (
    <>
      <div>
        <div className="appoinContent">
          <div className="container">
            {allDoctors
              .filter((item) => item.id === currentAppoin)
              .map((item) => (
                <div className="shadow-lg bg-white appoinBox">
                  <div className="cover-bg p-3 p-lg-4 text-white">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="docImg hover-effect bg-white shadow-sm p-1">
                          <img
                            src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${item.imgUrl}`}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-7 text-center text-md-end">
                        <h2 className="h1 mt-2">
                          دکتر {item.fname} {item.lname}
                        </h2>
                        <p>متخصص {item.expert}</p>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                  <div className="getAppoin-section pt-4 px-3 px-lg-4 mt-5">
                    <div className="row my-3">
                      <h3 className="text-center text-primary">
                        لطفا از بین ساعت های فعال یکی را انتخاب نمایید
                      </h3>
                      <FontAwesomeIcon
                        className="arrowDown my-3"
                        icon={faArrowCircleDown}
                      />
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <table>
                          <thead className="">
                            <tr>
                              <th className="text-center bg-warning">
                                پنجشنبه
                              </th>
                              <th className="text-center bg-warning">
                                چهارشنبه
                              </th>
                              <th className="text-center bg-warning">
                                سه شنبه
                              </th>
                              <th className="text-center bg-warning">دوشنبه</th>
                              <th className="text-center bg-warning">یکشنبه</th>
                              <th className="text-center bg-warning">شنبه</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <button
                                  id="10Thu"
                                  value={`10Thu`}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                  className={`table-btn ${
                                    selectedTime === "10Thu" ? "bg-warning" : ""
                                  }`}
                                >
                                  10 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  value={"10Wed"}
                                  id={"10Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                  className={`table-btn ${
                                    selectedTime === "10Wed" ? "bg-warning" : ""
                                  }`}
                                >
                                  10 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "10Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"10Tue"}
                                  id={"10Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  10 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "10Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"10Mon"}
                                  id={"10Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  10 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "10Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"10Sun"}
                                  id={"10Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  10 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "10Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"10Sat"}
                                  id={"10Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  10 AM
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Thu" ? "bg-warning" : ""
                                  }`}
                                  value={"11Thu"}
                                  id={"11Thu"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Wed" ? "bg-warning" : ""
                                  }`}
                                  value={"11Wed"}
                                  id={"11Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"11Tue"}
                                  id={"11Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"11Mon"}
                                  id={"11Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"11Sun"}
                                  id={"11Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "11Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"11Sat"}
                                  id={"11Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  11 AM
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Thu" ? "bg-warning" : ""
                                  }`}
                                  value={"12Thu"}
                                  id={"12Thu"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Wed" ? "bg-warning" : ""
                                  }`}
                                  value={"12Wed"}
                                  id={"12Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"12Tue"}
                                  id={"12Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"12Mon"}
                                  id={"12Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"12Sun"}
                                  id={"12Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "12Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"12Sat"}
                                  id={"12Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  12 AM
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Thu" ? "bg-warning" : ""
                                  }`}
                                  value={"16Thu"}
                                  id={"16Thu"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Wed" ? "bg-warning" : ""
                                  }`}
                                  value={"16Wed"}
                                  id={"16Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"16Tue"}
                                  id={"16Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"16Mon"}
                                  id={"16Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"16Sun"}
                                  id={"16Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "16Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"16Sat"}
                                  id={"16Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  16 PM
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Thu" ? "bg-warning" : ""
                                  }`}
                                  value={"18Thu"}
                                  id={"18Thu"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Wed" ? "bg-warning" : ""
                                  }`}
                                  value={"18Wed"}
                                  id={"18Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"18Tue"}
                                  id={"18Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"18Mon"}
                                  id={"18Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"18Sun"}
                                  id={"18Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "18Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"18Sat"}
                                  id={"18Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  18 PM
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Thu" ? "bg-warning" : ""
                                  }`}
                                  value={"19Thu"}
                                  id={"19Thu"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Wed" ? "bg-warning" : ""
                                  }`}
                                  value={"19Wed"}
                                  id={"19Wed"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Tue" ? "bg-warning" : ""
                                  }`}
                                  value={"19Tue"}
                                  id={"19Tue"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Mon" ? "bg-warning" : ""
                                  }`}
                                  value={"19Mon"}
                                  id={"19Mon"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Sun" ? "bg-warning" : ""
                                  }`}
                                  value={"19Sun"}
                                  id={"19Sun"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                              <td>
                                <button
                                  className={`table-btn ${
                                    selectedTime === "19Sat" ? "bg-warning" : ""
                                  }`}
                                  value={"19Sat"}
                                  id={"19Sat"}
                                  onClick={(e) =>
                                    setSelectedTime(e.target.value)
                                  }
                                >
                                  19 PM
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-sm-6 d-flex justify-content-center">
                        <button>دریافت نوبت</button>
                      </div>
                      <div className="col-sm-6 text-center">
                        {`ویزیت : ${item.visit} تومان`}
                      </div>
                    </div>
                  </div>
                  {/* <hr className="" /> */}
                  {/* <div className="skills-section px-3 px-lg-4">
                <h2 className="h3 mb-3">Professional Skills</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <span>HTML</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="100"
                          data-aos-anchor=".skills-section"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span>CSS</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="200"
                          data-aos-anchor=".skills-section"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span>JavaScript</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="300"
                          data-aos-anchor=".skills-section"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2">
                      <span>Adobe Photoshop</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="400"
                          data-aos-anchor=".skills-section"
                          style={{ width: "80%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span>Sketch</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="500"
                          data-aos-anchor=".skills-section"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span>Adobe XD</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          data-aos="zoom-in-right"
                          data-aos-delay="600"
                          data-aos-anchor=".skills-section"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                  <hr className="" />
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
                    {/* <div className="comments">
                  <div className="comments-card comments-card-primary card shadow-sm">
                    <div className="comments-body">
                      <div className="h5 mb-1">
                        Junior Web Developer
                        <span className="text-muted h6">at Indie Studio</span>
                      </div>
                      <div className="text-muted text-small mb-2">
                        Jan, 2011 - May, 2013
                      </div>
                      <div>
                        User generated content in real-time will have multiple
                        touchpoints for offshoring. Organically grow the
                        holistic world view of disruptive innovation via
                        workplace diversity and empowerment.
                      </div>
                    </div>
                  </div>
                </div> */}
                  </div>
                  <hr className="" />
                  <div
                    className="contant-section px-3 px-lg-4 pb-4"
                    id="contact"
                  >
                    <h2 className="h3 text mb-3">Contact</h2>
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
                      <div className="col">
                        <div className="mt-2">
                          <h3 className="h6">Address</h3>
                          <div className="pb-2 text-secondary">
                            140, City Center, New York, U.S.A
                          </div>
                          <h3 className="h6">Phone</h3>
                          <div className="pb-2 text-secondary">
                            +0718-111-0011
                          </div>
                          <h3 className="h6">Email</h3>
                          <div className="pb-2 text-secondary">
                            Joyce@company.com
                          </div>
                        </div>
                      </div>
                      <div className="col d-none d-print-block">
                        <div className="mt-2">
                          <div>
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-twitter mr-1"></i>
                                <span>https://twitter.com/templateflip</span>
                              </div>
                            </div>
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-facebook mr-1"></i>
                                <span>
                                  https://www.facebook.com/templateflip
                                </span>
                              </div>
                            </div>
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-instagram mr-1"></i>
                                <span>
                                  https://www.instagram.com/templateflip
                                </span>
                              </div>
                            </div>
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-github mr-1"></i>
                                <span>https://github.com/templateflip</span>
                              </div>
                            </div>
                          </div>
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
