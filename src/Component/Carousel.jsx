import "../Style/Carousel.css";
import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-2 col-1"></div>
        <div className="col-sm-8 col-10">
          <h2 className="text-center mb-5 title">پزشکان ما</h2>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="">
              <div className="container ">
                <div className="row ">
                  <div className="col">
                    <img
                      className="d-block img"
                      src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/371244.jpeg`}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <p className="caption">
                     <span><b> دکتر اسفندیار ناصری</b></span><br></br>
                     <span>متخصص دندانپزشکی</span><br></br>
                     <span>جراح لثه و ایمپلنت / ارتودنسی دندان</span>
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      className="d-block img"
                      src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/769869.jpeg`}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="caption">
                     <span><b>دکتر طاها علیزاده قویمی</b></span><br></br>
                     <span> متخصص گوش و حلق و بینی</span><br></br>
                     <span>فوق تخصص گوش/فلوشیپ بینی و سینوس</span>
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img
                      className="d-block img"
                      src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/259715.jpeg`}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <p className="caption">
                     <span><b>دکتر شهرزاد کریمی</b></span><br></br>
                     <span> متخصص اعصاب و روان </span><br></br>
                     <span>فوق تخصص مغز و اعصاب (نورولوژی)</span>
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-2 col-1"></div>

      </div>
    </div>
    

  );
}
