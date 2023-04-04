import React from "react";
import Image from "next/image";
import ConnectBtn from "./SubComps/ConnectTooltip/ConnectBtn";
import ContentCard from "./SubComps/ContentCard/ContentCard";
import { sectionsData } from "./sections-data";
import SectionImage from "./SubComps/SectionImage/SectionImage";

const WeOffer = () => {
  return (
    <div className="w-full max-w-[1440px] pb-16 lg:pb-24 flex flex-col items-center justify-start gap-10 lg:gap-16 px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6">
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
          <div
            id="post-collection"
            className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-start sm:items-center justify-center gap-3">
              <ContentCard
                headline={sectionsData[0].headline}
                text={sectionsData[0].description}
                email={sectionsData[0].email}
              />
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <SectionImage url={sectionsData[0].imgUrl} />
            </div>
          </div>
          {/* Item 2  */}
          <div
            id="seed-production"
            className="w-full  grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-1 w-full flex items-center justify-start mdl:pt-16">
              <SectionImage url={sectionsData[1].imgUrl} />
            </div>
            {/* Col 2  */}
            <div className="order-2 w-full flex items-center justify-end">
              <ContentCard
                headline={sectionsData[1].headline}
                text={sectionsData[1].description}
                email={sectionsData[1].email}
              />
            </div>
          </div>
          {/* Item 3  */}
          <div
            id="products-sale"
            className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-start sm:items-center justify-center gap-3">
              <ContentCard
                headline={sectionsData[2].headline}
                text={sectionsData[2].description}
                email={sectionsData[2].email}
              />
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <SectionImage url={sectionsData[2].imgUrl} />
            </div>
          </div>
          {/* Item 4  */}
          <div
            id="cattle-sale"
            className="w-full  grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-1 w-full flex items-center justify-start mdl:pt-16">
              <SectionImage url={sectionsData[3].imgUrl} />
            </div>
            {/* Col 2  */}
            <div className="order-2 w-full flex items-center justify-end">
              <ContentCard
                headline={sectionsData[3].headline}
                text={sectionsData[3].description}
                email={sectionsData[3].email}
              />
            </div>
          </div>
          {/* Item 5  */}
          <div
            id="sheep-milk-sale"
            className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-start sm:items-center justify-center gap-3">
              <ContentCard
                headline={sectionsData[4].headline}
                text={sectionsData[4].description}
                email={sectionsData[4].email}
              />
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <div className="w-full max-w-[50%] vsm:max-w-[50%] sm:max-w-none h-[210px] vsm:h-[240px] sm:h-[230px] md:h-[350px]  flex items-center justify-center relative">
                <Image
                  src={sectionsData[4].imgUrl}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* Item 6  */}
          <div
            id="agr-commodities"
            className="w-full  grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-1 w-full flex items-center justify-start mdl:pt-16">
              <SectionImage url={sectionsData[5].imgUrl} />
            </div>
            {/* Col 2  */}
            <div className="order-2 w-full flex items-center justify-end">
              <ContentCard
                headline={sectionsData[5].headline}
                text={sectionsData[5].description}
                email={sectionsData[5].email}
              />
            </div>
          </div>
          {/* Item 7 */}
          <div
            id="ecological-agriculture"
            className="w-full  grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-2 sm:order-1 w-full max-w-[85%] vsm:max-w-[75%] sm:max-w-none flex flex-col items-start sm:items-center justify-center gap-3">
              <ContentCard
                headline={sectionsData[6].headline}
                text={sectionsData[6].description}
              />
            </div>
            {/* Col 2  */}
            <div className="order-1 sm:order-2 w-full flex items-center justify-end mdl:pt-16">
              <SectionImage url={sectionsData[6].imgUrl} />
            </div>
          </div>
          {/* Item 8  */}
          <div
            id="mechanization"
            className="w-full  grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-5 md:gap-10 mdl:gap-16 lg:gap-24"
          >
            {/* Col 1 */}
            <div className="order-1 w-full flex items-center justify-start mdl:pt-16">
              <SectionImage url={sectionsData[7].imgUrl} />
            </div>
            {/* Col 2  */}
            <div className="order-2 w-full flex items-center justify-end">
              <ContentCard
                headline={sectionsData[7].headline}
                text={sectionsData[7].description}
                email={sectionsData[7].email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
