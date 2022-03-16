import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Header2 (){
    return(
        <div className="d-flex bg-white w-100 p-2 mb-2 justify-content-between">
          <div className="d-flex align-items-center ">
            <button className="btn py-1 px-2 bg-danger ">
              <Link className="text-light" to={"/"}>
                صفحه اصلی
              </Link>
            </button>
          </div>
          <div id="" className="d-flex align-items-center ">
            <h1 className="logo">
              <Link to="">نوبت آنلاین</Link>
            </h1>
            <Image
              id="doc-reg-logo"
              src={require("/Users/alireza/Desktop/Makeen/Project/Online appointments/src/images/logo.png")}
            ></Image>
          </div>
        </div>
    )
}