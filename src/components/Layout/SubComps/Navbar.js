import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FiMenu as MenuIcon } from "react-icons/fi";
import { BiSearch as SearchIcon } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const preventDefaultClick = (event) => {
    event.stopPropagation();
  };

  const [activeTab, setActiveTab] = useState("");

  const handleActiveLinks = () => {
    if (router.pathname === "/about-us") {
      setActiveTab("about-us");
    } else if (router.pathname.includes("/we-offer")) {
      setActiveTab("we-offer");
    } else if (router.pathname === "/contacts") {
      setActiveTab("contacts");
    } else if (router.pathname === "/gallery") {
      setActiveTab("gallery");
    } else if (router.pathname === "/news") {
      setActiveTab("news");
    } else if (router.pathname === "/corn-maze") {
      setActiveTab("corn-maze");
    }
  };

  useEffect(() => {
    handleActiveLinks();
  }, [router]);

  return (
    <React.Fragment>
      {/* Menu => Desktop (Above 1024px) */}
      <div className="w-full max-w-[1440px] px-6 py-[6px] lg:py-[16px] hidden lg:flex items-center justify-between gap-4 sxl:gap-5 mxl:gap-6">
        {/* Logo  */}
        <Link href="/">
          <div className="w-[170px] sxl:w-[190px] mxl:w-[210px] xl:w-[220px] h-[90px] mxl:h-[120px] xl:h-[125px] flex items-center justify-center relative transition-all">
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
          {/* About Us  */}
          <Link href="/about-us">
            <div
              className={`text-[16px] hover:text-davyGrey transition-all sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  ${
                activeTab === "about-us" ? "font-semibold" : "font-medium"
              } cursor-pointer`}
            >
              O nás
            </div>
          </Link>
          {/* We offer  */}
          <Link href="/we-offer">
            <div
              className={`we-offer hover:text-davyGrey transition-all text-[16px] relative hover:underline  sxl:text-[18px] mxl:text-[20px] xl:text-[25px] ${
                activeTab === "we-offer" ? "font-semibold" : "font-medium"
              } cursor-pointer transition-all`}
            >
              Ponúkame
              <div
                onClick={preventDefaultClick}
                className="we-offer-dropdown w-[260px] z-[10] hidden flex-col items-start justify-start gap-[3px] bg-davyGrey px-3 py-3 text-white text-[14px] absolute top-[22px] sxl:top-[25px] mxl:top-[28px] xl:top-[33px] left-0 rounded-b-lg transition-all"
              >
                <Link href="/we-offer#post-collection">
                  <div>Pozberová linka</div>
                </Link>
                <Link href="/we-offer#seed-production">
                  <div>Výroba osív</div>
                </Link>
                <Link href="/we-offer#products-sale">
                  <div>Predaj priemyselných hnojív...</div>
                </Link>
                <Link href="/we-offer#cattle-sale">
                  <div>Predaj hovädzieho dobytka</div>
                </Link>
                <Link href="/we-offer#sheep-milk-sale">
                  <div>Predaj ovčieho mlieka</div>
                </Link>
                <Link href="/we-offer#agr-commodities">
                  <div>Predaj a výkup agrokomodít</div>
                </Link>
                <Link href="/we-offer#ecological-agriculture">
                  <div>Ekologické poľnohospodárstvo</div>
                </Link>
                <Link href="/we-offer#mechanization">
                  <div>Poskytovanie mechanizačných...</div>
                </Link>
              </div>
            </div>
          </Link>
          {/* Contacts  */}
          <Link href="/contacts">
            <div
              className={`text-[16px] hover:text-davyGrey transition-all sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  ${
                activeTab === "contacts" ? "font-semibold" : "font-medium"
              } cursor-pointer`}
            >
              Kontakty
            </div>
          </Link>
          {/* Gallery  */}
          <Link href="/gallery">
            <div
              className={`text-[16px] hover:text-davyGrey transition-all sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  ${
                activeTab === "gallery" ? "font-semibold" : "font-medium"
              } cursor-pointer`}
            >
              Galéria
            </div>
          </Link>
          {/* Corn Maze  */}
          <Link href="/corn-maze">
            <div
              className={`text-[16px] hover:text-davyGrey transition-all sxl:text-[18px] mxl:text-[20px] xl:text-[25px]  ${
                activeTab === "corn-maze" ? "font-semibold" : "font-medium"
              } cursor-pointer`}
            >
              Kukuričné bludisko
            </div>
          </Link>
          {/* News  */}
          <Link href="/news">
            <div
              className={`text-[16px] hover:text-davyGrey transition-all sxl:text-[18px] mxl:text-[20px] xl:text-[25px] ${
                activeTab === "news" ? "font-semibold" : "font-medium"
              } cursor-pointer`}
            >
              Aktuality
            </div>
          </Link>
        </div>
        {/* Social Links  */}
        <div className="flex items-center justify-end gap-[4px]">
          {/* Facebook  */}
          <Link href="https://web.facebook.com/klasfarm1?_rdc=1&_rdr">
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
          <Link href="https://www.instagram.com/klas_farm_/">
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
          <Link href="https://www.youtube.com/channel/UCQ6DTc6XwIql9JTz5XlYqGw">
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
      <div className="w-full flex lg:hidden items-center justify-between px-2 xs:px-3 sm:px-4 md:px-5 py-[8px]">
        {/* Logo  */}
        <div className="w-[170px] h-[90px]   flex items-center justify-center relative  trasition-all">
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
