import "../Style/Register.css";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import DoctorList from "../All-Data/DoctorList";
import Modal from "./Modal";

export default function UserRegister() {
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
    educationRate: Yup.string().required("لطفا یک مورد را انتخاب کنید"),
    phoneNumber: Yup.string("لطفا شماره صحیح وارد نمایید")
      .required("لطفا شماره صحیح وارد نمایید")
      .min(11, "لطفا شماره صحیح وارد نمایید")
      .max(11, "لطفا شماره صحیح وارد نمایید"),
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

  return (
    <div>
      <section className="container py-3 px-sm-5 pb-5 p-0 min-vh-100 mw-100 w-100 doc-reg-main ">
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
                            {...register("gender")}
                            onChange={(e) =>
                              setValue("gender", e.target.value, {
                                shouldValidate: true,
                              })
                            }
                            className={`form-control select px-2 py-1 ${
                              errors.gender ? "invalidSelectInput" : ""
                            }`}
                          >
                            <option value={""} disabled>
                              انتخاب کنید
                            </option>
                            <option value="female">زن</option>
                            <option value="male">مرد</option>
                          </select>
                          {errors.gender && (
                            <p className="text-danger text-center genderError mb-0">
                              {errors.gender.message}
                            </p>
                          )}
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
                            autocomplete="off"
                          />
                          <span className="invalid-feedback">
                            {errors.fullname?.message}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 text-end mb-3 mb-sm-0">
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
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                     <div className="col-6 text-end">
                       <label className="form-label" htmlFor="educationRate">
                         میزان تحصیلات
                       </label>
                         <select
                          id="educationRate"
                          // className={`form-control select px-2 py-1`}
                          dir="rtl"
                          name="educationRate"
                          defaultValue={''}
                          placeholder="انتخاب کنید"
                          {...register("educationRate")}
                          onChange={(e) =>
                            setValue("educationRate", e.target.value, {
                              shouldValidate: true,
                            })
                          }
                          className={`form-control select px-2 py-1 ${
                            errors.educationRate ? "invalidSelectInput" : ""
                          }`}
                        >
                          <option value="" readOnly disabled>
                            انتخاب کنید
                          </option>
                          <option value={'بی سواد'}> بی سواد</option>
                          <option value={'ابتدایی'}> ابتدایی</option>
                          <option value={'سیکل'}> سیکل</option>
                          <option value={'دیپلم'}>دیپلم</option>
                          <option value={'فوق دیپلم'}>فوق دبپلم</option>
                          <option value={'لیسانس'}> لیسانس</option>
                          <option value={'فوق لیسانس'}> فوق لیسانس</option>
                          <option value={'دکتری'}> دکتری</option>
                        </select>
                        {errors.educationRate && (
                          <p className="text-danger expertError mb-0">
                            {errors.educationRate.message}
                          </p>
                        )}
                      </div>

                      <div className="col-6 text-end">
                        <label className="form-label" htmlFor="phoneNumber">
                          تلفن همراه
                        </label>
                        <input
                          dir="rtl"
                          name="phoneNumber"
                          placeholder="09120000000"
                          type="number"
                          id="phoneNumber"
                          {...register("phoneNumber")}

                          className={`form-control ${
                            errors.phoneNumber ? "is-invalid" : ""
                          }`}
                          autocomplete="off"

                        />
                        <span className="invalid-feedback">
                          {errors.phoneNumber?.message}
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
                          autocomplete="off"
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
                          autocomplete="off"
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
                          autocomplete="off"
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
                          // {...register("picture", { required: true })}
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
