import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import SearchBox from "./SearchBox"
export default function Appointments() {
  const [flag, setFlag] = useState(false);

  return (
    <section id="hero" className="d-flex align-items-center p-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6">
            <div className="row">
              <h3 className="hero-title p-3">
                به سایت نوبت دهی آنلاین پزشکان ایران خوش آمدید
              </h3>
            </div>
            <div className="row">
              <div className="container d-flex flex-column appoinBox0">
                <div className="row ">
                  <div className="col-6 p-0 ">
                    <button className={`${!flag ? 'btn btn-warning w-100 _active' :'btn btn-warning w-100'}`} id="docSear" onClick={()=>setFlag(true)}>
                      جستجوی نام پزشک
                    </button>
                  </div>
                  <div className="col-6 p-0">
                    <button className={`${flag ? 'btn btn-warning w-100 _active' :'btn btn-warning w-100'}`} id="expSear" onClick={()=>setFlag(false)}>
                      جستجو بر اساس تخصص
                    </button>
                  </div>
                </div>
                <div className="row h-100">
                  <div className="bg-primary p-4">
                      <SearchBox flag={flag}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
