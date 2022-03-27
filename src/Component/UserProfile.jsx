import { Link } from "react-router-dom";
import "../Style/UserProfile.css";
import Header2 from "./Header2";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
export default function UserProfile() {
  const [state, setState] = useState({
    history: false,
    canceled: false,
    reserved: false,
    setting: false,
    credit: false,
  });
  const clickHandler = (value) => {
    setState({
      history: false,
      canceled: false,
      reserved: false,
      setting: false,
      credit: false,
    });
    setState({ [value]: !state[value] });
  };

  useEffect(() => {});
  // const reserved = [
  //   {
  //     id: "1",
  //     fname: "محمد علی",
  //     lname: "صفری",
  //     expert: "اورولوژی",
  //     cancel: false,
  //     date: "1401/10/25",
  //     imgUrl: "544345.jpeg",
  //   },
  //   {
  //     id: "2",
  //     fname: "محمد",
  //     lname: "رضایی",
  //     expert: "گوش و حلق و بینی",
  //     cancel: true,
  //     date: "1400/05/14",
  //     imgUrl: "156921.jpeg",
  //   }]
  const History = [
    {
      id: "1",
      fname: "علیرضا",
      lname: "صابری",
      expert: "اورولوژی",
      cancel: false,
      date: "1400/10/25",
      imgUrl: "544345.jpeg",
    },
    {
      id: "2",
      fname: "محمد",
      lname: "رضایی",
      expert: "گوش و حلق و بینی",
      cancel: true,
      date: "1400/05/14",
      imgUrl: "156921.jpeg",
    },
    {
      id: "3",
      fname: "علی",
      lname: "نوروزی",
      expert: "داخلی",
      cancel: false,
      date: "1400/11/20",
      imgUrl: "643966.jpeg",
    },
    {
      id: "4",
      fname: "احمد",
      lname: "قادری",
      expert: "بیماری های عفونی",
      cancel: false,
      date: "1400/12/02",
      imgUrl: "574387.jpeg",
    },
    {
      id: "5",
      fname: "شهرام",
      lname: "کاظمی",
      expert: "اعصاب و روان",
      cancel: true,
      date: "1400/02/17",
      imgUrl: "455837.jpeg",
    },
    {
      id: "6",
      fname: "محمود",
      lname: "علوی",
      expert: "قلب و عروق",
      cancel: false,
      date: "1400/10/03",
      imgUrl: "169469.jpeg",
    },
  ];

  return (
    <div className="mw-100">
      <div className="container back-prof ">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-8 pb-5 order-lg-0 order-1">
            {state.history ? (
              <h5 className="text-end mb-3 bg-warning p-2 border border-primary">
                تاریخچه نوبت ها
              </h5>
            ) : state.canceled ? (
              <h5 className="text-end mb-3 bg-warning p-2 border border-primary">
                نوبت های لغو شده
              </h5>
            ) : state.reserved ? (
              <h5 className="text-end mb-3 bg-warning p-2 border border-primary">
                نوبت های رزرو شده
              </h5>
            ) : state.setting ? (
              <h5 className="text-end mb-3 bg-warning p-2 border border-primary">
                تنظیمات حساب کاربری
              </h5>
            ) : state.credit ? (
              <h5 className="text-end mb-3 bg-warning p-2 border border-primary">
                اعتبار حساب
              </h5>
            ) : (
              ""
            )}
            {state.history
              ? History.map((item) => (
                  <div className="cart-item m-auto mb-2 ">
                    <span className="top-right-dot"></span>
                    <div className="px-3 my-3">
                      <div className="cart-item-doctor" to={"#"}>
                        <div className="d-flex flex-column cart-item-doctor-info">
                          <div className="row">
                            <div className="d-flex justify-content-between">
                              {item.cancel ? (
                                <div className="text-lg text-danger font-weight-medium pb-1 text-end d-inline">
                                  کنسل شد
                                </div>
                              ) : (
                                <div className="text-lg text-success font-weight-medium pb-1 text-end d-inline">
                                  انجام شد
                                </div>
                              )}
                              <h4 className="cart-item-doctor-title text-end d-inline">
                                دکتر {item.fname} {item.lname}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="text-success font-weight-medium text-end">
                              متخصص : {item.expert}
                            </div>
                          </div>
                          <div className="row">
                            <span className="text-success font-weight-medium text-end">
                              {item.date}
                            </span>
                          </div>
                        </div>
                        <div className="cart-item-doctor-thumb">
                          <img
                            src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${item.imgUrl}`}
                            alt="doctor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
            {state.canceled
              ? History.filter((item) => item.cancel).map((item) => (
                  <div className="cart-item m-auto mb-2 ">
                    <span className="top-right-dot"></span>
                    <div className="px-3 my-3">
                      <div className="cart-item-doctor" to={"#"}>
                        <div className="d-flex flex-column cart-item-doctor-info">
                          <div className="row">
                            <div className="d-flex justify-content-between">
                              {item.cancel ? (
                                <div className="text-lg text-danger font-weight-medium pb-1 text-end d-inline">
                                  کنسل شد
                                </div>
                              ) : (
                                ""
                              )}
                              <h4 className="cart-item-doctor-title text-end d-inline">
                                دکتر {item.fname} {item.lname}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="text-success font-weight-medium text-end">
                              متخصص : {item.expert}
                            </div>
                          </div>
                          <div className="row">
                            <span className="text-success font-weight-medium text-end">
                              {item.date}
                            </span>
                          </div>
                        </div>
                        <div className="cart-item-doctor-thumb">
                          <img
                            src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${item.imgUrl}`}
                            alt="doctor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="col-lg-4 col-12 pb-5 order-lg-1 order-0 ">
            <div className="author-card pb-3">
              <div className="author-card-cover"></div>
              <div className="author-card-profile d-flex  justify-content-end ">
                <div className="author-card-details d-flex flex-column justify-content-end justify-content-lg-center pe-2">
                  <h5 className="author-card-name text-end text-lg">
                    {`علی اصغر آقچه لو`}
                  </h5>
                  <span className="author-card-joined text-center">
                    Joined <br></br>
                    {`February 06, 2017`}
                  </span>
                </div>
                <div className="author-card-avatar">
                  <img
                    src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/avatar.jpg")}
                    
                  ></img>
                </div>
              </div>
            </div>
            <div className="panel">
              <nav className="">
                <Link className="panel-item d-block bg-primary mb-1 position-relative " to={"#"}>
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium">
                        تنظیمات حساب کاربری .
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="panel-item d-block bg-primary mb-1 position-relative" to={"#"}>
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        نوبت های رزرو شده .
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  to={"#"}
                  onClick={() => clickHandler("canceled")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        نوبت های لغو شده .
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  to={"#"}
                  onClick={() => clickHandler("history")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        تاریخچه نوبت ها .
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="panel-item d-block bg-primary mb-1 position-relative" to={"#"}>
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        اعتبار حساب .
                      </div>
                    </div>
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
