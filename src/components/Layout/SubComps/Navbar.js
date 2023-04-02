import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { BiSearch as SearchIcon } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      {/* Menu => Desktop (Above 1024px) */}
      <div className="w-full max-w-[1440px] px-6 py-[6px] lg:py-[16px] hidden lg:flex items-center justify-between gap-6 mxl:gap-8">
        {/* Logo  */}
        <Link href="/">
          <div className="w-[230px] lg:w-[260px]  h-[110px] lg:h-[135px]  flex items-center justify-center relative transition-all">
            <Image
              src="/images/logo-main.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </Link>
        {/* Nav Links  */}
        <div className="w-full flex items-center justify-center gap-3 sxl:gap-4">
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px]  font-medium cursor-pointer">
            O nás
          </div>
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px] font-medium cursor-pointer">
            Ponúkame
          </div>
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px]  font-medium cursor-pointer">
            Kontakty
          </div>
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px]  font-medium cursor-pointer">
            Galéria
          </div>
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px]  font-medium cursor-pointer">
            Kukuričné bludisko
          </div>
          <div className="text-[18px] sxl:text-[20px] mxl:text-[22px] xl:text-[25px] font-medium cursor-pointer">
            Aktuality
          </div>
        </div>
        {/* Social Links  */}
        <div className="flex items-center justify-end gap-[4px]">
          {/* Facebook  */}
          <Link href="">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative">
              <Image
                src="/icons/social/fb.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Instagram  */}
          <Link href="">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative">
              <Image
                src="/icons/social/ig.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Youtube  */}
          <Link href="">
            <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative">
              <Image
                src="/icons/social/ytb.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
          {/* Find  */}
          <div className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] cursor-pointer flex items-center justify-center relative">
            <Image
              src="/icons/social/find.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* Menu => Small Screens (Below 1024px) */}
      <div className="w-full flex lg:hidden items-center justify-between px-2 xs:px-3 sm:px-4 md:px-5 py-[6px]">
        {/* Logo  */}
        <div className="w-[150px] xs:w-[170px] md:w-[180px] h-[90px] xs:h-[110px] md:h-[140px]  flex items-center justify-center relative  trasition-all">
          <Image
            src="/images/logo-main.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-3">
          {/* Find  */}
          <SearchIcon className="w-[24px] h-[26px] cursor-pointer" />
          {/* Menu Icon  */}
          <MenuIcon
            onClick={toggleDrawer}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
      </div>
      {/* Sidebar Menu  */}
      <Sidebar
        isOpen={openMenu}
        setIsOpen={setOpenMenu}
        toggleDrawer={toggleDrawer}
      />
    </React.Fragment>
  );
};

export default Navbar;