import React, { useState } from "react";
import ItemHomeLeft from "./ItemHomeLeft";
import categories from "./categories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";

export default function HomeLeft() {
  //
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector<RootState, User>(getUser);
  const [length, setLength] = useState(Math.floor(categories.length / 2) + 1);
  const iconName = (() => {
    if (length === categories.length) return "left";
    else return "right";
  })();
  //
  return (
    <div className="fixed h-screen pt-6 hidden sm:hidden xl:block xl:w-1/4">
      <div className="pl-1.5 h-full w-4/6 overflow-x-hidden overflow-y-auto xl:w-full">
        <ul className="w-full left-category">
          <li
            aria-hidden
            onClick={() => navigation(`${PAGE_PROFILE}/${user.id}`)}
            className="cursor-pointer flex p-2.5 hover:bg-gray-200 font-bold dark:hover:bg-dark-third rounded-lg"
          >
            <img
              className="w-11 h-11 rounded-full object-cover mr-4"
              src={user.avatar}
              alt=""
            />
            <span className="text-sm flex text-gray-900 items-center font-semibold dark:text-white">
              {`${user.name}`}
            </span>
          </li>
          {categories.slice(0, length).map((category) => (
            <ItemHomeLeft key={category.id} {...category} />
          ))}
          <li
            aria-hidden
            onClick={() => {
              setLoading(true);
              const timeOut = setTimeout(() => {
                setLoading(false);
                setLength(
                  length === categories.length
                    ? Math.floor(categories.length / 2) + 1
                    : categories.length
                );
                clearTimeout(timeOut);
              }, 200);
            }}
            className="cursor-pointer rounded-lg flex p-2.5 hover:bg-gray-200 font-bold dark:hover:bg-dark-third"
          >
            <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center">
              <span
                className={`${
                  loading
                    ? "fas fa-circle-notch fa-spin text-sm"
                    : `bx bx-chevron-${iconName}  text-2xl`
                } transform rotate-90`}
              />
            </div>
            <span className="text-sm flex text-gray-900 ml-2 items-center font-semibold dark:text-white">
              {length === categories.length ? "Thu gọn" : "Xem thêm"}
            </span>
          </li>
        </ul>
        <div className="px-4 text-xs font-semibold text-gray-500 mt-10 mb-20">
          Privacy · Terms · Ads · Ad Choices · Cookies · · Meta © 2021
        </div>
      </div>
    </div>
  );
}
