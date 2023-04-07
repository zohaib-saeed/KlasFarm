import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <div className="w-full  pb-16 lg:pb-24 flex flex-col items-center justify-start gap-10 lg:gap-16 ">
      <div className="w-full h-[290px] sm:h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
        <Image
          src="/images/news/news.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6 flex items-center justify-center h-[400px] sm:h-[500px] sxl:h-[550px]">
        <p className="font-bold text-lightGrey text-[90px] xs:text-[100px] md:text-[120px] lg:text[140px] sxl:text-[170px]">
          WIP
        </p>
      </div>
    </div>
  );
};

export default News;
