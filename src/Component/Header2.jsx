import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className="d-flex w-100 px-2 mb-2 rounded justify-content-sm-between justify-content-center header2Back">
      <div className="d-sm-flex d-none align-items-center ">
        <Link to={"/"}>
          <button className="btn py-1 px-2 bg-danger text-light">صفحه اصلی</button>
        </Link>
      </div>
      <div id="" className="d-flex  align-items-center ">
        <h1 className="logo">
          <Link to={'/'}>نوبت آنلاین</Link>
        </h1>
        {/* <Image
          id="doc-reg-logo"
          src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/logo.png")}
        ></Image> */}
      </div>
    </div>
  );
}
