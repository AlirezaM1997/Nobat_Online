import { Link, Outlet } from "react-router-dom";

export default function Header2() {
  return (
    <>
      <div className="d-flex w-100 my-3 px-2 justify-content-sm-between justify-content-center bg-white header2Back">
        <div className="d-sm-flex d-none align-items-center ">
          <Link to={"/"}>
            <button className="btn py-1 px-2 bg-danger text-light">
              صفحه اصلی
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="btn py-1 px-2 bg-primary text-light ms-3">
              ورود کاربران
            </button>
          </Link>
        </div>
        <div id="" className="d-flex  align-items-center ">
          <h1 className="logo">
            <Link to={"/"}>نوبت آنلاین</Link>
          </h1>
        </div>
      </div>
      <Outlet />
    </>
  );
}
