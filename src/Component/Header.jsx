import { Link, Outlet } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Image from "react-bootstrap/Image";
import "../Style/Header.css";
import users from "../All-Data/users";
import { useEffect } from "react";
import { useAllState } from "../Provider";

export default function Header() {
  const { auth } = useAllState(false);
  const { currentUser } = useAllState({ userNameOfUser: "" });
  let { setSearchExp } = useAllState();
  let { setSearchDoc } = useAllState();

  let timeout;
  let scroll = 0;
  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (scroll >= window.scrollY && window.scrollY > 10) {
          document.getElementById("header").classList.add("sticky");
          document.getElementById("header").classList.remove("notSticky");
        } else {
          document.getElementById("header").classList.remove("sticky");
          document.getElementById("header").classList.add("notSticky");
        }
        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  const getIndexByUserName = (currentUsername) => {
    return users.findIndex(
      (item) => item.username === currentUsername.userNameOfUser
    );
  };

  return (
    <div id="uy">
      <header id="header" className="mt-sm-3 bg-white">
        <div
          className="container d-flex align-items-center justify-content-around"
          id="containerHeader"
        >
          <div id="header3">
            {!auth ? (
              <Link
                className="btn btn-primary me-2 btnHeader d-inline-block text-white"
                to={"/login"}
              >
                ورود کاربران
              </Link>
            ) : (
              <Link to={"/userprofile"} title="حساب کاربری">
                <div className="d-inline-block goToAccount">
                  <img
                    className="headerImgProf"
                    src={users[getIndexByUserName(currentUser)].img}
                  ></img>
                  <span className="headerNameProf">
                    {users[getIndexByUserName(currentUser)].fname}{" "}
                    {users[getIndexByUserName(currentUser)].lname}
                  </span>
                </div>
              </Link>
            )}
            <Link
              className="btn btn-primary btnHeader d-inline-block text-white"
              to={"/doctor-register"}
            >
              ثبت نام پزشکان
            </Link>
          </div>
          <div id="header2">
            <nav id="navbar" className="navbar order-last order-lg-0 p-0">
              <ul className="m-0 p-0 align-items-center">
                <li>
                  <Link to="/about" className="nav-link">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link">
                    منو
                  </Link>
                </li>
                <li>
                  <Link to="" className="nav-link">
                    منو
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="">
                    <span>مجله سلامت</span>{" "}
                  </Link>
                  <ul className="position-absolute d-flex align-items-end flex-column m-0 bg-white end-0">
                    <li>
                      <Link to="">سلامت زنان</Link>
                    </li>
                    <li>
                      <Link to="">سلامت خانواده</Link>
                    </li>
                    <li>
                      <Link to="">بیماری کرونا</Link>
                    </li>
                    <li>
                      <Link to="">بهداشت روان</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/"
                    className="nav-link "
                    onClick={() => {
                      setSearchExp("");
                      setSearchDoc("");
                    }}
                  >
                    صفحه اصلی
                  </Link>
                </li>
              </ul>
              <MobileMenu />
            </nav>
          </div>
          <div id="header1" className="d-flex align-items-center ">
            <h1 className="logo">
              <Link to="">نوبت آنلاین</Link>
            </h1>
            <Image
              className="m-0 p-0"
              id="logo"
              src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/logo.png")}
            ></Image>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

// export default function Header() {
// useEffect(()=>{
//   document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", stickyHeader);
//     const header = document.getElementById("header");
//     const sticky = header.offsetTop;
//     console.log(sticky);
//     function stickyHeader() {
//       if (window.pageYOffset  >= sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
//     }
//   });
// })

//   return (
//     <div>
//       <div id="topbar" className="d-flex align-items-center  bg-white">
//         <div className="container d-flex justify-content-between">
//           <div className="contact-info d-flex align-items-center"></div>
//           <div className="d-none d-lg-flex social-links align-items-center"></div>
//         </div>
//       </div>
//       <header id="header" className=" bg-white">
//         <div
//           className="container d-flex align-items-center justify-content-around"
//           id="containerHeader"
//         >
//           <div id="header3">
//             <Link
//               className="btn btn-primary me-2 btnHeader d-inline-block text-white"
//               to={"/login"}
//             >
//               ورود کاربران
//             </Link>

//             <Link
//               className="btn btn-primary btnHeader d-inline-block text-white"
//               to={"/doctor-register"}
//             >
//               ثبت نام پزشکان
//             </Link>
//           </div>
//           <div id="header2">
//             <nav id="navbar" className="navbar order-last order-lg-0 p-0">
//               <ul className="m-0 p-0 align-items-center">
//                 <li>
//                   <Link to="/about" className="nav-link">
//                     درباره ما
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="" className="nav-link">
//                     منو
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="" className="nav-link">
//                     منو
//                   </Link>
//                 </li>
//                 <li className="dropdown">
//                   <Link to="">
//                     <span>مجله سلامت</span>{" "}
//                   </Link>
//                   <ul className="position-absolute d-flex align-items-end flex-column m-0 bg-white end-0">
//                     <li>
//                       <Link to="">سلامت زنان</Link>
//                     </li>
//                     <li>
//                       <Link to="">سلامت خانواده</Link>
//                     </li>
//                     <li>
//                       <Link to="">بیماری کرونا</Link>
//                     </li>
//                     <li>
//                       <Link to="">بهداشت روان</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Link to="/" className="nav-link ">
//                     صفحه اصلی
//                   </Link>
//                 </li>
//               </ul>
//               <MobileMenu />
//             </nav>
//           </div>
//           <div id="header1" className="d-flex align-items-center ">
//             <h1 className="logo">
//               <Link to="">نوبت آنلاین</Link>
//             </h1>
//             <Image
//               className="m-0 p-0"
//               id="logo"
//               src={require("/Users/alireza/Desktop/Makeen/Project/Nobat Online/src/images/logo.png")}
//             ></Image>
//           </div>
//         </div>
//       </header>
//       <Outlet />
//     </div>
//   );
// }
