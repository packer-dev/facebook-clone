import React, { useEffect, useState } from "react";
import AccountIsset from "../AccountIsset";
import AccountNotIsset from "../AccountNotIsset";

const SaveLogin = () => {
  //
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    //
    let accountList = [];
    if (localStorage.getItem("accountList")) {
      accountList = JSON.parse(localStorage.getItem("accountList"));
      if (Array.isArray(accountList)) {
        setList(accountList);
      }
    }
    //
  }, []);
  //
  return (
    <div className="w-full flex flex-col py-2 mx-auto sm:flex-col sm:pt-4 lg:flex-row lg:pt-20">
      <div
        className="w-full lg:absolute lg:top-32 xl:top-1/2 -mt-20 transform xl:-translate-y-1/2 xl:py-0
        p-8 pr-4 sm:w-11/12 sm:mx-auto lg:w-1/2"
      >
        {list.length > 0 ? (
          <AccountIsset list={list} setList={setList} />
        ) : (
          <AccountNotIsset />
        )}
      </div>
    </div>
  );
};

export default SaveLogin;
