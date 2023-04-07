import React from "react";
import Image from "next/image";
import ActionedEmail from "./ActionedEmail";

const Contacts = () => {
  return (
    <div className="w-full  pb-10 vsm:pb-12 md:pb-16 lg:pb-24 flex flex-col items-center justify-start gap-10 vsm:gap-12 md:gap-16 lg:gap-24 ">
      <div className="w-full h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
        <Image
          src="/images/contacts/wallpaper.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      {/* Contact Cards  */}
      <div className="w-full flex flex-col items-center justify-start max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
        <div className="w-full max-w-[80%] xs:max-w-[70%] vsm:max-w-[95%] sm:max-w-[90%] md:max-w-[75%] mdl:max-w-[65%] lg:max-w-[60%] flex-col items-center justify-start ">
          <div className="w-full grid grid-cols-1 vsm:grid-cols-2 gap-2 lg:gap-3 mxl:gap-4">
            {/* Col 1  */}
            <div className="w-full bg-davyGrey px-4 lg:px-6 py-4 lg:py-6 flex flex-col items-start justify-start gap-1 rounded-xl sxl:rounded-2xl">
              <div className="w-full  text-white text-[15px] xl:text-base font-semibold">
                Predaj, nákup agrokomodít, služby pozberovej linky
              </div>
              <div className="text-white text-[16px] xl:text-[18px]">
                Ing. Peter Pastorok
              </div>
              <div className="text-white text-[16px] xl:text-[18px]">
                mobil: +421 915 213 708
              </div>
              <ActionedEmail email="pastorok@gmail.com" />
            </div>
            {/* Col 2  */}
            <div className="w-full flex items-start justify-center">
              <div className="w-full bg-davyGrey px-4 lg:px-6 py-4 lg:py-6 flex flex-col items-start justify-start gap-1 rounded-xl sxl:rounded-2xl">
                <div className="text-white text-[15px] xl:text-base font-semibold">
                  Predaj živočíšnej výroby
                </div>
                <div className="text-white text-[16px] xl:text-[18px]">
                  Ing. Peter Slovák
                </div>
                <div className="text-white text-[16px] xl:text-[18px]">
                  mobil: +421 904 437 755
                </div>
                <ActionedEmail email="slovak@klasfarm.sk" />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 vsm:grid-cols-2 gap-2 lg:gap-3 mxl:gap-4 mt-2 lg:mt-3 sxl:mt-4">
            {/* Col 1  */}
            <div className="w-full flex flex-col items-center justify-start">
              <div className="w-full bg-davyGrey px-4 lg:px-6 py-4 lg:py-6 flex flex-col items-start justify-start gap-1 rounded-xl sxl:rounded-2xl">
                <div className="w-full  text-white text-[15px] xl:text-base font-semibold">
                  Mechanizácia
                </div>
                <div className="text-white text-[16px] xl:text-[18px]">
                  Ing. Martin Tibenský
                </div>
                <div className="text-white text-[16px] xl:text-[18px]">
                  mobil: +421 904 504 752
                </div>
                <ActionedEmail email="tibensky@klasfarm.sk" />
              </div>
            </div>
            {/* Col 2  */}
            <div className="w-full flex flex-col items-start justify-start gap-[6px] sxl:gap-3">
              <div className="w-full bg-davyGrey px-4 lg:px-6 py-4 lg:py-6 flex flex-col items-start justify-start gap-1 rounded-xl sxl:rounded-2xl">
                <div className="w-full  text-white text-[15px] xl:text-base font-semibold">
                  Iné otázky
                </div>
                <ActionedEmail email="info@klasfarm.sk" />
              </div>

              <div className="w-[80px] lg:w-[90px] sxl:w-[100px] h-[80px] lg:h-[90px] sxl:h-[100px] flex items-center justify-center relative ">
                <Image
                  src="/icons/contact-icon.svg"
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

export default Contacts;
