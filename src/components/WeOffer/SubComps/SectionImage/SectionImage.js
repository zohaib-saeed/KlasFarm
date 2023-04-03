import React from "react";
import Image from "next/image";

const SectionImage = ({ url }) => {
  return (
    <div className="w-full max-w-[67%] vsm:max-w-[65%] sm:max-w-none h-[190px] vsm:h-[230px] sm:h-[230px] md:h-[270px] mxl:h-[300px] flex items-center justify-center relative">
      <Image src={url} alt="" fill className="object-contain" />
    </div>
  );
};

export default SectionImage;
