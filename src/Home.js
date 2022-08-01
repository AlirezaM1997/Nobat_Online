import { useEffect } from "react";
import WhyUs from "./Component/WhyUs"
import Count from "./Component/Count";
import Hero from "./Component/Hero";
import MyCarousel from "./Component/Carousel";
import AskedQuestions from "./Component/AskedQuestions";
import { useAllState } from "./Provider";

export default function Home() {
  const {setSelectedTime} = useAllState()
  useEffect(() => {
    setSelectedTime('')
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Hero />
      <WhyUs />
      <Count />
      <MyCarousel /> 
      <AskedQuestions/>   
    </div>
  );
}
