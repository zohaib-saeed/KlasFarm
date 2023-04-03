import React from "react";
import Image from "next/image";
import ConnectBtn from "./SubComps/ConnectTooltip/ConnectBtn";

const WeOffer = () => {
  return (
    <div className="w-full max-w-[1440px] pb-11 flex flex-col items-center justify-start gap-10 px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
      <div className="relative w-full">
        <div className="w-full h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
          <Image
            src="/images/we-offer/wallpaper.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-[35%] left-[6%]">
          Ponúkame
        </p>
      </div>
      <div className="w-full flex flex-col items-end justify-start">
        <div className="w-full max-w-[1280px] flex flex-col items-center justify-start gap-10">
          {/* Item 1  */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24">
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-center justify-center gap-3">
              <div className="rounded-2xl drop-shadow-3xl px-4 mdl:px-6  lg:px-7 mxl:px-9 py-3 mdl:py-4 lg:py-5 mxl:py-6 bg-bianca w-full flex flex-col items-start justify-start  ">
                <h1 className="text-fireBush font-bold text-[25px] vsm:text-[27px] md:text-[30px] mdl:text-[32px] lg:text-[38px] mxl:text-[45px] text-left">
                  Pozberová linka
                </h1>
                <p className="text-[16px] md:text-[18px] mdl:text-[20px] lg:text-[22px] mxl:text-[25px] ">
                  Moderná Pozberová linka vybudovaná v r. 2020, je zameraná na
                  sušenie, čistenie, uskladnenie rastlinných komodít (pšenica,
                  repka, kukuričné zrno, sójové bôby, slnečnica, raž, jačmeň,
                  ...).
                </p>
              </div>
              <button className="bg-fireBush text-white text-base vsm:text-[18px] md:text-[20px] mdl:text-[22px] lg:text-[25px] mxl:text-[30px] font-semibold py-[8px] vsm:py-[12px] lg:py-4 sxl:py-[19px] px-6 vsm:px-8 lg:px-10 rounded-3xl">
                Kontaktovať
              </button>
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <div className="w-full max-w-[67%] vsm:max-w-[65%] sm:max-w-none h-[190px] vsm:h-[230px] sm:h-[230px] md:h-[270px] mxl:h-[300px] flex items-center justify-center relative">
                <Image
                  src="/images/we-offer/offers/post-collection.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* Item 2  */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24">
            {/* Col 1 */}
            <div className="order-1 w-full flex items-center justify-start mdl:pt-16">
              <div className="w-full max-w-[67%] vsm:max-w-[65%] sm:max-w-none h-[190px] vsm:h-[230px] sm:h-[230px] md:h-[270px] mxl:h-[300px] flex items-center justify-center relative">
                <Image
                  src="/images/we-offer/offers/seed-production.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Col 2  */}
            <div className="order-2 w-full flex items-center justify-end">
              <div className=" w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-center justify-center gap-3">
                <div className="rounded-2xl drop-shadow-3xl px-4 mdl:px-6  lg:px-7 mxl:px-9 py-3 mdl:py-4 lg:py-5 mxl:py-6 bg-bianca w-full flex flex-col items-start justify-start  ">
                  <h1 className="text-fireBush font-bold text-[25px] vsm:text-[27px] md:text-[30px] mdl:text-[32px] lg:text-[38px] mxl:text-[45px] text-left">
                    Výroba osív
                  </h1>
                  <p className="text-[16px] md:text-[18px] mdl:text-[20px] lg:text-[22px] mxl:text-[25px] ">
                    Podstatnú časť našej činnosti tvory výroba farmárskeho a
                    certifikovaného osiva, pšenice (ozimná / jarná).
                  </p>
                </div>
                <button className="bg-fireBush text-white text-base vsm:text-[18px] md:text-[20px] mdl:text-[22px] lg:text-[25px] mxl:text-[30px] font-semibold py-[8px] vsm:py-[12px] lg:py-4 sxl:py-[19px] px-6 vsm:px-8 lg:px-10 rounded-3xl">
                  Kontaktovať
                </button>
              </div>
            </div>
          </div>
          {/* Item 3  */}
          <div className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24">
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-center justify-center gap-3">
              <div className="rounded-2xl drop-shadow-3xl px-4 mdl:px-6  lg:px-7 mxl:px-9 py-3 mdl:py-4 lg:py-5 mxl:py-6 bg-bianca w-full flex flex-col items-start justify-start  ">
                <h1 className="text-fireBush font-bold text-[25px] vsm:text-[27px] md:text-[30px] mdl:text-[32px] lg:text-[38px] mxl:text-[45px] text-left leading-tight">
                  Predaj priemyselných hnojív, predaj osív, predaj prípravkov na
                  ochranu rastlín
                </h1>
                <p className="text-[16px] md:text-[18px] mdl:text-[20px] lg:text-[22px] mxl:text-[25px] ">
                  Na základe vášho dopytu vieme zabezpečiť priemyselné hnojivá,
                  osivá či prípravky na ochranu rastlín. Možnosť zabezpečenia
                  dopravy do miesta dodania.
                </p>
              </div>
              {/* <button className="bg-fireBush text-white text-base vsm:text-[18px] md:text-[20px] mdl:text-[22px] lg:text-[25px] mxl:text-[30px] font-semibold py-[8px] vsm:py-[12px] lg:py-4 sxl:py-[19px] px-6 vsm:px-8 lg:px-10 rounded-3xl">
                Kontaktovať
              </button> */}
              <ConnectBtn />
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <div className="w-full max-w-[67%] vsm:max-w-[65%] sm:max-w-none h-[190px] vsm:h-[230px] sm:h-[230px] md:h-[270px] mxl:h-[300px] flex items-center justify-center relative">
                <Image
                  src="/images/we-offer/offers/seed-production.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
