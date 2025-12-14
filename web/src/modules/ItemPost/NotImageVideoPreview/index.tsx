import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const NotImageVideoPreview = () => {
  const [transport, setTransport] = useState<any>();
  return (
    <>
      <div
        className="w-full h-56 bg-gray-100 dark:hover:bg-dark-second hover:bg-gray-200 dark:bg-dark-second 
        flex items-center justify-center"
      >
        <label htmlFor="inputFileUpload">
          <div className="w-11 h-11 rounded-full mx-auto bg-gray-300 cursor-pointer flex justify-center items-center">
            <i className="bx bxs-add-to-queue text-2xl" />
          </div>
          <p className="text-xl py-0.5 text-center dark:text-white">
            Add Image/Video
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
            or drag and drop
          </p>
        </label>
      </div>
      <div className="my-2 w-full p-1.5 flex relative items-center border border-solid border-gray-100 dark:border-dark-third rounded-lg">
        <div className="flex justify-center items-center relative w-[50px] h-[50px]">
          <span
            className={`fas fa-mobile-alt text-2xl w-10 h-10 rounded-full mx-auto flex justify-center items-center 
            ${transport ? "bg-primary text-white" : "bg-gray-300"}`}
          />
          {transport && (
            <div
              className="w-12 h-12 fa-spin flex justify-center border-2 border-gray-500 border-solid absolute 
              bg-transparent rounded-full"
              style={{
                borderRightColor: "transparent",
                borderTopColor: "transparent",
              }}
            />
          )}
        </div>
        <p className="text-sm ml-2 pr-14 pl-3 dark:text-gray-300">
          {transport
            ? "Click the notification on your mobile device to add the image."
            : "Add image from mobile device."}
        </p>
        <Button
          onClick={() => setTransport(!transport)}
          className="px-3 py-2 rounded-md font-semibold absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-300"
        >
          {transport ? "Cancel" : "Add"}
        </Button>
      </div>
    </>
  );
};

export default NotImageVideoPreview;
