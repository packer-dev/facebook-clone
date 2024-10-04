import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "@/assets/images/logo.png";
import save_account from "@/assets/images/save_account.png";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

const RememberAccount = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const [show, setShow] = useState(false);
  useEffect(() => {
    //
    if (!user) return;
    if (localStorage.getItem("saveInHome")) {
      setShow(true);
      localStorage.removeItem("saveInHome");
    }
    //
  }, [setShow, user]);
  const removeSaveInHome = () => {
    localStorage.removeItem("saveInHome");
    setShow(false);
  };
  //
  return show && user ? (
    <div className="w-full my-2 bg-white p-2 relative rounded-lg">
      <div className="w-full flex items-center justify-between">
        <img
          className="w-7 shadow-lv1 rounded-full border border-gray-200 border-solid"
          src={logo}
          alt=""
          srcSet=""
        />
        <img src={save_account} alt="" className="w-8 object-contain" />
        <span
          aria-hidden
          onClick={removeSaveInHome}
          className="text-2xl font-semibold cursor-pointer relative z-10 "
        >
          &times;
        </span>
      </div>
      <div className="w-full mt-2">
        <p className="text-xl font-bold mb-1">Remember</p>
        <p className="text-sm text-gray-500">
          Next time you log in on this browser, just click on your avatar
          instead of entering your password.
        </p>
        <div className="flex w-full items-center my-2 gap-2">
          <Button
            onClick={() => {
              let rememberAccountList = [];
              if (localStorage.getItem("rememberAccountList")) {
                if (
                  Array.isArray(
                    JSON.parse(localStorage.getItem("rememberAccountList"))
                  )
                ) {
                  rememberAccountList = JSON.parse(
                    localStorage.getItem("rememberAccountList")
                  );
                }
              }
              localStorage.setItem(
                "rememberAccountList",
                JSON.stringify([
                  ...rememberAccountList,
                  {
                    avatar: user.avatar,
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    token: "",
                  },
                ])
              );
              removeSaveInHome();
            }}
            className="w-1/2 p-2 rounded-lg font-semibold text-main bg-blue-100"
          >
            OK
          </Button>
          <Button
            onClick={removeSaveInHome}
            className="w-1/2 p-2 rounded-lg font-semibold bg-gray-200"
          >
            Later
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default RememberAccount;
