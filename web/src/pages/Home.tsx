import * as React from "react";
import HomeLeft from "@/modules/Home/HomeLeft/HomeLeft";
import HomeCenter from "@/modules/Home/HomeCenter";
import HomeRight from "@/modules/Home/HomeRight";
import useTitle from "@/hooks/useTitle";
import WrapperLogged from "./Wrapper/WrapperLogged";
import useSetPageCurrent from "@/hooks/useSetPageCurrent";

export default function Home() {
  //
  useTitle("Facebook");
  useSetPageCurrent();
  //
  return (
    <WrapperLogged>
      <div
        id="scroll__home"
        className="w-full bg-gray-100 dark:bg-dark-main h-screen overflow-y-scroll"
      >
        <HomeLeft />
        <HomeCenter />
        <HomeRight />
      </div>
    </WrapperLogged>
  );
}
