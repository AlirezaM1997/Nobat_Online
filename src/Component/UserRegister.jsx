import "../Style/Register.css";

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Modal from "./Modal";

export default function DoctorRegister() {
  const validationSchema = Yup.object().shape({
    checkbox: Yup.bool().oneOf([true], "پر کردن این فیلد الزامی است"),
    email: Yup.string()
      .email("لطفا یک ایمیل صحیح وارد نمایید")
      .required("لطفا یک ایمیل  وارد نمایید"),
    username: Yup.string("لطفا یک نام کاربری وارد نمایید").required(
      "لطفا یک نام کاربری وارد نمایید"
    ),
    fullname: Yup.string("لطفا نام کامل خود را وارد نمایید").required(
      "لطفا نام کامل خود را وارد نمایید"
    ),
    password: Yup.string("رمز عبور باید بین 8 تا 12 کاراکتر باشد")
      .required("لطفا رمز عبور را وارد نمایید")
      .min(8, "رمز عبور باید بین 8 تا 12 کاراکتر باشد")
      .max(12, "رمز عبور باید بین 8 تا 12 کاراکتر باشد"),
    gender: Yup.string().required("لطفا یک مورد را انتخاب کنید"),
    expert: Yup.string().required("لطفا یک مورد را انتخاب کنید"),
    code: Yup.string("لطفا کد صحیح وارد نمایید")
      .required("لطفا کد صحیح وارد نمایید")
      .min(4, "لطفا کد صحیح وارد نمایید")
      .max(4, "لطفا کد صحیح وارد نمایید"),
  });

  const { register, handleSubmit, control, reset, formState, setValue } =
    useForm({
      resolver: yupResolver(validationSchema),
    });
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  const [selectedDay, setSelectedDay] = useState(null);
  const renderBirthdateInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="انتخاب کنید"
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
  const[isUser , setIsUser]=useState('user')

  //   const [check, setCheck] = useState(true);
  //   const OnCheckboxClick= (e) => {
  //     if(e.target.checked) {
  //       setCheck(false)
  //         console.log(check);
  //     }
  //     else {
  //       setCheck(true)
  //         console.log(check);
  //     }
  // }

  return (
    <div>
      <section className="container py-3 px-5 min-vh-100 mw-100 w-100 doc-reg-main ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 ">
              <div className="card doc-reg-card rounded-3">
                <div className="card-body d-flex flex-column p-4 p-md-5">
                  <h3
                    className=" pb-2 pb-md-0 mb-3 md-5 px-md-2 text-center py-2 doc-reg-title"
                    id="user-reg-title"
                  >
                    فرم عضویت بیماران
                  </h3>
                  <form
                    className="p-2 border border-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-outline text-end ">
                      <div className="row mb-3 align-items-center justify-content-end">
                        <div className="col-md-3 col-6 text-md-end order-1 order-md-0 ">
                          <label className="form-label" htmlFor="gender">
                            جنسیت
                          </label>
                          <select
                            id="gender"
                            dir="rtl"
                            defaultValue={""}
                            onChange={(e) =>
                              setValue("select", e.target.value, {
                                shouldValidate: true,
                              })
                            }
                            {...register("gender")}
                            className={`form-control select px-2 py-1${
                              errors.gender ? "is-invalid" : ""
                            }`}
                          >
                            <option value={""} disabled>
                              انتخاب کنید
                            </option>
                            <option value="woman">زن</option>
                            <option value="man">مرد</option>
                          </select>
                          {errors.gender && (
                            <p className="text-danger text-center genderError">
                              {errors.gender.message}
                            </p>
                          )}
                          {/* <span className="invalid-feedback">
                            {errors.gender?.message}
                          </span> */}
                        </div>
                        <div className="col-md-9 order-0 order-md-1 mb-3 mb-md-0">
                          <label className="form-label" htmlFor="fullname">
                            نام و نام خانوادگی
                          </label>
                          <input
                            dir="rtl"
                            type="text"
                            id="fullname"
                            {...register("fullname")}
                            className={`form-control ${
                              errors.fullname ? "is-invalid" : ""
                            }`}
                          />
                          <span className="invalid-feedback">
                            {errors.fullname?.message}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 text-end">
                        <label htmlFor="datepicker1" className="form-label">
                          تاریخ تولد
                        </label>

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
                              onChange={(e) => {
                                setSelectedDay(e);
                                onChange(e);
                              }}
                              renderInput={renderBirthdateInput}
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
                        <label className="form-label" htmlFor="form4Example1q">
                          میزان تحصیلات
                        </label>
                        <select
                          id="form4Example1q"
                          className="form-control select py-1 px-2"
                          dir="rtl"
                          placeholder="انتخاب کنید"
                        >
                          <option value="2" readOnly disabled>
                            انتخاب کنید
                          </option>
                          <option value="2"> بی سواد</option>
                          <option value="3"> ابتدایی</option>
                          <option value="3"> سیکل</option>
                          <option value="3">دیپلم</option>
                          <option value="3">فوق دبپلم</option>
                          <option value="3"> لیسانس</option>
                          <option value="3"> فوق لیسانس</option>
                          <option value="3"> دکتری</option>
                        </select>
                        {errors.expert && (
                          <p className="text-danger expertError">
                            {errors.expert.message}
                          </p>
                        )}
                        <span className="invalid-feedback">
                          {errors.expert?.message}
                        </span>
                      </div>

                      <div className="col-6 text-end">
                        <label className="form-label" htmlFor="code">
                          کد نظام پزشکی
                        </label>
                        <input
                          dir="rtl"
                          type="number"
                          id="code"
                          {...register("code")}
                          className={`form-control ${
                            errors.code ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.code?.message}
                        </span>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col text-end">
                        <label className="form-label" htmlFor="email">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.email?.message}
                        </span>
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
                          id="password"
                          {...register("password")}
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.password?.message}
                        </span>
                      </div>
                      <div className="col-md-6 order-md-1 order-0 mb-3 mb-md-0 text-end">
                        <label className="form-label" htmlFor="username">
                          نام کاربری
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="username"
                          {...register("username")}
                          className={`form-control ${
                            errors.username ? "is-invalid" : ""
                          }`}
                        />
                        <span className="invalid-feedback">
                          {errors.username?.message}
                        </span>
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
                          {...register("picture", { required: true })}
                        />
                        {errors.picture && (
                          <span className=" text-danger">
                            لطفا یک عکس انتخاب کنید
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-end">
                        <span onClick={showModal} className={`docRules `}>
                          شرایط و قوانین سایت نوبت آنلاین را می پذیرم
                        </span>

                        <input
                          type="checkbox"
                          // value={check}
                          // onClick={(e) => OnCheckboxClick(e)}
                          {...register("checkbox")}
                          id="checkbox"
                          className={`align-middle m-0 ms-1 form-check-input ${
                            errors.checkbox ? "is-invalid" : ""
                          }`}
                        />

                        <span className="invalid-feedback">
                          {errors.checkbox?.message}
                        </span>
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
        <Modal
          hideModal={hideModal}
          showHideClassName={showHideClassName}
          flag={true}
        ></Modal>
      </section>
    </div>
  );
}
