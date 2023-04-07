import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const sliderRef = useRef(null);

  const PrevIcon = ({ onClick }) => (
    <div onClick={onClick} className="absolute left-0   top-[40%] z-[99]">
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
    <div onClick={onClick} className="absolute right-4   top-[41%] z-[99]">
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
      className="w-full  flex flex-col items-center justify-start "
    >
      {/* Slider  */}
      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="relative">
            <div className="w-full h-[290px] sm:h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
              <Image
                src="/images/about-us/carousel-1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-[37%] sxl:top-[35%] left-[18%] xs:left-[16%] sm:left-[13%] md:left-[10%]">
              O nás
            </p>
          </div>
          {/* Slide 2  */}
          <div className="relative">
            <div className="w-full h[290px] sm:h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
              <Image
                src="/images/about-us/carousel-2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>
      {/* Main Content  */}
      <div className="w-full max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] mxl:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-10 mxl:gap-12 pt-9 pb-12">
        {/* Col 1 */}
        <div className="order-2 lg:order-first w-full flex items-center justify-start">
          <div className="w-full  xs:max-w-[85%] sm:max-w-[75%] mdl:max-w-[60%] lg:max-w-none h-[370px] vsm:h-[500px] sm:h-[550px] mdl:h-[600px] flex items-center justify-center relative">
            <Image
              src="/images/about-us/about-us-main.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Col 2 */}
        <div className="w-full flex flex-col items-start justify-start">
          <ul className="w-full text-[18px] vsm:text-[20px] mxl:text-[22px] flex flex-col items-start justify-start px-4 vsm:px-5 mdl:px-6 lg:px-0 gap-3 mxl:gap-5 list-outside  list-disc text-black">
            <li>
              V roku 2012 vznikla v{" "}
              <span className="font-bold">srdci Slovenska</span> spoločnosť{" "}
              <span className="font-bold">Klas FARM</span> zameraná na{" "}
              <span className="font-bold">TRADIČNÉ poľnohospodárstvo</span>, s
              orientáciou na EKO produkciu, hlavne pri chove hovädzieho dobytka
              a oviec, ktoré súd hlavným symbolom Slovenského poľnohospodárstva.
              História poľnohospodárstva, ako aj podmienky naň, sú v tejto
              oblasti ideálne, a z toho práve ťažíme aj my.{" "}
              <span className="font-bold">MODERNÉ riadenie</span>a zavádzanie
              nových trendov je našou vysokou prioritou so zachovaním tradície a
              s ohľadom na prírodu , z čoho vznikla aj naša firemná filozofia
              „Tradičné poľnohospodárstvo s moderným riadením“.
            </li>
            <li>
              Cieľom je využiť poznatky našich predkov a ponechať pri pestovaní
              a chove dobytka rokmi overené postupy, ktoré sú perfektne doplnené
              o najmodernejšie činnosti riadenia. Práve toto spojenie môže
              priniesť opätovný rozvoj poľnohospodárstva na území stredného
              Slovenska a následne aj vlastnú{" "}
              <span className="font-bold">surovinovú sebestačnosť</span> pre
              slovenské podniky, kam práve naša produkcia putuje.
            </li>
            <li>
              Odmenou za našu prácu je úsmev na vašich perách. Keďže aj vďaka
              našej produkcii sa na vašom stole objaví vynikajúci slovenský
              chlieb, či skvelá{" "}
              <span className="font-bold">slovenská bryndza</span>.
            </li>
            <li>
              Aj napriek neustálym výkyvom počasia, ktoré do podstatnej miery
              ovplyvňujú chod spoločnosti, je pre nás každá situácia výzvou.
              Pýšiť sa môžeme aj{" "}
              <span className="font-bold">Bio certifikátom</span>, ktorý okrem
              iného hovorí aj o tom, že naša produkcia podlieha veľmi prísnym
              kritériám pri pestovaní, chove a následnom spracovaní.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
