import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className="d-flex w-100 px-2 mb-5 rounded justify-content-sm-between justify-content-center header2Back">
      <div className="d-sm-flex d-none align-items-center ">
        <Link to={"/"}>
          <button className="btn py-1 px-2 bg-danger text-light">صفحه اصلی</button>
        </Link>
        <Link to={"/login"}>
          <button className="btn py-1 px-2 bg-primary text-light ms-3">ورود کاربران</button>
        </Link>
      </div>
      <div id="" className="d-flex  align-items-center ">
        <h1 className="logo">
          <Link to={'/'}>نوبت آنلاین</Link>
        </h1>
        
      </div>
    </div>
  );
}
