import * as React from "react";

const CallAgain = ({ match }) => {
  return (
    <div
      className="p-2 flex justify-center absolute bottom-6 transform 
        -translate-x-1/2 left-1/2 w-[450px]"
    >
      <div className="w-12 h-12 relative mx-2.5">
        <span
          className={`${
            match.match.params.typeCall === "videoCall"
              ? "bx bxs-video"
              : "bx bxs-phone-call"
          } w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10 bg-[#00a400]
          items-center justify-center cursor-pointer text-gray-300 `}
        />
      </div>
      <div className="w-12 h-12 relative mx-2.5">
        <span
          className="fas fa-times w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
          items-center justify-center cursor-pointer text-gray-300 bg-[#3A3B3C]"
        />
      </div>
    </div>
  );
};

export default CallAgain;
