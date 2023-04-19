import React, { useState } from "react";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import { galleryData } from "../../data/gallery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  py: 0,
};

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState("");
  const handleOpen = (url) => {
    setOpenModal(true);
    setModalImgUrl(url);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <div className="w-full pb-16 lg:pb-24 flex flex-col items-center justify-start gap-10 lg:gap-16 ">
      {/* Wallpaper  */}
      <div className="relative w-full">
        <div className="w-full h-[290px] sm:h-[340px] sxl:h-[370px] mxl:h-[420px] flex items-center justify-center relative">
          <Image
            src="/images/gallery/wallpaper.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[40px] lg:text-[45px] sxl:text-[50px] mxl:text-[60px] text-white font-mistral absolute top-[35%] left-[6%]">
          Galérgia
        </p>
      </div>
      {/* Main Content  */}
      <div className="w-full max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-5 mdl:px-6 grid grid-cols-3 vsm:grid-cols-4 md:grid-cols-5 mdl:grid-cols-6 gap-2 xs:gap-[10px] mdl:gap-3 sxl:gap-4 xl:gap-5">
        {galleryData.map((item, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <div
              onClick={() => handleOpen(item)}
              className="w-full h-[130px] xs:h-[150px] vsm:h-[130px] sm:h-[150px] mdl:h-[140px] lg:h-[165px] sxl:h-[180px] mxl:h-[200px] flex items-center justify-center relative border-2 border-solid border-silverSand bg-sotPeach cursor-pointer"
            >
              <Image src={item} alt="" fill className="object-contain" />
            </div>
            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description "
              className="gallery-modal"
            >
              <Box sx={style}>
                <div className="w-full flex flex-row items-start justify-between gap-4 sm:gap-7 pl-11 sm:pl-14 md:pl-16 pr-[6px] sm:pr-2 md:pr-3">
                  <div className="w-[280px] xs:w-[360px] vsm:w-[420px] sm:w-[460px] md:w-[550px] mxl:w-[600px] h-[240px] xs:h-[290px] vsm:h-[330px] sm:h-[370px] md:h-[400px] mxl:h-[450px] flex items-center justify-center relative">
                    <Image
                      src={modalImgUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CloseIcon
                    className="w-[24px] h-[24px] text-davyGrey cursor-pointer mt-1"
                    onClick={handleClose}
                  />
                </div>
              </Box>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
