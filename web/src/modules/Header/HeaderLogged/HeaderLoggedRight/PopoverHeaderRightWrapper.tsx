import React, { forwardRef, ReactNode, RefObject } from "react";

type PopoverHeaderRightWrapperProps = {
  active?: number;
  children?: ReactNode;
};

const PopoverHeaderRightWrapper = (
  props: PopoverHeaderRightWrapperProps,
  ref: RefObject<HTMLDivElement>
) => {
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
