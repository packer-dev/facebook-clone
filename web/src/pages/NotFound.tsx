import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_HOME, PAGE_LOGIN } from "@/constants/Config";
import WrapperLogged from "./Wrapper/WrapperLogged";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import WrapperAuthentication from "./Wrapper/WrapperAuthentication";
import { Button } from "@/components/ui/button";

const Component = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector<RootState, User>(getUser);
  if (!user)
    return <WrapperAuthentication notFound>{children}</WrapperAuthentication>;
  return <WrapperLogged>{children}</WrapperLogged>;
};

const NotFound = () => {
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  return (
    <Component>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-11/12 md:w-2/3 lg:w-5/12 xl:w-30% text-center mx-auto">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg"
            alt=""
            className="w-32 object-cover mx-auto"
          />
          <p className="font-bold text-xl">This page is not available</p>
          <p className="text-gray-600">
            The link may be broken or the page has been removed. Please check if
            the link you are trying to open is correct.
          </p>
          <Button
            onClick={() => {
              if (user) navigation(PAGE_HOME);
              else navigation(PAGE_LOGIN);
            }}
            className="px-5 py-2 my-5 rounded-md bg-main text-white font-semibold"
          >
            {user ? "Go to news feed" : "Back to login page"}
          </Button>
          <p />
        </div>
      </div>
    </Component>
  );
};

export default NotFound;
