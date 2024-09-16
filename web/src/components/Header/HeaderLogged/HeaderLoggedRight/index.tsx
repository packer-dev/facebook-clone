import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { useSelector } from "react-redux";
import PopoverHeaderRightWrapper from "./PopoverHeaderRightWrapper";
import PopoverMessage from "./PopoverMessage";
import PopoverNotification from "./PopoverNotification";
import PopoverSetting from "./PopoverSetting";
import { RootState } from "@/reducers";

export default function HeaderLoggedRight(props) {
  //
  const { hideMessage, hideImage } = props;
  const { user } = useSelector<RootState, RootState>((state) => state);
  const [toggle, setToggle] = React.useState(false);
  const [active, setActive] = useState(-1);
  const navigation = useNavigate();
  let count = 0;
  const refPopover = useRef<HTMLDivElement>();
  const handleClick = (num: number) => {
    setActive(num);
    const current = refPopover.current;
    if (!current) return;
    refPopover.current.style.display = "block";
    document.addEventListener("click", windowEvent, false);
  };
  const windowEvent = (event) => {
    ++count;
    if (count > 1) {
      if (refPopover.current && !refPopover.current.contains(event.target)) {
        refPopover.current.style.display = "none";
        count = 0;
        document.removeEventListener("click", windowEvent);
      }
    } else {
      refPopover.current.style.display = "block";
    }
  };
  //
  return (
    <div className="w-1/2 flex sm:w-3/4 md:w-1/4">
      {!hideImage && (
        <div
          aria-hidden
          onClick={() => navigation(PAGE_PROFILE + `/${user.id}`)}
          className="w-1/2 flex py-0.875 px-2.5 mx-2 mt-1 mb-1.5 p-1.5 items-center cursor-pointer 
            hover:bg-gray-200 round-avatar dark:hover:bg-dark-third lg:mx-0"
        >
          <div className="hidden lg:block lg:w-full xl:w-auto">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={user.avatar}
              alt=""
            />
          </div>
          <div className="flex-1 hidden whitespace-nowrap dark:text-white text-center xl:block xl:w-auto">
            {user.name}
          </div>
        </div>
      )}
      <div className="w-full pt-2 pb-2 pr-3 sm:w-full relative">
        <ul className="flex float-right">
          <li
            aria-hidden
            onClick={async () => {
              setToggle(!toggle);
              document.body.className = !toggle ? "dark" : "";
            }}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
            dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-plus text-xl hidden"></i>
            <i className="bx bxs-moon text-2xl"></i>
          </li>
          {!hideMessage && (
            <li
              aria-hidden
              onClick={() => handleClick(0)}
              className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
              dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
            >
              <i className="bx bxl-messenger text-2xl"></i>
              <span
                className="absolute -top-2 -right-2 text-xs transform scale-90 text-white font-semibold 
              bg-red-500 px-1 h-5 rounded-full flex justify-center items-center"
              >
                9+
              </span>
            </li>
          )}
          <li
            aria-hidden
            onClick={() => handleClick(1)}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
            dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-bell text-xl"></i>
            <span
              className="absolute -top-2 -right-2 text-xs transform scale-90 text-white font-semibold 
            bg-red-500 px-1 h-5 rounded-full flex justify-center items-center"
            >
              9+
            </span>
          </li>
          <li
            aria-hidden
            onClick={() => handleClick(2)}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 dark:bg-dark-third dark:text-white 
            text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-chevron-down text-2xl"></i>
          </li>
        </ul>
        <PopoverHeaderRightWrapper ref={refPopover} active={active}>
          {active === 0 && (
            <PopoverMessage closePopover={() => setActive(-1)} />
          )}
          {active === 1 && <PopoverNotification />}
          {active === 2 && <PopoverSetting />}
        </PopoverHeaderRightWrapper>
      </div>
    </div>
  );
}
