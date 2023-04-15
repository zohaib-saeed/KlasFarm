import React, { useEffect, useRef, useState } from "react";
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

  const preventDefaultClick = (event) => {
    event.stopPropagation();
  };

  const targetRef = useRef(null);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  const handleShowSearchInput = () => {
    setShowSearchInput(false);
  };

  const handleHideSearchInput = () => {
    setShowSearchInput(true);
  };

  return (
    <React.Fragment>
      {/* Menu => Desktop (Above 1024px) */}
      <div className="w-full max-w-[1440px] px-6 py-[6px] lg:py-[16px] hidden lg:flex items-center justify-between gap-4 sxl:gap-5 mxl:gap-6 ">
        {/* Logo  */}
        <Link
          href="/"
          className="w-[170px] sxl:w-[190px] mxl:w-[210px] xl:w-[220px] h-[90px] mxl:h-[120px] xl:h-[125px] flex items-center justify-center relative transition-all "
        >
          <Image
            src="/images/logo-main.svg"
            alt=""
            fill
            className="object-contain"
          />
        </Link>
        {/* Nav Links  */}
        <div className="w-full flex items-center justify-center gap-3 sxl:gap-4">
          {/* About Us  */}
          <Link
            href="/about-us"
            className={`text-[16px] hover:text-fireBush hover:font-normal  sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  font-normal cursor-pointer hover-link relative transition-all duration-300`}
          >
            O nás
          </Link>
          {/* We offer  */}
          <div
            className={`we-offer hover:text-fireBush hover:font-normal  text-[16px] relative  sxl:text-[18px] mxl:text-[20px] xl:text-[25px] font-normal cursor-pointer transition-all  duration-300 hover-link`}
          >
            <Link href="/we-offer" className="w-full text-left">
              Ponúkame
            </Link>
            <div
              onClick={preventDefaultClick}
              className="we-offer-dropdown w-[260px] z-[10] hidden flex-col items-start justify-start gap-[3px] bg-davyGrey px-3 py-3 text-white text-[14px] absolute top-[22px] sxl:top-[25px] mxl:top-[28px] xl:top-[33px] left-0 rounded-b-lg transition-all"
            >
              <Link href="/we-offer#post-collection">Pozberová linka</Link>
              <Link href="/we-offer#seed-production">Výroba osív</Link>
              <Link href="/we-offer#products-sale">
                Predaj priemyselných hnojív...
              </Link>
              <Link href="/we-offer#cattle-sale">
                Predaj hovädzieho dobytka
              </Link>
              <Link href="/we-offer#sheep-milk-sale">
                Predaj ovčieho mlieka
              </Link>
              <Link href="/we-offer#agr-commodities">
                Predaj a výkup agrokomodít
              </Link>
              <Link href="/we-offer#ecological-agriculture">
                Ekologické poľnohospodárstvo
              </Link>
              <Link href="/we-offer#mechanization">
                Poskytovanie mechanizačných...
              </Link>
            </div>
          </div>
          {/* Contacts  */}
          <Link
            href="/contacts"
            className={`text-[16px]  hover:text-fireBush hover:font-normal  sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  font-normal cursor-pointer relative hover-link transition-all duration-300`}
          >
            Kontakty
          </Link>
          {/* Gallery  */}
          <Link
            href="/gallery"
            className={`text-[16px] hover:text-fireBush hover:font-normal sxl:text-[18px] mxl:text-[20px] xl:text-[25px] font-normal cursor-pointer   relative hover-link transition-all duration-300`}
          >
            Galéria
          </Link>
          {/* Corn Maze  */}
          <Link
            href="/corn-maze"
            className={`text-[16px] hover:text-fireBush hover:font-normal  sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  font-normal cursor-pointer relative hover-link transition-all duration-300`}
          >
            Kukuričné bludisko
          </Link>
          {/* News  */}
          <Link
            href="/news"
            className={`text-[16px] hover:text-fireBush hover:font-normal sxl:text-[18px] mxl:text-[20px] xl:text-[25px] font-normal cursor-pointer relative hover-link transition-all duration-300`}
          >
            Aktuality
          </Link>
        </div>
        {/* Social Links + Search button */}
        <div className="flex items-center justify-end gap-[4px]">
          {/* Facebook  */}
          <Link
            href="https://web.facebook.com/klasfarm1?_rdc=1&_rdr"
            className={`w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] ${
              showSearchInput ? "hidden" : "flex"
            } items-center justify-center relative transition-all duration-500`}
          >
            <Image
              src="/icons/social/fb.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          {/* Instagram  */}
          <Link
            href="https://www.instagram.com/klas_farm_/"
            className={`w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] ${
              showSearchInput ? "hidden" : "flex"
            } items-center justify-center relative transition-all duration-500`}
          >
            <Image
              src="/icons/social/ig.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          {/* Youtube  */}
          <Link
            href="https://www.youtube.com/channel/UCQ6DTc6XwIql9JTz5XlYqGw"
            className={`w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] ${
              showSearchInput ? "hidden" : "flex"
            } items-center justify-center relative transition-all duration-500`}
          >
            <Image
              src="/icons/social/ytb.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          {/* Search Input  */}
          <div
            onMouseEnter={handleHideSearchInput}
            onMouseLeave={handleShowSearchInput}
            className={`relative w-[40px] h-[40px] border-2 border-solid border-davyGrey flex flex-col items-center justify-center search-btn-container hover:px-2 hover:bg-white bg-davyGrey transition-all duration-500 rounded-full hover:w-[250px] z-50`}
          >
            <input
              type="text"
              placeholder="Search here..."
              ref={targetRef}
              className={`absolute w-full h-[36px] rounded-[20px] px-2 py-[10px] text-davyGrey outline-none border-none text-base font-medium search-input hidden`}
            />
            <SearchIcon
              className={`w-[28px] h-[28px] z-20 cursor-pointer search-icon self-center text-white`}
            />
          </div>
        </div>
      </div>
      {/* Menu => Small Screens (Below 1024px) */}
      <div className="w-full flex lg:hidden items-center justify-between px-2 xs:px-3 sm:px-4 md:px-5 py-[8px]">
        {/* Logo  */}
        <Link
          href="/"
          className="w-[170px] h-[90px]   flex items-center justify-center relative  trasition-all"
        >
          <Image
            src="/images/logo-main.svg"
            alt=""
            fill
            className="object-contain"
          />
        </Link>
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
