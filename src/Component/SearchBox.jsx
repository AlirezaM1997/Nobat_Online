// import { Link } from "react-router-dom";
// import React, { useState, useEffect, Fragment } from "react";

// export default function SearchBox(props) {
//   const [searchDoc, setSearchDoc] = useState("");
//   const [searchExp, setSearchExp] = useState("");

  
//     return({ props.flag ? (
//       <div className="doctorSearch d-flex flex-column ">
//         <h5 className="searchTitle">نام پزشک مورد نظر خود را وارد کنید </h5>
//         <input
//           className="w-75 bg-light py-2 my-2 w-100 hero-input border-0"
//           dir="rtl"
//           value={searchDoc}
//           onChange={(e) => setSearchDoc(e.target.value)}
//         ></input>

//         <button className="btn btn-warning align-self-center px-5 mt-2">
//           <Link className="text-black" to={`/result`}>
//             جستجو
//           </Link>
//         </button>
//       </div>
//     ):
  
//      (
//       <div className="expertSearch d-flex flex-column">
//         <h5 className="searchTitle">تخصص مورد نظر خود را وارد کنید </h5>
//         <select
//           dir="rtl"
//           class="w-75 bg-light my-2 w-100 hero-input py-2 border-0"
//           value={searchExp}
//           onChange={(e) => setSearchExp(e.target.value)}
//         >
//           <option value={`عمومی`}>پزشک عمومی</option>
//           <option value={`داخلی`}>متخصص داخلی</option>
//           <option value={`زنان`}>متخصص زنان</option>
//           <option value={`اعصاب`}>متخصص اعصاب و روان</option>
//           <option value={`اطفال`}>متخصص اطفال</option>
//           <option value={`حلق`}>متخصص گوش و حلق و بینی</option>
//           <option value={`قلب`}>متخصص قلب و عروق</option>
//           <option value={`پوست`}>متخصص پوست</option>
//           <option value={`اورولوژی`}>متخصص اورولوژی</option>
//           <option value={`چشم`}>متخصص چشم</option>
//           <option value={`غدد`}>متخصص غدد</option>
//           <option value={`ارتوپدی`}>متخصص ارتوپدی</option>
//           <option value={`بیهوشی`}>متخصص بیهوشی</option>
//           <option value={`رادیولوژی`}>متخصص رادیولوژی</option>
//           <option value={`جراحی`}>متخصص جراحی</option>
//           <option value={`زیبایی`}>متخصص زیبایی</option>
//           <option value={`عفونی`}>متخصص بیماری های عفونی</option>
//           <option value={`روماتولوژی`}>متخصص روماتولوژی</option>
//           <option value={`تغذیه`}>متخصص تغذیه</option>
//           <option value={`مامایی`}>مامایی</option>
//           <option value={`دندانپزشکی`}>دندانپزشکی</option>
//           <option value={`روانپزشکی`}> روانپزشکی</option>
//           <option value={`روانشناسی`}>روانشناسی</option>
//         </select>
//         <button className="btn btn-warning align-self-center px-5 mt-2">
//           <Link className="text-black" to={"/result"}>
//             جستجو
//           </Link>
//         </button>
//       </div>
//       } )
  

