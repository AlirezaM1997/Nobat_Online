import "../Style/AskedQuestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function AskedQuestions() {
  return (
    <section id="aq" className="aq aq-bg py-4">
      <div className="container my-5">
        <div className="section-title text-md-end text-center" dir="rtl">
          <h2 className="mb-4 d-inline-block">سوال و پاسخ</h2>
        </div>

        <div className="aq-list">
          <ul>
            <li data-aos="fade-up">
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#aq-list-1"
              >
                <div className="d-flex align-items-end justify-content-between">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-show"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="icon-close"
                  ></FontAwesomeIcon>

                  <div className="d-flex align-items-center">
                    <p className="d-inline-block text-end">
                      چگونه نوبت خود را کنسل کنیم؟
                    </p>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="ms-2 queIcon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </a>
              <div
                id="aq-list-1"
                className="collapse show"
                data-bs-parent=".aq-list"
              >
                <p className="text-end" dir="rtl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#aq-list-2"
                className="collapsed"
              >
                <div className="d-flex align-items-end justify-content-between">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-show"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="icon-close"
                  ></FontAwesomeIcon>
                  <div className="d-flex align-items-center">
                    <p className="d-inline-block text-end">
                      چگونه تاریخ یا ساعت نوبت خود را عوض کنیم؟
                    </p>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="ms-2 queIcon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </a>
              <div id="aq-list-2" className="collapse" data-bs-parent=".aq-list">
                <p className="text-end" dir="rtl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#aq-list-3"
                className="collapsed"
              >
                <div className="d-flex align-items-end justify-content-between">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-show"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="icon-close"
                  ></FontAwesomeIcon>
                  <div className="d-flex align-items-center">
                    <p className="d-inline-block text-end">
                      در صورت کنسل کردن نوبت آیا ویزیت پرداخت شده به حسابم برمی
                      گردد؟
                    </p>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="ms-2 queIcon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </a>
              <div id="aq-list-3" className="collapse" data-bs-parent=".aq-list">
                <p className="text-end" dir="rtl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#aq-list-4"
                className="collapsed"
              >
                <div className="d-flex align-items-end justify-content-between">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-show"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="icon-close"
                  ></FontAwesomeIcon>
                  <div className="d-flex align-items-center">
                    <p className="d-inline-block text-end">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است؟

                    </p>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="ms-2 queIcon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </a>
              <div id="aq-list-4" className="collapse" data-bs-parent=".aq-list">
                <p className="text-end" dir="rtl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#aq-list-5"
                className="collapsed"
              >
                <div className="d-flex align-items-end justify-content-between">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-show"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="icon-close"
                  ></FontAwesomeIcon>
                  <div className="d-flex align-items-center">
                    <p className="d-inline-block text-end">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است؟
                    </p>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="ms-2 queIcon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </a>
              <div id="aq-list-5" className="collapse" data-bs-parent=".aq-list">
                <p className="text-end" dir="rtl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
