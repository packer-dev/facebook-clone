import React, { forwardRef } from "react";

const PopoverHeaderRightWrapper = (props: any, ref: any) => {
  return (
    <div
      ref={ref}
      className={`w-92 rounded-lg absolute dark:bg-dark-second bg-white 
        z-50 top-full mt-0.5 right-3 wrapper-scrollbar overflow-x-hidden overflow-y-auto 
        border-solid border-gray-200 border-2 shadow-lv1 dark:border-dark-third`}
      style={{
        display: props.active === -1 ? "none" : "block",
      }}
    >
      {props.children}
    </div>
  );
};

export default forwardRef(PopoverHeaderRightWrapper);
