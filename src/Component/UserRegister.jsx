import { Link } from "react-router-dom";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Header2 from "./Header2";
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
      <section className="container py-3 min-vh-100 mw-100 bg-user-reg px-5">
        <Header2/>
        <div class="container  h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card doc-reg-card rounded-3">
                <div class="card-body d-flex flex-column p-4 p-md-5">
                  <h3 class=" pb-2 pb-md-0 mb-3 md-5 px-md-2 text-center py-2 doc-reg-title" id="user-reg-title">
                    فرم عضویت بیماران
                  </h3>
                  <form class="p-2 border border-2">
                    <div class="form-outline text-end ">
                      <div className="row mb-3 align-items-center">
                        <div class="col-3 text-end ">
                          <label class="form-label" for="form0Example1q">
                            جنسیت
                          </label>
                          <select
                            id="form0Example1q"
                            dir="rtl"
                            class="form-control select px-2 py-1"
                          >
                            <option value="2">زن</option>
                            <option value="3">مرد</option>
                          </select>
                        </div>
                        <div className="col-9">
                          <label class="form-label" for="form1Example1q">
                            نام و نام خانوادگی
                          </label>
                          <input
                            dir="rtl"
                            type="text"
                            id="form1Example1q"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col-6 text-end">
                      <label class="form-label" for="form4Example1q">
                            میزان تحصیلات
                          </label>
                          <select
                            id="form4Example1q"
                            class="form-control select py-1 px-2"
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
                      </div>
                      <div className="col-6 w-sm text-end ">
                        <label class="form-label" for="form2Example1q">
                          شهر محل سکونت
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="form2Example1q"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-6 text-end">
                        <div class="">
                        <label for="exampleDatepicker1" class="form-label">
                          تاریخ تولد
                        </label>
                        
                        <DatePicker
                        //   popperPlacement="bottom"
                        
                        //   popperModifiers={{
                        //     flip: {
                        //         behavior: ["bottom"] // don't allow it to flip to be above
                        //     },
                        //     preventOverflow: {
                        //         enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                        //     },
                        //     hide: {
                        //         enabled: false // turn off since needs preventOverflow to be enabled
                        //     }
                        // }}
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
                      </div>
                      <div className="col-6 text-end">
                        <label class="form-label" for="form3Example1q">
                         شماره همراه
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="form3Example1q"
                          class="form-control"
                          
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col text-end">
                        <label class="form-label" for="form5Example1q">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="form5Example1q"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row d-flex mb-3">
                      <div class="col-md-6 order-md-0 order-1  text-end">
                        <label class="form-label" for="form3Example1q">
                          رمز عبور
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="form3Example1q"
                          class="form-control"
                        />
                      </div>
                      <div class="col-md-6 order-md-1 order-0 mb-3 mb-md-0 text-end">
                        <label class="form-label" for="form6Example1q">
                          نام کاربری
                        </label>
                        <input
                          dir="rtl"
                          type="text"
                          id="form3Example1q"
                          class="form-control"
                        />
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col text-end">
                      <Link to={'#'}>شرایط و قوانین سایت نوبت آنلاین را می پذیرم</Link><input className="align-middle ms-1" type="checkbox"/>
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
