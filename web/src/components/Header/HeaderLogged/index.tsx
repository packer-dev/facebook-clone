import * as React from "react";
import HeaderLoggedCenter from "./HeaderLoggedCenter";
import HeaderLoggedLeft from "./HeaderLoggedLeft";
import HeaderLoggedRight from "./HeaderLoggedRight";

export default function HeaderLogged(props: any) {
  //
  const { hideMessage } = props;
  //
  return (
    <div
      className="w-full block z-50 fixed bg-white top-0 dark:bg-dark-second border-b-2 border-solid border-gray-200 
        dark:border-dark-third shadow-lv1"
      id="header"
    >
      <div className="w-full flex px-2 my-1 items-center just">
        <HeaderLoggedLeft />
        <div className="w-1/2 hidden md:block md:w-1/2 lg:w-1/2">
          <div className="mx-auto wrapper w-4/5">
            <HeaderLoggedCenter />
          </div>
        </div>
        <HeaderLoggedRight hideMessage={hideMessage} />
      </div>
    </div>
  );
}
