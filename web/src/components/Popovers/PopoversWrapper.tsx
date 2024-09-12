import React, { forwardRef } from "react";

export default forwardRef(function PopoversWrapper(props: any, ref: any) {
  //
  const { className, children } = props;
  //
  return (
    <div
      ref={ref}
      className={`hidden z-50 bg-white my-2 absolute w-72 dark:border-dark-second ${className} 
       shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second right-0 bottom-12 `}
      style={{ maxHeight: 360, height: 360 }}
    >
      {children}
    </div>
  );
});
