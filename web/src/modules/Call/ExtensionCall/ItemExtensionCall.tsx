import * as React from "react";

type ItemExtensionCallProps = {
  icon?: string;
  addClass?: string;
  handleClick?: Function;
};

const ItemExtensionCall = ({
  icon = "",
  addClass = "",
  handleClick,
}: ItemExtensionCallProps) => {
  //

  return (
    <div
      aria-hidden
      onClick={() => handleClick?.()}
      className="w-12 h-12 relative mx-2.5 "
    >
      <span
        className={`${icon} w-12 h-12 rounded-full text-2xl flex bg-opacity-80 z-10
        items-center justify-center cursor-pointer ${addClass} bg-[#3A3B3C]`.trim()}
      />
    </div>
  );
};

export default ItemExtensionCall;
