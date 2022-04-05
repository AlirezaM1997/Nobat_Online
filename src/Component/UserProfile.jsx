import { Link } from "react-router-dom";
import "../Style/UserProfile.css";
import Header2 from "./Header2";
import { useEffect, useState } from "react";
import users from "../All-Data/users";
import { useAllState } from "../Provider";
import UserProfileItem from "./UserProfileItem";

export default function UserProfile() {
  const { currentUser } = useAllState({ userNameOfUser: "" });

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

  return (
    <div className="mw-100">
      <div className="container back-prof mt-5 ">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-3">
            <div className="summary p-2">
              <div className="row d-flex">
                <div className="text-end summaryItem">کل نوبت ها</div><div className=" summaryItem">4</div>
              </div>
              <div className="row">
                <div className="text-end summaryItem">نوبت های انجام شده</div><div className=" summaryItem">4</div>
              </div>
              <div className="row">
                <div className="text-end summaryItem">نوبت های کنسل شده</div><div className=" summaryItem">4</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pb-5 order-lg-0 order-1">
            {state.history ? (
              <h5 className="text-end mb-3 p-3 bg-warning Title">
                تاریخچه نوبت ها
              </h5>
            ) : state.canceled ? (
              <h5 className="text-end mb-3 p-3 bg-warning Title">
                نوبت های لغو شده
              </h5>
            ) : state.reserved ? (
              <h5 className="text-end mb-3 p-3 bg-warning Title">
                نوبت های رزرو شده
              </h5>
            ) : state.setting ? (
              <h5 className="text-end mb-3 p-3 bg-warning Title">
                تنظیمات حساب کاربری
              </h5>
            ) : state.credit ? (
              <h5 className="text-end mb-3 p-3 bg-warning Title">
                اعتبار حساب
              </h5>
            ) : (
              ""
            )}
            {state.history
              ? users
                  .filter(
                    (item) => item.username === currentUser.userNameOfUser
                  )
                  .map((item) =>
                    item.history.map((item, index) => (
                      <div key={index}>
                        <UserProfileItem item={item} />
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
                    item.history
                      .filter((item) => item.cancel)
                      .map((item, index) => (
                        <div key={index}>
                          <UserProfileItem item={item} />
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
                        {item.fname} {item.lname}
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
