import { Link } from "react-router-dom";
import React, { useState } from "react";
import Header2 from "./Header2";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
export default function DoctorRegister() {
  const [selectedDay, setSelectedDay] = useState(null);
  // render regular HTML input element
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
        textAlign: "center",
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

  return (
    <div>
      <section className="container py-3 px-5 min-vh-100 mw-100 w-100 doc-reg-main ">
        <Header2/>
        <div class="container  h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card doc-reg-card rounded-3">
                <div class="card-body d-flex flex-column p-4 p-md-5">
                  <h3 class=" pb-2 pb-md-0 mb-3 md-5 px-md-2 text-center py-2 doc-reg-title">
                    فرم عضویت پزشکان
                  </h3>
                  <form class="p-2 border border-2">
                    <div class="form-outline text-end ">
                      <div className="row mb-3 align-items-center">
                        <div class="col-3 text-end ">
                          <label class="form-label" for="grnder">
                            جنسیت
                          </label>
                          <select
                            id="grnder"
                            dir="rtl"
                            class="form-control select px-2 py-1"
                          >
                            <option value="2">زن</option>
                            <option value="3">مرد</option>
                          </select>
                        </div>
                        <div className="col-9">
                          <label class="form-label" for="name">
                            نام و نام خانوادگی
                          </label>
                          <input
                            dir="rtl"
                            type="text"
                            id="name"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-6 text-end">
                        <label for="datepicker1" class="form-label">
                          تاریخ تولد
                        </label>
                        <DatePicker
                        id="datepicker1"
                          popperPlacement="bottom-end"
                          class="responsive-calendar d-block"
                          value={selectedDay}
                          onChange={setSelectedDay}
                          renderInput={renderCustomInput}
                          shouldHighlightWeekends
                          locale="fa" // add this
                          style={{
                            position: "relative",
                            display: "block",
                            zIndex: "100",
                          }}
                        />
                      </div>
                      <div className="col-6 w-sm text-end ">
                        <label class="form-label" for="city">
                          شهر محل سکونت
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="city"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-6 text-end">
                        <div class="">
                          <label class="form-label" for="expert">
                            تخصص
                          </label>
                          <select
                            id="expert"
                            class="form-control select py-1 px-2"
                            dir="rtl"
                            placeholder="انتخاب کنید"
                          >
                            <option value="0" readOnly disabled>
                              انتخاب کنید
                            </option>
                            <option value={`عمومی`}>پزشک عمومی</option>
                          <option value={`داخلی`}>متخصص داخلی</option>
                          <option value={`زنان`}>متخصص زنان</option>
                          <option value={`اعصاب`}>متخصص اعصاب و روان</option>
                          <option value={`اطفال`}>متخصص اطفال</option>
                          <option value={`حلق`}>متخصص گوش و حلق و بینی</option>
                          <option value={`قلب`}>متخصص قلب و عروق</option>
                          <option value={`پوست`}>متخصص پوست</option>
                          <option value={`اورولوژی`}>متخصص اورولوژی</option>
                          <option value={`چشم`}>متخصص چشم</option>
                          <option value={`غدد`}>متخصص غدد</option>
                          <option value={`ارتوپدی`}>متخصص ارتوپدی</option>
                          <option value={`بیهوشی`}>متخصص بیهوشی</option>
                          <option value={`رادیولوژی`}>متخصص رادیولوژی</option>
                          <option value={`جراحی`}>متخصص جراحی</option>
                          <option value={`زیبایی`}>متخصص زیبایی</option>
                          <option value={`عفونی`}>
                            متخصص بیماری های عفونی
                          </option>
                          <option value={`روماتولوژی`}>متخصص روماتولوژی</option>
                          <option value={`تغذیه`}>متخصص تغذیه</option>
                          <option value={`مامایی`}>مامایی</option>
                          <option value={`دندانپزشکی`}>دندانپزشکی</option>
                          <option value={`روانپزشکی`}> روانپزشکی</option>
                          <option value={`روانشناسی`}>روانشناسی</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <label class="form-label" for="code">
                          کد نظام پزشکی
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="code"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col text-end">
                        <label class="form-label" for="email">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row d-flex mb-3">
                      <div class="col-md-6 order-md-0 order-1  text-end">
                        <label class="form-label" for="pass">
                          رمز عبور
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="pass"
                          class="form-control"
                        />
                      </div>
                      <div class="col-md-6 order-md-1 order-0 mb-3 mb-md-0 text-end">
                        <label class="form-label" for="username">
                          نام کاربری
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="username"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col text-end">
                        <label class="form-label" for="picture">
                          آپلود عکس
                        </label>
                        <input
                          dir="rtl"
                          type="file"
                          id="picture"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-end">
                        <Link to={"#"}>
                          شرایط و قوانین سایت نوبت آنلاین را می پذیرم
                        </Link>
                        <input className="align-middle ms-1" type="checkbox" />
                      </div>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg mb-1">
                      تایید
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
