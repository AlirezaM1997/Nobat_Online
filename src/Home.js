import "./App.css";
import WhyUs from "./Component/WhyUs"
import Count from "./Component/Count";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import MyCarousel from "./Component/Carousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Count />
      <MyCarousel />
      <Footer />
    </div>
  );
}
