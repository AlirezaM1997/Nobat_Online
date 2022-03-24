import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import "../Style/Register.css";
import React, { useState, useRef } from "react";
import Header2 from "./Header2";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
// import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DoctorList from "./DoctorList";
import ModalDoc from "./ModalDoc";
export default function DoctorRegister() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // const [submittedDate, setSubmittedDate] = useState();

  // const onSubmit = ({ date }) => {
  //   setSubmittedDate(date);
  //   // console.log(data);
  // };

  const onSubmit = (data) => console.log(data);
  
  const [selectedDay, setSelectedDay] = useState(null);
  console.log(selectedDay);
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      // placeholder="انتخاب کنید"
      value={
        selectedDay
          ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
          : ""
      }
      style={{
        textAlign: "end",
        padding: "0.375rem 0.75rem",
        fontSize: "1rem",
        border: "1px rgb(0, 217, 255) solid",
        borderRadius: "0.25rem",
        boxShadow: "0 1.5rem 2rem rgba(156, 136, 255, 0.2)",
        color: "#212529",
        outline: "none",
        height: "40px",
        display: "block",
        boxShadow: "none",
        fontFamily: "Sahel",
        width: "100%",
        backgroundColor: "#fff",
        letterSpacing: "1px",
        transition: "all 0.3s",
      }}
      id="exampleDatepicker1"
    />
  );
  const [show, setShow] = useState(false);
  const [showHideClassName, setShowHideClassName] = useState("modal-doc-hide");
  const showModal = () => {
    setShow(true);
    setShowHideClassName("modal-doc-show");
    document.getElementsByClassName("DatePicker")[0].classList.add("changePos");
  };
  const hideModal = () => {
    setShow(false);
    setShowHideClassName("modal-doc-hide");
    document
      .getElementsByClassName("DatePicker")[0]
      .classList.remove("changePos");
  };
  const [checked, setChecked] = useState(false);
  // const [birthdate, setBirthdate] = useState("");
  return (
    <div>
      <section className="container py-3 px-5 min-vh-100 mw-100 w-100 doc-reg-main ">
        <Header2 />
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 ">
              <div className="card doc-reg-card rounded-3">
                <div className="card-body d-flex flex-column p-4 p-md-5">
                  <h3 className=" pb-2 pb-md-0 mb-3 md-5 px-md-2 text-center py-2 doc-reg-title">
                    فرم عضویت پزشکان
                  </h3>
                  <form
                    className="p-2 border border-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-outline text-end ">
                      <div className="row mb-3 align-items-center justify-content-end">
                        <div className="col-md-3 col-6 text-md-end order-1 order-md-0 ">
                          <label className="form-label" htmlFor="grnder">
                            جنسیت
                          </label>
                          <select
                            id="grnder"
                            dir="rtl"
                            className="form-control select px-2 py-1"
                            defaultValue={""}
                            {...register("grnder", { required: true })}
                          >
                            <option value={""} disabled >
                              انتخاب کنید
                            </option>
                            <option value="woman">زن</option>
                            <option value="man">مرد</option>
                          </select>
                          {errors.grnder && (
                            <span
                              className="small text-danger"
                              style={{ fontSize: "11px" }}
                            >
                              یک مورد را انتخاب کنید
                            </span>
                          )}
                        </div>
                        <div className="col-md-9 order-0 order-md-1 mb-3 mb-md-0">
                          <label className="form-label" htmlFor="name">
                            نام و نام خانوادگی
                          </label>
                          <input
                            dir="rtl"
                            type="text"
                            id="name"
                            className="form-control"
                            {...register("fullName", { required: true })}
                          />
                          {errors.fullName && (
                            <span className=" text-danger">
                              پر کردن این فیلد الزامی است
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 text-end">
                        <label htmlFor="datepicker1" className="form-label">
                          تاریخ تولد
                        </label>
                       
                        {/* <Controller
                          control={control}
                          name="date"
                          rules={{ required: true }} //optional
                          render={({
                            field: { onChange, name, value },
                            formState: { errors }, //optional, but necessary if you want to show an error message
                          }) => (
                            <>
                              <DatePicker
                                value={value || ''}
                                onChange={(date) => {
                                  onChange(date?.isValid ? date : "");
                                }}
                                // format={"YYYY/MM/DD"}
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                              />
                              {errors &&
                                errors[name] &&
                                errors[name].type === "required" && (
                                  //if you want to show an error message
                                  <span>your error message !</span>
                                )}
                            </>
                          )}
                        /> */}
                        <Controller
                          control={control}
                          name="ReactDatepicker"
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
                            <DatePicker
                              id="datepicker1"
                              popperPlacement="bottom-end"
                              className="responsive-calendar d-block"
                              value={selectedDay}
                              onChange={setSelectedDay}
                              renderInput={renderCustomInput}
                              // onChange={onChange }
                              onBlur={onBlur}
                              selected={value}
                              shouldHighlightWeekends
                              locale="fa"
                              style={{
                                position: "relative",
                                display: "block",
                                zIndex: "100",
                              }}
                            />
                          )}
                        />
                        {/* {errors.birthdate && (
                          <span className=" text-danger">
                            پر کردن این فیلد الزامی است
                          </span>
                        )} */}
                      </div>
                      <div className="col-sm-6 w-sm text-end ">
                        <label className="form-label" htmlFor="city">
                          شهر محل سکونت
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="city"
                          className="form-control"
                          {...register("city", { required: true })}
                        />
                        {errors.city && (
                          <span className=" text-danger">
                            پر کردن این فیلد الزامی است
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-6 text-end">
                        <div className="">
                          <label className="form-label" htmlFor="expert">
                            تخصص
                          </label>
                          <select
                            id="expert"
                            className="form-control select py-1 px-2"
                            dir="rtl"
                            placeholder="انتخاب کنید"
                          >
                            <DoctorList />
                          </select>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <label className="form-label" htmlFor="code">
                          کد نظام پزشکی
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="code"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col text-end">
                        <label className="form-label" htmlFor="email">
                          ایمیل
                        </label>
                        <input type="email" id="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row d-flex mb-3">
                      <div className="col-md-6 order-md-0 order-1  text-end">
                        <label className="form-label" htmlFor="pass">
                          رمز عبور
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="pass"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6 order-md-1 order-0 mb-3 mb-md-0 text-end">
                        <label className="form-label" htmlFor="username">
                          نام کاربری
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="username"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col text-end">
                        <label className="form-label" htmlFor="picture">
                          آپلود عکس
                        </label>
                        <input
                          placeholder="هیچ فایلی انتخاب نشده است"
                          type="file"
                          id="picture"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-end">
                        <span
                          onClick={showModal}
                          className={`docRules ${
                            checked ? "checkboxInput" : ""
                          }`}
                        >
                          شرایط و قوانین سایت نوبت آنلاین را می پذیرم
                        </span>
                        <input
                          className="align-middle ms-1"
                          type="checkbox"
                          value={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                      </div>
                    </div>
                    <input
                      value={"تایید"}
                      type="submit"
                      className="btn btn-success btn-lg mb-1"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalDoc
          hideModal={hideModal}
          showHideClassName={showHideClassName}
        ></ModalDoc>
      </section>
    </div>
  );
}
