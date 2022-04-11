import { faCircle, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import data from "../All-Data/data";
import { useAllState } from "../Provider";

export default function UserProfileItem(props) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const { currentUser } = useAllState({ userNameOfUser: "" });
  const { updateAppoinList } = useAllState();
  const { setUpdateAppoinList } = useAllState();
  // const { setRender } = useAllState();

  const getIndexById = (id) => {
    const arr = updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)[0].allApointments.reserved
    return arr.findIndex((item) => item.uniqId === id);
  };
  const cancelAppoin = (id) => {
    const array = [...updateAppoinList]
    console.log(array);
    const arr = updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)[0].allApointments.reserved
      console.log(arr);
    const p = getIndexById(id);
    arr.splice(p, 1);
    // setRender(true)
    updateAppoinList
      .filter((item) => item.username === currentUser.userNameOfUser)[0].allApointments.reserved = arr
    // setUpdateAppoinList(arr)
  };
// console.log('rendered');
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
        {data
          .filter((i) => i.id === props.item.id)
          .map((j) => (
            <div className="cart-item-doctor">
              <div className="d-flex flex-column cart-item-doctor-info">
                <div className="row">
                  <div className="d-flex justify-content-between">
                    {!props.state.reserved ? (
                      props.item.cancel ? (
                        <div className="text-white px-2 py-1 text-end d-inline cancel">
                          کنسل شد
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
                          کنسل
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
          ))}
      </div>
    </div>
  );
}
