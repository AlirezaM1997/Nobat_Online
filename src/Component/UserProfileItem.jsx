import data from "../All-Data/data";

export default function UserProfileItem(props) {
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
                        <button className="px-3 py-1 cancelAppoinBtn">
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
                  <span className="text-dark font-weight-medium text-end">
                    در تاریخ : {props.item.date}
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
