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
      className="!w-full "
    >
      <div className="w-full h-full flex flex-col items-center justify-start gap-12 sm:gap-16 py-6  px-2 xs:px-3 sm:px-4 md:px-5">
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
            <div className="text-[18px] font-medium cursor-pointer">O nás</div>
          </Link>
          {/* We offer  */}
          <Link href="/we-offer">
            <div className="text-[18px]  font-medium cursor-pointer">
              Ponúkame
            </div>
          </Link>
          {/* Contacts  */}
          <Link href="/contacts">
            <div className="text-[18px]  font-medium cursor-pointer">
              Kontakty
            </div>
          </Link>
          <div className="text-[18px]  font-medium cursor-pointer">Galéria</div>
          <div className="text-[18px]  font-medium cursor-pointer">
            Kukuričné bludisko
          </div>
          <div className="text-[18px]  font-medium cursor-pointer">
            Aktuality
          </div>
        </div>
        {/* Social Links  */}
        <div className="flex items-center justify-end gap-[8px]">
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
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
