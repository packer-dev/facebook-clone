import React, { useEffect, useState } from "react";
import ItemHeaderLoggedLeft from "./ItemHeaderLoggedLeft";
import InputComponent from "@/components/InputComponent";
import Logo from "@/components/Logo";

export default function HeaderLoggedLeft() {
  //
  const [show, setShow] = useState(false);
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    //
    let timeOut;
    if (keyword.length > 0) {
      timeOut = setTimeout(async () => {
        const result = { data: [] };
        if (result.data.length > 0) setList(result.data);
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
  //
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
              className="w-11 h-11 rounded-full text-center items-center pt-1 mt-1 cursor-pointer ml-1 "
            >
              <i className="bx bxs-left-arrow-alt text-3xl dark:text-gray-300"></i>
            </div>
            <div className="mt-1 pl-1">
              <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-11 h-11 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
                <InputComponent
                  handleChange={(data: any) => {
                    setLoading(true);
                    setKeyword(data);
                  }}
                  type="text"
                  placeholder="Tìm kiếm trên Ensonet"
                  className="w-56 outline-none bg-transparent hidden xl:inline-block dark:text-white"
                />
              </div>
            </div>
          </div>
          <hr className="my-2" />
          <div className="w-full">
            <div className="w-full py-1">
              <div className="w-full cursor-pointer">
                {loading ? (
                  <div className="w-full flex items-center justify-center h-12">
                    <i className="fas fa-circle-notch text-2xl text-gray-500 mx-9 fa-spin"></i>
                  </div>
                ) : list ? (
                  list.length > 0 ? (
                    list.map((item) => (
                      <ItemHeaderLoggedLeft item={item} key={item.id} />
                    ))
                  ) : (
                    <p className="my-2 text-sm text-center">
                      Không tìm thấy kết quả phù hợp.
                    </p>
                  )
                ) : (
                  ""
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
          <i className="bx bx-search text-gray-500 text-xl xl:mr-2 dark:text-dark-txt"></i>
          <InputComponent
            handleClick={() => setShow(true)}
            type="text"
            placeholder="Tìm kiếm trên Ensonet"
            className="outline-none bg-transparent hidden xl:inline-block dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
