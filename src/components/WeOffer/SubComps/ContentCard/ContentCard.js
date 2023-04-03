import React from "react";
import ConnectBtn from "../ConnectTooltip/ConnectBtn";

const ContentCard = ({ headline, text, email }) => {
  return (
    <div className=" w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-center justify-center gap-3">
      <div className="rounded-2xl drop-shadow-3xl px-4 mdl:px-6  lg:px-7 mxl:px-9 py-3 mdl:py-4 lg:py-5 mxl:py-6 bg-bianca w-full flex flex-col items-start justify-start  ">
        <h1 className="text-fireBush font-bold text-[25px] vsm:text-[27px] md:text-[30px] mdl:text-[32px] lg:text-[38px] mxl:text-[45px] text-left">
          {headline}
        </h1>
        <p className="text-[16px] md:text-[18px] mdl:text-[20px] lg:text-[22px] mxl:text-[25px] ">
          {text}
        </p>
      </div>
      <ConnectBtn email={email} />
    </div>
  );
};

export default ContentCard;
