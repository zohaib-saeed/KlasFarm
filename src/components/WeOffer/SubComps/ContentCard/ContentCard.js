import React from "react";
import ConnectBtn from "../ConnectTooltip/ConnectBtn";

const ContentCard = ({ headline, text, email }) => {
  return (
    <div className=" w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-center justify-center gap-3">
      <div className="rounded-2xl drop-shadow-3xl px-4 mdl:px-6  lg:px-7 mxl:px-9 py-3 mdl:py-4 lg:py-5 mxl:py-6 bg-bianca w-full flex flex-col items-start justify-start  ">
        <h1 className="text-fireBush font-bold text-[23px] vsm:text-[24px] md:text-[27px] mdl:text-[30px] lg:text-[36px] mxl:text-[40px] text-left leading-tight">
          {headline}
        </h1>
        <p className="text-[16px] md:text-[18px] mdl:text-[20px] lg:text-[22px] mxl:text-[25px] ">
          {text}
        </p>
      </div>
      {email && <ConnectBtn email={email} />}
    </div>
  );
};

export default ContentCard;
