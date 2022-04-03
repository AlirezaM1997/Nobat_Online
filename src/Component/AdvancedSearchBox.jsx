import "../Style/AdvancedSearchBox.css";

import StickyBox from "react-sticky-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faNotesMedical,
  faSearchPlus,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import DoctorList from "../DoctorList";
import { useAllState } from "../Provider";

export default function AdvancedSearchBox() {
  const { flag } = useAllState();
  const { setFlag } = useAllState();
  const { adSearchName } = useAllState();
  const { setAdSearchName } = useAllState();
  const { adSearchExp } = useAllState();
  const { setAdSearchExp } = useAllState();
  const { workingDay } = useAllState('');
  const { setWorkingDay } = useAllState();

  const weekDays = [
    {
      value: "شنبه",
      label: "شنبه",
    },
    {
      value: "یکشنبه",
      label: "یکشنبه",
    },
    {
      value: "دوشنبه",
      label: "دوشنبه",
    },
    {
      value: "سه شنبه",
      label: "سه شنبه",
    },
    {
      value: "چهارشنبه",
      label: "چهارشنبه",
    },
    {
      value: "پنجشنبه",
      label: "پنجشنبه",
    },
  ];
  const handleChangeDay = (e) => {
    setWorkingDay(Array.isArray(e) ? e.map((x) => x.value) : '');
  };
  return (
    <>
      {" "}
      <StickyBox id="StickyBox" offsetTop={100} offsetBottom={-100}>
        <div className="container p-1" id="search">
          <div className="row w-100 m-0 p-3 d-flex justify-content-center">
            <div className="col text-center mb-2">
              <h5 className="adSearchTitle">
                جستجوی پیشرفته
                <FontAwesomeIcon
                  className="mx-2 text-warning"
                  icon={faSearchPlus}
                />
              </h5>
            </div>
          </div>
          <div className="row w-100 m-0 p-3 pt-0 d-flex align-items-center flex-column justify-content-center">
            <p className="text-end text-warning h6 mb-1">
              نام پزشک{" "}
              <FontAwesomeIcon
                className="mx-2 text-white"
                icon={faUserDoctor}
              />
            </p>
            <input
              dir="rtl"
              className="bg-light py-2 px-1 my-2 w-100 rounded border-0 expertInput"
              value={adSearchName}
              onChange={(e) => setAdSearchName(e.target.value)}
            ></input>
            <p className="text-end text-warning h6 mb-1">
              تخصص{" "}
              <FontAwesomeIcon
                className="mx-2 text-white"
                icon={faNotesMedical}
              />
            </p>
            <Select
              menuPlacement="bottom"
              className="px-1 my-2 w-100 rounded border-0 expertInput text-end"
              placeholder="انتخاب کنید"
              value={DoctorList.filter((obj) =>
                adSearchExp.includes(obj.value)
              )}
              onChange={(e) => {
                setAdSearchExp(e.value);
              }}
              options={DoctorList}
              isSearchable={false}
            />
            <p className="text-end text-warning h6 mb-1">
              روزهای کاری{" "}
              <FontAwesomeIcon
                className="mx-2 text-white"
                icon={faCalendarDays}
              />
            </p>
            <Select
              menuPlacement="top"
              className="px-1 my-2 w-100 rounded border-0 expertInput text-end"
              placeholder="انتخاب کنید"
              value={weekDays.filter((obj) => workingDay.includes(obj.value))}
              options={weekDays}
              onChange={handleChangeDay}
              isMulti
              isClearable
              isSearchable={false}
            />
          </div>
          <div className="row w-75 m-auto p-3">
            <button className="adSearchBtn" onClick={() => setFlag(3)}>
              جستجو
            </button>
          </div>
        </div>
      </StickyBox>
    </>
  );
}
