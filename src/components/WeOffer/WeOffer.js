import React from "react";
import Image from "next/image";

const WeOffer = () => {
  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center justify-start px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
      <div className="w-full h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
        <Image
          src="/images/we-offer/wallpaper.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WeOffer;
