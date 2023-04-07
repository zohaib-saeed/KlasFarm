import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-davyGrey flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6  mx-2 xs:mx-3 sm:mx-4 md:mx-5 lg:mx-6 py-6  flex flex-col items-center justify-start ">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[0.8fr_0.8fr_1.2fr_1.2fr_1.1fr_0.1fr] gap-6 sm:gap-4 items-center">
          {/* Logo => Above 640px  */}
          <div className="w-[220px] xl:w-[250px] h-[120px] xl:h-[137px] ml-[-24px] lg:ml-[-16px] hidden sm:flex items-center justify-center relative">
            <Image
              src="/images/logo-alt.svg"
              alt=""
              fill
              className="object-cotain"
            />
          </div>
          {/* Logo + Socials => Below 640px */}
          <div className="w-full sm:hidden flex items-start justify-between gap-5">
            <div className="w-[220px]  h-[120px] ml-[-24px] flex items-center justify-center relative">
              <Image
                src="/images/logo-alt.svg"
                alt=""
                fill
                className="object-cotain"
              />
            </div>
            <div className="flex flex-col items-start sm:items-end justify-center gap-[5px]">
              {/* => Facebook */}
              <Link href="https://web.facebook.com/klasfarm1?_rdc=1&_rdr">
                <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                  <Image
                    src="/icons/social/fb-white.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              {/* Instagram */}
              <Link href="https://www.instagram.com/klas_farm_/">
                <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                  <Image
                    src="/icons/social/ig-white.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              {/* Youtube  */}
              <Link href="https://www.youtube.com/channel/UCQ6DTc6XwIql9JTz5XlYqGw">
                <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                  <Image
                    src="/icons/social/ytb-white.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="text-[26px] xl:text-[30px] font-bold text-white ">
            KONTAKTY
          </div>
          {/* Contact for agricultral purchases  */}
          <div className="flex flex-col items-start justify-center gap-1">
            <div className="w-full xs:max-w-[50%] sm:max-w-none text-white text-[15px] xl:text-base font-semibold">
              Predaj, nákup agrokomodít, služby pozberovej linky
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              Ing. Peter Pastorok
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              mobil: +421 915 213 708
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              e-mail: pastorok@klasfarm.sk
            </div>
          </div>
          {/* Contact details  */}
          <div className="flex flex-col items-start justify-center gap-1">
            <div className="text-white text-[15px] xl:text-base font-semibold">
              Predaj živočíšnej výroby
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              Ing. Peter Slovák
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              mobil: +421 904 437 755
            </div>
            <div className="text-white text-[16px] xl:text-[18px]">
              e-mail: slovak@klasfarm.sk
            </div>
          </div>
          {/* email contact  */}
          <div className="text-white text-[16px] xl:text-[18px]">
            e-mail: info@klasfarm.sk
          </div>
          {/* Socials => Above 640px  */}
          <div className="hidden sm:flex flex-col items-start sm:items-end justify-center gap-[5px]">
            {/* => Facebook */}
            <Link href="https://web.facebook.com/klasfarm1?_rdc=1&_rdr">
              <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                <Image
                  src="/icons/social/fb-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            {/* Instagram */}
            <Link href="https://www.instagram.com/klas_farm_/">
              <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                <Image
                  src="/icons/social/ig-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            {/* Youtube  */}
            <Link href="https://www.youtube.com/channel/UCQ6DTc6XwIql9JTz5XlYqGw">
              <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] relative flex items-center justify-center">
                <Image
                  src="/icons/social/ytb-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
