import "./App.css";
import Header from "./Component/Header";
import Appointments from "./Component/Appointments";
import WhyUs from "./Component/WhyUs"
// import * as Icon from 'react-bootstrap-icons';
// import { ArrowRight } from "react-bootstrap-icons";
export default function App() {
  return (
    <div>
      <Header />
      <Appointments />
      <WhyUs />
    </div>
  );
}
