import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const sliderRef = useRef(null);

  const PrevIcon = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-0 xs:left-4 mxl:left-6  top-[40%] z-[99]"
    >
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
    <div
      onClick={onClick}
      className="absolute right-4 xs:right-7 mxl:right-9  top-[41%] z-[99]"
    >
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
    nextArrow: <NextIcon onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <PrevIcon onClick={() => sliderRef.current?.slickPrev()} />,
  };
  return (
    <div
      ref={sliderRef}
      className="w-full max-w-[1440px] flex flex-col items-center justify-start"
    >
      {/* Slider  */}
      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative">
            <div className="w-full h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
              <Image
                src="/images/landing-page/carousel-1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-6 left-[6%]">
              Tradičné poľnohospodárstvo
            </p>
          </div>
          {/* Slide 2  */}
          <div className="relative">
            <div className="w-full h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
              <Image
                src="/images/landing-page/carousel-2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-4 left-[20%] sm:left-[30%] md:left-[32%]">
              s moderným riadením
            </p>
          </div>
        </Slider>
      </div>
      {/* Main Content  */}
      <div className="w-full flex flex-col items-center justify-start py-10 mdl:pt-16 mdl:pb-[360px] lg:pb-[367px] sxl:pb-[400px] mxl:pb-[410px] px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
        <div className="w-full grid grid-cols-1 mdl:grid-cols-2 gap-4 sm:gap-6 mdl:gap-0   relative">
          <div className="flex items-center justify-start ">
            <div className="w-[350px] xs:w-[460px] vsm:w-[470px] sm:w-[520px] h-[300px] xs:h-[400px] vsm:h-[410px] sm:h-[430px] flex mdl:hidden  items-center justify-center relative  transition-all">
              <Image
                src="/images/landing-page/landing-page-main.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full vsm:max-w-[95%] sm:max-w-[80%] mdl:max-w-[97%] sxl:max-w-[90%] flex flex-col items-start justify-start">
            <p className="text-[16px] vsm:text-[18px] sxl:text-[20px] mxl:text-2xl ">
              V roku 2012 vznikla v srdci{" "}
              <span className="font-bold">Slovenska</span> spoločnosť{" "}
              <span className="font-bold">Klas FARM</span> zameraná nie len na{" "}
              <span className="font-bold">ekologické</span> a
              <span className="font-bold">udržateľné poľnohospodárstvo</span>,
              ale aj na chov hovädzieho dobytka či chov oviec, prioritne na
              mlieko. História poľnohospodárstva, ako aj podmienky naň, sú v
              tejto oblasti ideálne,a z toho práve ťažíme aj my. Naša filozofia
              „Tradičné poľnohospodárstvo s moderným riadením“, je odzrkadlená
              aj v logu s dominantným prvkom vyzretého klasu.
            </p>
          </div>
          <div className="absolute hidden mdl:inline-block  top-[31%] lg:top-[16%] sxl:top-[18%] mxl:top-[26%] xl:top-[27%]   lg:left-[4%] mxl:left-[6%] xl:left-[10%]  ">
            <div className="w-[560px] lg:w-[600px] sxl:w-[650px] mxl:w-[680px] h-[480px] lg:h-[500px] sxl:h-[550px] mxl:h-[580px] flex items-center justify-center relative">
              <Image
                src="/images/landing-page/landing-page-main.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
