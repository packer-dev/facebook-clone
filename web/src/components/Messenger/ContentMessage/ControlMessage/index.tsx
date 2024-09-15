import React, { useContext, useRef, useState } from "react";
import * as functions from "@/functions";
import ControlMessageMain from "./ControlMessageMain";
import SendImageVideo from "./SendImageVideo/SendImageVideo";
import PopoverSticker from "@/components/Popovers/PopoverSticker";
import PopoverEmojii from "@/components/Popovers/PopoverEmojii";
import { ItemChatContext } from "@/contexts/ItemChatContext";

export default function ControlMessage() {
  //
  const {
    state: { members, group, isNew },
  } = useContext(ItemChatContext);
  const refContent = useRef<HTMLDivElement>();
  const refPopover = useRef<HTMLDivElement>();
  const [type, setType] = useState();
  let count = 0;
  const handleClick = (type, event) => {
    setType(type);
    const current = event.target;
    if (!current) {
      return;
    }
    refPopover.current.style.display = "block";
    window.addEventListener("click", winEv);
  };
  const winEv = function (event) {
    ++count;
    if (count > 1) {
      if (refPopover.current && !refPopover.current.contains(event.target)) {
        refPopover.current.style.display = "none";
        count = 0;
        window.removeEventListener("click", winEv);
      }
    }
  };
  //
  return (
    <div
      className={`w-full bg-white dark:bg-dark-second z-20 pt-2 pb-3 px-1 flex items-center 
        dark:border-dark-third border-t-2 border-solid border-gray-300 relative ${
          isNew && !members.length ? "opacity-50" : ""
        }`}
    >
      {members.length > 0 && <SendImageVideo />}
      <ControlMessageMain />
      <div className="w-9/12 relative">
        <div className="three-exten1 w-full relative">
          <div
            aria-hidden
            ref={refContent}
            className="place-input-type border-none dark:text-white bg-gray-200 dark:bg-dark-third rounded-full 
                    pl-2 outline-none py-2 break-all w-full"
            // placeholder="Aa"
            contentEditable={true}
            spellCheck={false}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            style={{ minHeight: "20px" }}
            onInput={(event) => ""}
          ></div>
          <div
            aria-hidden
            onClick={(event) => handleClick(1, event)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 flex cursor-pointer z-50"
          >
            <i className="fas fa-smile dark:text-white text-gray-600 text-2xl"></i>
          </div>
          <div
            ref={refPopover}
            className="absolute hidden bottom-full bg-white border-2 border-solid border-gray-200 shadow-lv1 
            right-0 rounded-lg w-72"
            style={{ height: 360 }}
          >
            {type === 1 ? (
              <PopoverEmojii
                handleClick={(item) => {
                  refContent.current.innerText += item;
                  functions.placeCaretAtEnd(refContent.current);
                }}
              />
            ) : (
              <PopoverSticker
                handleClick={(item) => {
                  refPopover.current.style.display = "none";
                  count = 0;
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-12 zoom flex jusitfy-center">
        <span
          aria-hidden
          onClick={() => ""}
          className="cursor-pointer zoom text-xl flex items-center"
        >
          {group?.data?.emoji || "💕"}
        </span>
      </div>
      {isNew && (
        <div
          className="w-full absolute opacity-50 top-0 left-0 z-50"
          style={{ height: 66 }}
        ></div>
      )}
    </div>
  );
}
