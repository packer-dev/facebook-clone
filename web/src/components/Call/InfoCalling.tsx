import * as React from "react";

const InfoCalling = () => {
  //

  return (
    <div
      className="w-80 p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 flex flex-col justify-center text-white"
    >
      <img
        src=""
        className="w-28 h-28 p-1 rounded-full object-cover mx-auto"
        alt=""
      />

      <p className="font-bold text-2xl text-center py-1">Packer Tra</p>
      <p className="font-semibold text-sm text-center py-1 text-gray-300">
        "Đang gọi..."
      </p>
    </div>
  );
};

export default InfoCalling;
