import * as React from "react";

type CircleIconProps = {
  className?: string;
  handleClick?: Function;
};

const CircleIcon = ({ className = "", handleClick }: CircleIconProps) => {
  return (
    <button
      type="button"
      onClick={() => handleClick?.()}
      className={`${className} rounded-full flex items-center justify-center cursor-pointer focus-within:outline-none`}
    />
  );
};

export default CircleIcon;
