import PureCounter from "@srexi/purecounterjs";
import { useEffect } from "react";
import "../Style/Count.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHospital, faListCheck, faUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons'

export default function Count() {
  useEffect(() => {
    new PureCounter();
  });
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className=" col-md-4">
            <div className="count-box mb-5">
              <FontAwesomeIcon icon={faUserDoctor} className="icon"/>
              <span
                data-purecounter-start="0"
                data-purecounter-end="185"
                data-purecounter-duration="2.3"
                className="purecounter"
              ></span>
              <p>پزشکان</p>
            </div>
          </div>

          <div className=" col-md-4">
            <div className="count-box mb-5">
              <FontAwesomeIcon icon={faUser} className="icon"/>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1810"
                data-purecounter-duration="2.3"
                className="purecounter"
              ></span>
              <p>کاربران</p>
            </div>
          </div>

          <div className=" col-md-4 ">
            <div className="count-box mb-5">
              <FontAwesomeIcon icon={faListCheck} className="icon"/>
              <span
                data-purecounter-start="0"
                data-purecounter-end="2543"
                data-purecounter-duration="2.3"
                className="purecounter"
              ></span>
              <p>کل نوبت ها</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// new PureCounter({
//     // Setting that can't' be overriden on pre-element
//     selector: '.purecounter',		// HTML query selector for spesific element

//     // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
//     start: 0, 			            // Starting number [unit]
//     end: 100, 			            // End number [unit]
//     duration: 2, 	                // The time in seconds for the animation to complete [seconds]
//     delay: 10, 			            // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
//     once: true, 		            // Counting at once or recount when the element in view [boolean]
//     repeat: false, 		            // Repeat count for certain time [boolean:false|seconds]
//     decimals: 0, 		            // How many decimal places to show. [unit]
//     legacy: true,                   // If this is true it will use the scroll event listener on browsers
//     filesizing: false, 	            // This will enable/disable File Size format [boolean]
//     currency: false, 	            // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
//     separator: false, 	            // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
// });
