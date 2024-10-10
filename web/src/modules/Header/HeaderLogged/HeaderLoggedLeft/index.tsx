import React, { useEffect, useState } from "react";
import ItemHeaderLoggedLeft from "./ItemHeaderLoggedLeft";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { User } from "@/interfaces/User";
import { searchUser } from "@/apis/userAPIs";

const HeaderLoggedLeft = () => {
  const [show, setShow] = useState(false);
  const [list, setList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    if (keyword.length > 0) {
      timeOut = setTimeout(async () => {
        const result = await searchUser(keyword, 0, 6);
        if (result.length > 0) setList(result);
        else setList(null);
        setLoading(false);
      }, 300);
    } else {
      setList(null);
      setLoading(false);
    }
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  return (
    <div className="w-1/2 flex ml-1 md:w-1/4 relative">
      {show && (
        <div
          className="w-11/12 dark:bg-dark-second bg-gray-100 absolute -top-1 -left-3 flex z-30
          flex-wrap shadow-lg"
        >
          <div className="w-full h-16 flex">
            <div
              aria-hidden
              onClick={() => setShow(false)}
              className="w-11 h-11 rounded-full text-center items-center pt-1 mt-1 cursor-pointer ml-1 
              bx bx-chevron-left text-3xl dark:text-gray-300"
            />
            <div className="mt-1 pl-1">
              <div
                className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-11 h-11 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full 
                flex items-center justify-center cursor-pointer"
              >
                <Input
                  handleChange={(data) => {
                    setLoading(true);
                    setKeyword(data);
                  }}
                  type="text"
                  placeholder="Search on Facebook"
                  className="w-56 outline-none bg-transparent hidden xl:inline-block border-none dark:bg-dark-third"
                  hiddenBorder
                />
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div className="w-full">
            <div className="w-full py-1">
              <div className="w-full cursor-pointer">
                {loading && (
                  <div className="w-full flex items-center justify-center pb-5 pt-5">
                    <i className="fas fa-circle-notch text-2xl text-gray-500 mx-9 fa-spin" />
                  </div>
                )}
                {!loading &&
                  list?.map((item) => (
                    <ItemHeaderLoggedLeft item={item} key={item.id} />
                  ))}
                {!loading && !list && (
                  <p className="my-2 pb-5 text-sm text-center">
                    No matching results found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-0.5">
        <Logo />
      </div>
      <div className="mt-1 pl-4">
        <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-11 h-11 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
          <i className="bx bx-search text-gray-500 text-xl xl:mr-2 dark:text-dark-txt" />
          <Input
            handleClick={() => setShow(true)}
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
