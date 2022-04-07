import { Link } from "react-router-dom";
import "../Style/UserProfile.css";
import Header2 from "./Header2";
import { useEffect, useState } from "react";
import users from "../All-Data/users";
import { useAllState } from "../Provider";
import UserProfileItem from "./UserProfileItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faMoneyCheck, faMoneyCheckDollar, faSquare } from "@fortawesome/free-solid-svg-icons";

export default function UserProfile() {
  const { currentUser } = useAllState({ userNameOfUser: "" });

  const [allApointment, setAllApointment] = useState(0);
  const [doneApointment, setDoneApointment] = useState(0);
  const [cancelApointment, setCancelApointment] = useState(0);
  const [reservedApointment, setReservedApointment] = useState(0);
  const [accountCredit, setAccountCredit] = useState(0);

  const [state, setState] = useState({
    history: false,
    canceled: false,
    reserved: true,
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
    if (state[value]) {
      setState({
        [value]: state[value],
      });
    } else {
      setState({
        [value]: !state[value],
      });
    }
  };

  useEffect(() => {
    let allApoinNum = 0;
    let doneApoinNum = 0;
    let cancelApoinNum = 0;
    let reservedApoinNum = 0;
    users
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (i) =>
          (allApoinNum =
            i.allApointments.history.length + i.allApointments.reserved.length)
      );
    setAllApointment(allApoinNum);
    users
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (item) =>
          (doneApoinNum = item.allApointments.history.filter(
            (item) => item.cancel === false
          ).length)
      );
    setDoneApointment(doneApoinNum);
    users
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (item) =>
          (cancelApoinNum = item.allApointments.history.filter(
            (item) => item.cancel === true
          ).length)
      );
    setCancelApointment(cancelApoinNum);
    users
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map((item) => (reservedApoinNum = item.allApointments.reserved.length));
    setReservedApointment(reservedApoinNum);
  }, []);

  return (
    <div className="mw-100">
      <div className="container back-prof mt-5 ">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-4">
            <div className="summary p-3">
              <div className="row d-flex justify-content-between mb-2">
                <div className="summaryItem">{allApointment}</div>
                <div className="text-end summaryItem">
                  کل نوبت ها
                  <FontAwesomeIcon
                    className="text-warning ms-2 squareIco"
                    icon={faSquare}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="row d-flex justify-content-between mb-2">
                <div className="summaryItem">{doneApointment}</div>

                <div className="text-end summaryItem">
                  نوبت های انجام شده
                  <FontAwesomeIcon
                    className="text-warning ms-2 squareIco"
                    icon={faSquare}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="row d-flex justify-content-between mb-2">
                <div className="summaryItem">{cancelApointment}</div>
                <div className="text-end summaryItem">
                  نوبت های کنسل شده
                  <FontAwesomeIcon
                    className="text-warning ms-2 squareIco"
                    icon={faSquare}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="row d-flex justify-content-between mb-2">
                <div className="summaryItem">{reservedApointment}</div>
                <div className="text-end summaryItem">
                  نوبت های رزرو شده
                  <FontAwesomeIcon
                    className="text-warning ms-2 squareIco"
                    icon={faSquare}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <hr></hr>
              <div className="row d-flex justify-content-between">
                <div className="summaryItem">{accountCredit}</div>
                <div className="text-end summaryItem">
                  اعتبار حساب
                  <FontAwesomeIcon
                    className="text-danger ms-2 squareIcoCredit"
                    icon={faMoneyCheckDollar}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="summary p-5 mt-4"></div>
          </div>
          <div className="col-lg-5 pb-5 order-lg-0 order-1">
            {state.history ? (
              <h5 className="text-end mb-3 p-3 bg-warning titleProf">
                تاریخچه نوبت ها
              </h5>
            ) : state.canceled ? (
              <h5 className="text-end mb-3 p-3 bg-warning titleProf">
                نوبت های لغو شده
              </h5>
            ) : state.reserved ? (
              <h5 className="text-end mb-3 p-3 bg-warning titleProf">
                نوبت های رزرو شده
              </h5>
            ) : state.setting ? (
              <h5 className="text-end mb-3 p-3 bg-warning titleProf">
                تنظیمات حساب کاربری
              </h5>
            ) : state.credit ? (
              <h5 className="text-end mb-3 p-3 bg-warning titleProf">
                اعتبار حساب
              </h5>
            ) : (
              ""
            )}
            {state.setting
              ? users
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.allApointments.map((item, index) => (
                      <div key={index}>
                        
                      </div>
                    ))
                  )
              : ""}
            {state.history
              ? users
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.allApointments.history.map((item, index) => (
                      <div key={index}>
                        <UserProfileItem item={item} state={state} />
                      </div>
                    ))
                  )
              : ""}
            {state.canceled
              ? users
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.allApointments.history
                      .filter((item) => item.cancel)
                      .map((item, index) => (
                        <div key={index}>
                          <UserProfileItem item={item} state={state} />
                        </div>
                      ))
                  )
              : ""}
            {state.reserved
              ? users
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.allApointments.reserved.map((item, index) => (
                      <div key={index}>
                        <UserProfileItem item={item} state={state} />
                      </div>
                    ))
                  )
              : ""}
          </div>
          <div className="col-lg-3 col-12 pb-5 order-lg-1 order-0 dashboard">
            <div className="author-card pb-2">
              <div className="author-card-cover"></div>
              {users
                .filter((item) => item.username === currentUser.userNameOfUser)
                .map((item) => (
                  <div className="author-card-profile d-flex  justify-content-end ">
                    <div className="author-card-details d-flex flex-column justify-content-end justify-content-lg-center pe-2">
                      <h5 className="author-card-name text-center text-lg">
                        {item.fullName}
                      </h5>
                      <span className="author-card-joined text-center">
                        Joined <br></br>
                        {item.joined}
                      </span>
                    </div>
                    <div className="author-card-avatar">
                      <img src={item.img}></img>
                    </div>
                  </div>
                ))}
            </div>
            <div className="panel">
              <nav className="">
                <button
                  className="panel-item d-block bg-primary mb-1 position-relative "
                  onClick={() => clickHandler("setting")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium">
                        تنظیمات حساب کاربری .
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  onClick={() => clickHandler("reserved")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        نوبت های رزرو شده .
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  onClick={() => clickHandler("canceled")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        نوبت های لغو شده .
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  onClick={() => clickHandler("history")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        تاریخچه نوبت ها .
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  className="panel-item d-block bg-primary mb-1 position-relative"
                  onClick={() => clickHandler("credit")}
                >
                  <div className="d-flex justify-content-lg-end justify-content-center align-items-center">
                    <div>
                      <div className="d-inline-block font-weight-medium text-uppercase">
                        اعتبار حساب .
                      </div>
                    </div>
                  </div>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
