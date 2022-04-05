import "../Style/AskedQuestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function AskedQuestions() {
  return (
    <section id="aq" class="aq aq-bg mb-5 py-4">
      <div class="container my-5">
        <div class="section-title" dir="rtl">
          {/* <FontAwesomeIcon
            className="mx-3 queIconTitle"
            icon={faQuestionCircle}
          ></FontAwesomeIcon> */}
          <h2 className="mb-4 d-inline-block">سوال و پاسخ</h2>
        </div>

        <div class="aq-list">
          <ul>
            <li data-aos="fade-up">
              <a
                data-bs-toggle="collapse"
                class="collapse"
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
                class="collapse show"
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
                class="collapsed"
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
              <div id="aq-list-2" class="collapse" data-bs-parent=".aq-list">
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
                class="collapsed"
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
              <div id="aq-list-3" class="collapse" data-bs-parent=".aq-list">
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
                class="collapsed"
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
              <div id="aq-list-4" class="collapse" data-bs-parent=".aq-list">
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
                class="collapsed"
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
              <div id="aq-list-5" class="collapse" data-bs-parent=".aq-list">
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
