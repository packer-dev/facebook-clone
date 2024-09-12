import React, { useState } from "react";
import ButtonComponent from "../../../ButtonComponent";

export default function NotImageVideoPreview() {
  //
  const [transport, setTransport] = useState<any>();
  //
  return (
    <>
      <div
        className="w-full h-56 bg-gray-100 dark:hover:bg-dark-second hover:bg-gray-200 dark:bg-dark-second 
            flex items-center justify-center "
      >
        <label htmlFor="inputFileUpload">
          <div className="w-11 h-11 rounded-full mx-auto bg-gray-300 cursor-pointer flex justify-center items-center">
            <i className="bx bxs-add-to-queue text-2xl"></i>
          </div>
          <p className="text-xl py-0.5 text-center dark:text-white">
            Thêm ảnh/video
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
            hoặc kéo , thả
          </p>
        </label>
      </div>
      <div
        className="my-2 w-full p-1.5 flex relative items-center border border-solid border-gray-100 dark:border-dark-third 
            rounded-lg"
      >
        <div
          className="flex justify-center items-center relative"
          style={{ width: 50, height: 50 }}
        >
          <span
            className={`fas fa-mobile-alt text-2xl w-10 h-10 rounded-full mx-auto flex justify-center items-center 
                        ${transport ? "bg-main text-white" : "bg-gray-300"}`}
          ></span>
          {transport && (
            <div
              className="w-12 h-12 fa-spin flex justify-center border-2 border-gray-500 border-solid absolute 
                         bg-transparent rounded-full "
              style={{
                borderRightColor: "transparent",
                borderTopColor: "transparent",
              }}
            ></div>
          )}
        </div>
        <p className="text-sm ml-2 pr-14 pl-3 dark:text-gray-300">
          {transport
            ? "Hãy nhấn vào thông báo trên thiết bị di động để thêm ảnh."
            : "Thêm ảnh từ thiết bị di động."}
        </p>
        <ButtonComponent
          handleClick={() => setTransport(!transport)}
          className="px-3 py-2 rounded-md font-semibold absolute top-1/2 transform 
                    -translate-y-1/2 right-2 bg-gray-300"
        >
          {transport ? "Huỷ" : "Thêm"}
        </ButtonComponent>
      </div>
    </>
  );
}
