import { faCircle, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAllState } from "../Provider";

export default function ProfileItem(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const { allDoctors } = useAllState();
  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { allUsers } = useAllState();
  const { setAllUsers } = useAllState();
  const { auth } = useAllState(false);
  const { docAuth } = useAllState(false);

  const getIndexById = (id) => {
    const arr = allUsers.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].allApointments;
    return arr.findIndex((item) => item.uniqId === id);
  };
  const cancelAppoin = (id) => {
    const array = [...allUsers];
    array.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].allApointments[getIndexById(id)].reserved = false;
    array.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].allApointments[getIndexById(id)].cancel = true;
    const doctorId = array.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].allApointments[getIndexById(id)].id;
    const addCredit = allDoctors.filter((i) => i.id === doctorId)[0].visit;
    array.filter(
      (item) => item.username === currentUser.userNameOfUser
    )[0].credit += addCredit;
    setAllUsers(array);
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
                    <img
                      src={j.img}
                      alt=""
                    />
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}
