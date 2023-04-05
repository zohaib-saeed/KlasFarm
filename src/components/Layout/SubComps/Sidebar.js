import React from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CgClose as CloseIcon } from "react-icons/cg";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="!w-full h-screen"
    >
      <div className="w-full h-full flex flex-col items-center justify-between gap-12 sm:gap-16 pb-16 pt-6  px-2 xs:px-3 sm:px-4 md:px-5">
        {/* Close Menu Button  */}
        <div className="w-full flex items-center justify-end">
          <CloseIcon
            onClick={toggleDrawer}
            className="w-[26px] h-[26px] cursor-pointer"
          />
        </div>
        {/* Nav Links */}
        <div className="w-full flex flex-col items-center justify-center gap-3 ">
          {/* About Us */}
          <Link href="/about-us">
            <div
              onClick={toggleDrawer}
              className="text-[18px] font-medium cursor-pointer"
            >
              O nás
            </div>
          </Link>
          {/* We offer  */}
          <Link href="/we-offer">
            <div
              onClick={toggleDrawer}
              className="text-[18px]  font-medium cursor-pointer"
            >
              Ponúkame
            </div>
          </Link>
          {/* Contacts  */}
          <Link href="/contacts">
            <div
              onClick={toggleDrawer}
              className="text-[18px]  font-medium cursor-pointer"
            >
              Kontakty
            </div>
          </Link>
          {/* Gallery  */}
          <Link href="/gallery">
            <div
              onClick={toggleDrawer}
              className="text-[18px]  font-medium cursor-pointer"
            >
              Galéria
            </div>
          </Link>
          {/* Corn Maze  */}
          <Link href="/corn-maze">
            <div
              onClick={toggleDrawer}
              className="text-[18px]  font-medium cursor-pointer"
            >
              Kukuričné bludisko
            </div>
          </Link>
          {/* News  */}
          <Link href="/news">
            <div
              onClick={toggleDrawer}
              className="text-[18px]  font-medium cursor-pointer"
            >
              Aktuality
            </div>
          </Link>
        </div>
        {/* Social Links  */}
        <div className="flex items-center justify-end gap-[8px]">
          {/* Facebook  */}
          <Link href="https://web.facebook.com/klasfarm1?_rdc=1&_rdr">
            <div
              onClick={toggleDrawer}
              className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative"
            >
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
            <div
              onClick={toggleDrawer}
              className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative"
            >
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
            <div
              onClick={toggleDrawer}
              className="w-[35px] xl:w-[40px] h-[35px] xl:h-[40px] flex items-center justify-center relative"
            >
              <Image
                src="/icons/social/ytb.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
