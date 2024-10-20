import React from "react";
import ModalWrapper from "../ModalWrapper";

const ModalDeveloper = () => {
  return (
    <ModalWrapper title="Developing">
      <img
        className="w-80 mx-auto"
        src="https://static.vecteezy.com/system/resources/thumbnails/011/354/494/small_2x/young-man-are-doing-coding-3d-cartoon-character-illustration-png.png"
        alt=""
        srcSet=""
      />
      <p className="text-gray-600 dark:text-white pb-5 text-center">
        This function is not yet developed.
      </p>
    </ModalWrapper>
  );
};

export default ModalDeveloper;
