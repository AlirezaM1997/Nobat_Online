import { Link } from "react-router-dom";
import "../Style/UserProfile.css";
import Header2 from "./Header2";
import { useEffect, useState } from "react";
import users from "../All-Data/users";
import { useAllState } from "../Provider";
import UserProfileItem from "./UserProfileItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import EditProfile from "./EditProfile";
export default function UserProfile() {
  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { updateAppoinList } = useAllState();
  const { setRender } = useAllState();

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
    // setRender(false);

    let allApoinNum = 0;
    let doneApoinNum = 0;
    let cancelApoinNum = 0;
    let reservedApoinNum = 0;
    let accountCreditAmount = 0;
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (i) =>
          (allApoinNum =
            i.allApointments.history.length + i.allApointments.reserved.length)
      );
    setAllApointment(allApoinNum);
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (item) =>
          (doneApoinNum = item.allApointments.history.filter(
            (item) => item.cancel === false
          ).length)
      );
    setDoneApointment(doneApoinNum);
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map(
        (item) =>
          (cancelApoinNum = item.allApointments.history.filter(
            (item) => item.cancel === true
          ).length)
      );
    setCancelApointment(cancelApoinNum);
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map((item) => (reservedApoinNum = item.allApointments.reserved.length));
    setReservedApointment(reservedApoinNum);
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)
      .map((item) => (accountCreditAmount = item.credit));
    setAccountCredit(accountCreditAmount);
  }, []);

  const Summary = () => {
    return (
      <>
        <div className="summary p-xl-4 p-3">
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
            <div className="d-flex summaryItem">
              {" "}
              <span className="me-2"> تومان </span>{" "}
              <span> {accountCredit}</span>
            </div>
            <div className="text-end summaryItem d-flex align-items-center">
              <span>اعتبار حساب</span>
              <FontAwesomeIcon
                className="text-danger ms-2 squareIcoCredit"
                icon={faMoneyCheckDollar}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="summary p-5 mt-4"></div>
      </>
    );
  };
  return (
    <div className="mw-100">
      <div className="container back-prof mt-5 py-md-3 px-xl-4 px-lg-3 p-4">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-4 col-md-5 d-lg-block d-md-none d-block order-lg-0 order-2 ">
            <Summary />
          </div>
          <div className="col-lg-5 col-md-7 pb-5 order-lg-1 order-md-0 order-1 ">
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
            {state.history
              ? updateAppoinList
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
              ? updateAppoinList
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
              ? updateAppoinList
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.allApointments.reserved.map((item, index) => (
                      <div key={index}>
                        <UserProfileItem
                          item={item}
                          state={state}
                        />
                      </div>
                    ))
                  )
              : ""}
            {state.setting
              ? updateAppoinList
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item, index) => <EditProfile item={item} />)
              : ""}
            {state.credit
              ? updateAppoinList
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item, index) => (
                    <div className="container p-2">
                      <div className="row" dir="rtl">
                        <div>
                          اعتبار حساب شما : <span>{item.credit}</span>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-5 my-4">
                          <button className="">افزایش اعتبار</button>
                        </div>
                      </div>
                    </div>
                  ))
              : ""}
          </div>
          <div className="col-lg-3 col-md-5 pb-5 order-lg-2 order-md-1 order-0 dashboard">
            <div className="author-card pb-2">
              <div className="author-card-cover"></div>
              {updateAppoinList
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
            <div className="d-lg-none d-md-block d-none mt-5">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
