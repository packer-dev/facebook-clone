import React, { ReactNode, RefObject, forwardRef } from "react";

type PopoversWrapperProps = {
  className?: string;
  children?: ReactNode;
};

export default forwardRef(function PopoversWrapper(
  props: PopoversWrapperProps,
  ref: RefObject<HTMLDivElement>
) {
  //
  const { className, children } = props;
  //
  return (
    <div
      ref={ref}
      className={`hidden z-50 bg-white my-2 absolute w-72 dark:border-dark-second ${className} max-h-[360px] h-[360px]  
      shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second right-0 bottom-12`}
    >
      {children}
    </div>
  );
});
