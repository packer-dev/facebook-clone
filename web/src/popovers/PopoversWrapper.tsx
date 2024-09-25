import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { ReactNode } from "react";

type PopoversWrapperProps = {
  children?: ReactNode;
  button?: React.JSX.Element;
};

const PopoversWrapper = ({ children, button }: PopoversWrapperProps) => {
  //
  //
  return (
    <Popover>
      <PopoverTrigger>{button}</PopoverTrigger>
      <PopoverContent>
        <div
          className="z-50 bg-white my-2 w-72 dark:border-dark-second max-h-[360px] h-[360px]  
          shadow-lg border-gray-300 p-1 border-2 border-solid rounded-lg dark:bg-dark-second"
        >
          {children}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoversWrapper;
