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
      <PopoverContent className="w-80 h-[390px]">{children}</PopoverContent>
    </Popover>
  );
};

export default PopoversWrapper;
