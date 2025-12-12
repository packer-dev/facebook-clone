import Input from "@/components/Input";
import Logo from "@/components/Logo";
import React from "react";

const HeaderLoggedLeft = () => {
  return (
    <div className="w-1/2 flex items-center ml-1 md:w-1/4 relative">
      <Logo />
      <div className="mt-1 pl-4">
        <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-1.5 w-10 h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
          <i className="bx bx-search text-gray-500 text-xl xl:mr-2 dark:text-dark-txt" />
          <Input
            type="text"
            placeholder="Search on facebook"
            className="outline-none bg-transparent hidden xl:inline-block dark:bg-dark-third"
            hiddenBorder
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLoggedLeft;
