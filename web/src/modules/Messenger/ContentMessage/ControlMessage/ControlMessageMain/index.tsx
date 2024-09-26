import { ItemChatContext } from "@/contexts/ItemChatContext";
import PopoverSticker from "@/popovers/PopoverSticker";
import PopoversWrapper from "@/popovers/PopoversWrapper";
import React, { useContext } from "react";

const ControlMessageMain = ({ handleSend }: { handleSend: Function }) => {
  //
  const {
    state: { group },
    updateData,
  } = useContext(ItemChatContext);
  //
  return (
    <div className="w-32 flex">
      <div className="mr-3 w-full flex py-2">
        <div className="flex">
          <div className="cursor-pointer fill-65676B ">
            <div className="hover:bg-gray-200 rounded-full  dark:hover:bg-dark-third p-1 ">
              <svg
                fill={group?.data?.color || "gray"}
                className="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji tftn3vyl"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
              >
                <g>
                  <polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 " />
                  <path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <input
          className="hidden"
          onChange={(event) => {
            updateData("files", event.target.files);
            updateData("type", 3);
          }}
          type="file"
          name="fileImage[]"
          id="fileImageChatMain"
        />
        <label htmlFor="fileImageChatMain">
          {" "}
          <div className="float-left cursor-pointer p-1 fill-65676B hover:bg-gray-200 rounded-full  dark:hover:bg-dark-third">
            <svg
              className="a8c37x1j ms05siws hr662l2t b7h9ocf4"
              height="20px"
              width="20px"
              viewBox="0 -1 17 17"
            >
              <g fill="gray">
                <path
                  fill={group?.data?.color || "gray"}
                  d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z"
                />
                <circle cx="8.5" cy="4.5" r="1.5" fill="gray" />
                <path
                  fill={group?.data?.color || "gray"}
                  d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z"
                />
                <path
                  fill={group?.data?.color || "gray"}
                  d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z"
                  stroke={group?.data?.color || "gray"}
                />
              </g>
            </svg>
          </div>
        </label>
        <PopoversWrapper
          button={
            <div
              aria-hidden
              className="float-left cursor-pointer p-1 fill-65676B hover:bg-gray-200 rounded-full dark:hover:bg-dark-third"
            >
              <svg
                fill={group?.data?.color || "gray"}
                className="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji"
                height="20px"
                width="20px"
                viewBox="0 0 17 16"
                x="0px"
                y="0px"
              >
                <g>
                  <circle cx="5.5" cy="5.5" fill="none" r="1" />
                  <circle cx="11.5" cy="4.5" fill="none" r="1" />
                  <path
                    d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z"
                    fill="none"
                  />
                  <path d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z" />
                  <path d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                </g>
              </svg>
            </div>
          }
        >
          <PopoverSticker handleClick={(item: any) => handleSend(item, 2)} />
        </PopoversWrapper>

        <div className="float-left cursor-pointer p-1 fill-65676B hover:bg-gray-200 rounded-full  dark:hover:bg-dark-third">
          <svg
            fill={group?.data?.color || "gray"}
            className="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji"
            height="20px"
            width="20px"
            viewBox="0 0 16 16"
            x="0px"
            y="0px"
          >
            <path d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ControlMessageMain;
