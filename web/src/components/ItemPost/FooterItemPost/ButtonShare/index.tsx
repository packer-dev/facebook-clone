import React, { useRef } from "react";
import PopupShare from "../PopupShare";

const ButtonShare = () => {
  //
  const refPopup = useRef<any>();
  let count = 0;
  //

  // Click
  const handleClick = (element) => {
    const current = element.target;
    if (!current) {
      return;
    }
    const rect = current.getBoundingClientRect();
    const elementTop = rect.top;
    refPopup.current.style.display = "flex";
    if (elementTop < 500) {
      refPopup.current.classList.add("top-full", "arrow__top");
      refPopup.current.classList.remove("bottom-full", "arrow__bottom");
    } else {
      refPopup.current.classList.remove("top-full", "arrow__top");
      refPopup.current.classList.add("bottom-full", "arrow__bottom");
    }
    window.addEventListener("click", winEv);
  };

  const winEv = function () {
    ++count;
    if (count > 1) {
      refPopup.current.style.display = "none";
      count = 0;
      window.removeEventListener("click", winEv);
    }
  };

  return (
    <li className="w-1/3 z-40 relative cursor-pointer justify-center items-center">
      <div
        aria-hidden
        onClick={handleClick}
        className="dark:text-gray-300 dark:hover:bg-dark-third hover:bg-gray-200 w-full font-semibold 
        text-sm h-12 flex items-center justify-center "
      >
        <i className="bx bx-share text-xl transform rotate-180 dark:text-gray-300" />
        <span>&nbsp; Share</span>
      </div>
      <PopupShare ref={refPopup} />
    </li>
  );
};

export default ButtonShare;
