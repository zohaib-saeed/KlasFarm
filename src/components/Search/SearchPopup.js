import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiSearch as SearchIcon } from "react-icons/bi";

const SearchPopup = ({ open, toggleModal }) => {
  const router = useRouter();
  //   States
  const [searchString, setSearchString] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Mui Modal Box styles
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "",
    outline: "0px",
  };

  //   Dummy search data
  const dummyData = [
    { page: "some_page1", string: "... foo has been mentioned ..." },
    { page: "some_page2", string: "... in the foo takes place that ..." },
    { page: "some_page3", string: "... consider bar and ..." },
    { page: "some_page4", string: "... with the respect to bar ..." },
    { page: "some_page5", string: "... therefore foo results in baz..." },
  ];

  const searchItemClickHandler = () => {
    router.push("/selected-page");
    setShowSearchResults(false);
    toggleModal();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setShowSearchResults(true);
    }
  };

  const handleShowSearchResults = () => {
    setShowSearchResults(true);
  };

  function renderSuggestion(suggestion) {
    const matchIndex = suggestion
      .toLowerCase()
      .indexOf(searchString.toLowerCase());
    if (matchIndex === -1) {
      return suggestion;
    }
    return (
      <>
        {suggestion.slice(0, matchIndex)}
        <span className="font-bold">
          {suggestion.slice(matchIndex, matchIndex + searchString.length)}
        </span>
        {suggestion.slice(matchIndex + searchString.length)}
      </>
    );
  }
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="!overflow-hidden"
    >
      <Box sx={style}>
        <div className="px-2 sm:px-3 bg-white w-[320px] sm:w-[400px] flex flex-col items-center justify-start !outline-none rounded-xl overflow-hidden ">
          <div className="w-full flex items-center justify-between gap-[6px] sm:gap-3 py-[6px] ">
            <input
              type="text"
              placeholder="Napíš kľúčové slová "
              onChange={(event) => setSearchString(event.target.value)}
              className="flex-1 border-none outline-none bg-opacity-0 text-base font-medium placeholder:text-black placeholder:font-medium"
              onKeyDown={handleKeyDown}
            />
            <div
              onClick={handleShowSearchResults}
              className="flex items-center justify-center w-[32px] sm:w-[38px] h-[32px] sm:h-[35px] bg-granite cursor-pointer rounded-full"
            >
              <SearchIcon className="w-[20px] sm:w-[23px] h-[20px] sm:h-[23px] text-white" />
            </div>
          </div>
          {searchString.length > 0 && showSearchResults && (
            <div className="w-full flex flex-col items-start justify-start  px-1 py-2 border-0 border-t-[1px] border-solid border-black ">
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  onClick={searchItemClickHandler}
                  className="flex items-start justify-start gap-1 sm:gap-2 hover:bg-sunShade hover:bg-opacity-25 hover:px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-[14px] sm:text-base font-medium text-black ">
                    {item.page}
                  </div>
                  <div className="text-[13px] m:text-sm text-davyGrey">
                    {renderSuggestion(item.string)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default SearchPopup;
