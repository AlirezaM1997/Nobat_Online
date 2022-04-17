import { faCircle, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAllState } from "../Provider";

export default function ProfileItem(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const { allDoctors } = useAllState();
  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { currentDoctor } = useAllState({ userNameOfDoctor: "" });
  const { allUsers } = useAllState();
  const { setAllUsers } = useAllState();
  const { setAllDoctors } = useAllState();
  const { auth } = useAllState(false);
  const { docAuth } = useAllState(false);

  const getUserIndexByUserName = (id) => {
    const arr = allUsers.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].allApointments;
    return arr.findIndex((item) => item.uniqId === id);
  };
  const getUserIndexById = (id, u) => {
    const arr = allUsers.filter((item) => item.username === u)[0]
      .allApointments;
    return arr.findIndex((item) => item.uniqId === id);
  };
  const getDoctorIndexById = (id, u) => {
    const arr = allDoctors.filter((item) => item.username === u)[0]
      .allApointments;
    return arr.findIndex((item) => item.uniqId === id);
  };
  const getDoctorIndexByUserName = (id) => {
    const arr = allDoctors.filter(
      (item) => item.username === currentDoctor.userNameOfDoctor
    )[0].allApointments;
    console.log(id);
    return arr.findIndex((item) => item.uniqId === id);
  };
  const cancelAppoin = (id) => {
    if (auth) {
      //cancel from user
      const array = [...allUsers];
      const filteredArr = array.filter(
        (item) => item.username === currentUser.userNameOfUser
      )[0].allApointments[getUserIndexByUserName(id)];
      filteredArr.reserved = false;
      filteredArr.cancel = true;
      const doctorId = filteredArr.id;
      const addCredit = allDoctors.filter((i) => i.id === doctorId)[0].visit;
      array.filter(
        (item) => item.username === currentUser.userNameOfUser
      )[0].credit += addCredit;
      setAllUsers(array);
      //
      //delete appointment from doctor account
      const arr = [...allDoctors];
      const selectedTime = filteredArr.date;
      const _id = filteredArr.id;
      const _userName = arr.filter((i) => i.id === _id)[0].username;
      const _doctorId = array.filter(
        (item) => item.username === currentUser.userNameOfUser
      )[0].id;
      console.log(arr.filter((item) => item.id === doctorId)[0]);
      arr.filter((item) => item.id === doctorId)[0].allApointments[
        getDoctorIndexById(_doctorId + selectedTime, _userName)
      ].reserved = false;
      arr.filter((item) => item.id === doctorId)[0].allApointments[
        getDoctorIndexById(_doctorId + selectedTime, _userName)
      ].cancel = true;
      arr.filter((item) => item.id === doctorId)[0].credit -= addCredit;

      setAllDoctors(arr);
    } else {
      //cancel from doctor
      const array = [...allDoctors];
      const filteredArr = array.filter(
        (item) => item.username === currentDoctor.userNameOfDoctor
      )[0].allApointments[getDoctorIndexByUserName(id)];
      filteredArr.reserved = false;
      filteredArr.cancel = true;
      const userId = filteredArr.id;
      const visit = array.filter(
        (item) => item.username === currentDoctor.userNameOfDoctor
      )[0].visit;
      array.filter(
        (item) => item.username === currentDoctor.userNameOfDoctor
      )[0].credit -= visit;
      setAllDoctors(array);
      //
      //delete appointment from user account
      const arr = [...allUsers];
      const selectedTime = filteredArr.date;
      const _id = filteredArr.id;
      const _userName = arr.filter((i) => i.id === _id)[0].username;
      const docId = array.filter(
        (item) => item.username === currentDoctor.userNameOfDoctor
      )[0].id;
      arr.filter((item) => item.id === userId)[0].allApointments[
        getUserIndexById(docId + selectedTime, _userName)
      ].reserved = false;
      arr.filter((item) => item.id === userId)[0].allApointments[
        getUserIndexById(docId + selectedTime, _userName)
      ].cancel = true;
      arr.filter((item) => item.id === userId)[0].credit += visit;
      setAllUsers(arr);
    }
  };

  useEffect(() => {
    const a = String(props.item.date).slice(0, 8);
    const b = [a.slice(0, 4), a.slice(4, 6), a.slice(6, 8)];
    setDate(b[0] + "/" + b[1] + "/" + b[2]);
    setTime(
      String(props.item.date)
        .slice(8)
        .match(/[a-zA-Z]+|[0-9]+/g)
        .join(" ")
        .replace("AM", "صبح")
        .replace("PM", "بعدازظهر")
    );
  });

  return (
    <>

    <div className="cart-item m-auto mb-2 ">
      <span className="top-right-dot"></span>
      <div className="px-3 my-3">
        {auth
          ? allDoctors
              .filter((i) => i.id === props.item.id)
              .map((j) => (
                <div className="cart-item-doctor">
                  <div className="d-flex flex-column cart-item-doctor-info">
                    <div className="row">
                      <div className="d-flex justify-content-between">
                        {!props.state.reserved ? (
                          props.item.cancel ? (
                            <div className="text-white px-2 py-1 text-end d-inline cancel">
                              لغو شد
                            </div>
                          ) : (
                            <div className="text-white px-2 py-1 text-end d-inline done">
                              انجام شد
                            </div>
                          )
                        ) : (
                          <div>
                            <button
                              className="px-3 py-1 cancelAppoinBtn"
                              onClick={() => cancelAppoin(props.item.uniqId)}
                            >
                              لغو
                            </button>
                          </div>
                        )}
                        <h4 className="cart-item-doctor-title text-end d-inline">
                          دکتر {j.fname} {j.lname}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-secondary font-weight-medium text-end mb-2">
                        متخصص {j.expert}
                      </div>
                    </div>
                    <div className="row">
                      <span className="d-flex justify-content-end align-items-center text-dark font-weight-medium text-end my-2">
                        در تاریخ : {date}
                        <FontAwesomeIcon
                          className="ms-2 text-danger"
                          icon={faSquareCaretLeft}
                        ></FontAwesomeIcon>
                      </span>
                      <span className="d-flex justify-content-end align-items-center text-dark font-weight-medium text-end">
                        ساعت {time}
                        <FontAwesomeIcon
                          className="ms-2 text-info"
                          icon={faCircle}
                        ></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                  <div className="cart-item-doctor-thumb">
                    <img
                      src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${j.imgUrl}`}
                      alt="doctor"
                    />
                  </div>
                </div>
              ))
          : allUsers
              .filter((i) => i.id === props.item.id)
              .map((j) => (
                <div className="cart-item-doctor">
                  <div className="d-flex flex-column cart-item-doctor-info">
                    <div className="row">
                      <div className="d-flex justify-content-between">
                        {!props.state.reserved ? (
                          props.item.cancel ? (
                            <div className="text-white px-2 py-1 text-end d-inline cancel">
                              لغو شد
                            </div>
                          ) : (
                            <div className="text-white px-2 py-1 text-end d-inline done">
                              انجام شد
                            </div>
                          )
                        ) : (
                          <div>
                            <button
                              className="px-3 py-1 cancelAppoinBtn"
                              onClick={() => cancelAppoin(props.item.uniqId)}
                            >
                              لغو
                            </button>
                          </div>
                        )}
                        <h4 className="cart-item-doctor-title text-end d-inline">
                          {j.fullName}
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="text-secondary font-weight-medium text-end mb-2">
                        {/* متخصص {j.expert} */}
                      </div>
                    </div>
                    <div className="row">
                      <span className="d-flex justify-content-end align-items-center text-dark font-weight-medium text-end my-2">
                        در تاریخ : {date}
                        <FontAwesomeIcon
                          className="ms-2 text-danger"
                          icon={faSquareCaretLeft}
                        ></FontAwesomeIcon>
                      </span>
                      <span className="d-flex justify-content-end align-items-center text-dark font-weight-medium text-end">
                        ساعت {time}
                        <FontAwesomeIcon
                          className="ms-2 text-info"
                          icon={faCircle}
                        ></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>
                  <div className="cart-item-doctor-thumb">
                    <img src={j.img} alt="" />
                  </div>
                </div>
              ))}
      </div>
    </div>
    </>
  );
}
