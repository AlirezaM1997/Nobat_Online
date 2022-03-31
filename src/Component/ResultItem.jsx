import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Result.css";
import { DynamicStar } from "react-dynamic-star";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useAllState } from "../Provider";

const ResultItem = (props) => {
  const { currentAppoin } = useAllState();
  const { setCurrentAppoin } = useAllState();
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
 const UID = () => {
    return new Date().getTime() + String(Math.random()).slice(3, 9);
  };
  return (
    <div key={UID()} >
      <div  className="cart m-auto mb-2 ">
        <span className="remove-item"></span>
        <div className="px-3 my-2">
          <div className="container cart-doctor p-0  justify-content-end">
            <div className="row d-flex flex-column flex-sm-row rowOfCart">
              <div className="col-sm-3 col-6 star">
                <DynamicStar
                  width={15}
                  height={15}
                  emptyStarColor={"gray"}
                  rating={props.item.rate}
                />
              </div>
              <div className="col-sm-6 col-6 d-flex flex-column cart-doctor-info ">
                <div className="row">
                  <div className="d-flex justify-content-end flex-column flex-sm-row">
                    <h4 className="cart-doctor-title text-end d-inline">
                      دکتر {props.item.fname} {props.item.lname}
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="text-info fw-bold text-sm-end text-center">
                    متخصص {props.item.expert}
                  </div>
                </div>
                <div className="row">
                  <span className="text-muted font-weight-medium text-sm-end text-center">
                    از دانشگاه : {props.item.university}
                  </span>
                </div>
                <div className="row">
                  <span className="text-secondary font-weight-medium text-sm-end text-center mt-1">
                    : روزهای کاری <br></br>
                    {props.item.workDay.map((i) => (
                      <span key={UID()} className="d-inline-block bg-warning text-dark m-1 rounded py-1 px-2 pb-1">
                        {" " + i + "  "}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="col-sm-3 col-6 cart-doctor-thumb ">
                <img
                  className="rounded"
                  src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${props.item.imgUrl}`}
                  alt="doctor"
                />
              </div>
            </div>
            <div className="row d-flex align-items-center flex-column flex-sm-row ">
              <div className="col order-sm-0 order-1 d-flex justify-content-sm-start justify-content-center">
                <Link to={"/appointment"}>
                  <button id="appointment" onClick={()=>setCurrentAppoin(props.item.id)}>دریافت نوبت</button>
                </Link>
              </div>
              <div className="col order-sm-1 order-0 d-flex align-items-center justify-content-sm-end justify-content-center">
                <span className="text-muted font-weight-medium text-sm-end text-center">
                  آدرس مطب : {props.item.address1}
                </span>
                <FontAwesomeIcon className="mx-2" icon={faLocationDot} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultItem;
