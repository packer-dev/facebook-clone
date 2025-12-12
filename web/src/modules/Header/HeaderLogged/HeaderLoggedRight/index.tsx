import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { useSelector } from "react-redux";
import PopoverHeaderRightWrapper from "./PopoverHeaderRightWrapper";
import PopoverMessage from "./PopoverMessage";
import PopoverNotification from "./PopoverNotification";
import PopoverSetting from "./PopoverSetting";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { getNavbarAmountNew } from "@/apis/commonAPIs";

type HeaderLoggedRightProps = {
  hideMessage?: boolean;
  hideImage?: boolean;
};

const HeaderLoggedRight = ({
  hideMessage,
  hideImage,
}: HeaderLoggedRightProps) => {
  const user = useSelector<RootState, User>(getUser);
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
  const [amount, setAmount] = useState<{
    friend: number;
    notification: number;
    watch: number;
    marketplace: number;
  }>({
    friend: 0,
    notification: 0,
    watch: 0,
    marketplace: 0,
  });
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
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNavbarAmountNew(user?.id);
      setAmount(result);
    };
    fetchData();
  }, [user]);
  return (
    <div className="w-1/2 flex sm:w-3/4 md:w-1/4">
      {!hideImage && (
        <div
          aria-hidden
          onClick={() => navigation(PAGE_PROFILE + `/${user.id}`)}
          className="flex py-0.875 px-2.5 mx-2 mt-1 mb-1.5 p-1.5 items-center cursor-pointer 
            hover:bg-gray-200 round-avatar dark:hover:bg-dark-third lg:mx-0 gap-2"
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
      <div className="pt-2 pb-2 flex-1 relative">
        <ul className="flex float-right">
          <li
            aria-hidden
            onClick={async () => {
              setToggle(!toggle);
              document.body.className = toggle ? "" : "dark";
            }}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
            dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-plus text-xl hidden" />
            <i className="bx bxs-moon text-2xl" />
          </li>
          {!hideMessage && (
            <li
              aria-hidden
              onClick={() => handleClick(0)}
              className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
              dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
            >
              <i className="bx  bxs-message-bubble text-2xl" />
              {!!amount.watch && (
                <span
                  className="absolute -top-2 -right-2 text-xs transform scale-90 text-white font-semibold 
              bg-red-500 px-1 h-5 rounded-full flex justify-center items-center"
                >
                  {Math.min(amount.watch, 9)}+
                </span>
              )}
            </li>
          )}
          <li
            aria-hidden
            onClick={() => handleClick(1)}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 
            dark:bg-dark-third dark:text-white text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-bell text-xl" />
            {!!amount.notification && (
              <span
                className="absolute -top-2 -right-2 text-xs transform scale-90 text-white font-semibold 
              bg-red-500 px-1 h-5 rounded-full flex justify-center items-center"
              >
                {Math.min(amount.notification, 9)}+
              </span>
            )}
          </li>
          <li
            aria-hidden
            onClick={() => handleClick(2)}
            className="cursor-pointer relative h-10 ml-1 mr-1 w-10 bg-gray-200 dark:bg-dark-third dark:text-white 
            text-center rounded-full flex justify-center items-center"
          >
            <i className="bx bx-chevron-down text-2xl" />
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
};

export default HeaderLoggedRight;
