import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, getUser } from "@/reducers";
import { PAGE_PROFILE } from "@/constants/Config";
import * as usersAction from "@/actions/user/index";
import { User } from "@/interfaces/User";

export default function PopoverSetting() {
  //
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full p-2 rounded-lg">
      <div
        aria-hidden
        onClick={() => navigation(`${PAGE_PROFILE}/${user?.id}`)}
        className="p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third flex w-full items-center"
      >
        <img
          src={user.avatar}
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="pl-3">
          <p className="font-semibold text-base dark:text-white">{`${user.name}`}</p>
          <p className="text-sm dark:text-gray-300 opacity-60">
            Xem trang cá nhân của bạn
          </p>
        </div>
      </div>
      <hr className="border-gray-300 my-1.5 dark:border-dark-third" />
      <div className="p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third flex w-full items-center">
        <span
          className="bx bx-error-alt text-2xl w-8 h-8 rounded-full flex justify-center items-center 
                bg-gray-200 dark:bg-dark-third dark:text-white"
        ></span>
        <div className="pl-3">
          <p className="font-semibold text-base dark:text-white">
            Đóng góp ý kiến cho Facebook
          </p>
          <p className="text-xs dark:text-gray-300 opacity-60">
            Đóng góp cải thiện phiên bản facebook mới
          </p>
        </div>
      </div>
      <hr className="border-gray-300 my-1.5 dark:border-dark-third" />
      <div
        aria-hidden
        onClick={() => dispatch(usersAction.logoutUser())}
        className="p-2 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third flex w-full items-center"
      >
        <span
          className="bx bx-log-out text-2xl w-8 h-8 rounded-full flex justify-center items-center 
                bg-gray-200 dark:bg-dark-third dark:text-white"
        ></span>
        <div className="pl-3">
          <p className="font-semibold text-base dark:text-white">Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}
