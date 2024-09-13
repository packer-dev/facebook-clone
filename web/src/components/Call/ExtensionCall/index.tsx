import * as React from "react";
import ItemExtensionCall from "./ItemExtensionCall";

const ExtensionCall = () => {
  //
  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
      -translate-x-1/2 left-1/2 w-[450px]"
    >
      <ItemExtensionCall icon="bx bxs-category-alt" addClass="text-gray-300" />
      <ItemExtensionCall icon="bx bxs-video-off" addClass="text-gray-300" />
      <ItemExtensionCall icon="bx bxs-microphone" addClass="text-gray-300" />
      <ItemExtensionCall
        icon="bx bxs-phone"
        addClass="text-red-500 transform rotate-135"
      />
    </div>
  );
};

export default ExtensionCall;
