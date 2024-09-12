import * as React from "react";

type CloseComponentProps = {
  className?: string;
  data?: any;
  size?: string;
  handleClick?: Function;
  children?: React.ReactNode;
};

const CloseComponent = ({
  className,
  data,
  size,
  handleClick,
  children,
}: CloseComponentProps) => {
  //
  //
  return (
    <div
      aria-hidden
      onClick={() => handleClick(data)}
      className={` ${size ?? "text-xl"} ${
        className ?? " w-8 h-8 top-2 right-2"
      } rounded-full shadow-lv1 flex justify-center items-center cursor-pointer bg-gray-200 
            hover:bg-gray-300 z-10 dark:bg-dark-third hover:bg-dark-second absolute`}
    >
      {children}
    </div>
  );
};

export default CloseComponent;
