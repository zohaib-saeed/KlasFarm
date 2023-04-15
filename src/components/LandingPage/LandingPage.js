import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const sliderRef = useRef(null);

  const PrevIcon = ({ onClick }) => (
    <div onClick={onClick} className="absolute left-0   top-[45%] z-[99]">
      <div className="w-[60px] h-[60px] cursor-pointer relative flex items-center justify-center">
        <Image
          src="/icons/prev-arrow.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
  const NextIcon = ({ onClick }) => (
    <div onClick={onClick} className="absolute right-4  top-[45%] z-[99]">
      <div className="w-[30px] h-[60px] cursor-pointer relative flex items-center justify-center">
        <Image
          src="/icons/next-arrow.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 3000,
    nextArrow: <NextIcon onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevIcon onClick={() => sliderRef.current?.slickPrev()} />,
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const numSlides = 2;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((index) => (index + 1) % numSlides);
    }, 3000); // change this to adjust slide duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="w-full  flex flex-col items-center justify-start pb-5 xs:pb-7 md:pb-10"
    >
      {/* Slider  */}
      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative">
            <div className="w-full h-[430px] sm:h-[500px] sxl:h-[570px] mxl:h-[640px] flex items-center justify-center relative">
              <Image
                src="/images/landing-page/carousel-1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              className={`text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-6 left-[6%] ${
                currentSlideIndex === 0 ? "fade-in" : ""
              }`}
            >
              Tradičné poľnohospodárstvo
            </div>
          </div>
          {/* Slide 2  */}
          <div className="relative w-full">
            <div className="w-full h-[430px] sm:h-[500px] sxl:h-[570px] mxl:h-[640px] flex items-center justify-center relative">
              <Image
                src="/images/landing-page/carousel-2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              className={`py-4 xs:py-6 sm:py-8 mdl:py-10 bg-davyGrey bg-opacity-40 w-full text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-0 mx-auto text-center  ${
                currentSlideIndex === 1 ? "fade-in" : ""
              }`}
            >
              s moderným riadením
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LandingPage;
