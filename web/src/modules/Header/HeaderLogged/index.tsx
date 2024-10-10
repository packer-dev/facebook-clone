import * as React from "react";
import HeaderLoggedCenter from "./HeaderLoggedCenter";
import HeaderLoggedLeft from "./HeaderLoggedLeft";
import HeaderLoggedRight from "./HeaderLoggedRight";

type HeaderLoggedProps = { hideMessage?: boolean };

const HeaderLogged = ({ hideMessage }: HeaderLoggedProps) => {
  return (
    <div
      className="w-full block z-50 fixed bg-white top-0 dark:bg-dark-second border-b-2 border-solid border-gray-200 
      dark:border-dark-third shadow-lv1"
      id="header"
    >
      <div className="w-full flex px-2 my-1 items-center just">
        <HeaderLoggedLeft />
        <div className="w-1/2 hidden md:block md:w-1/2">
          <div className="mx-auto wrapper w-4/5 xl:w-[600px] xl:mx-auto">
            <HeaderLoggedCenter />
          </div>
        </div>
        <HeaderLoggedRight hideMessage={hideMessage} />
      </div>
    </div>
  );
};

export default HeaderLogged;
