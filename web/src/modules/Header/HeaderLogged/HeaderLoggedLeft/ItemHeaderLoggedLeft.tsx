import * as React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { User } from "@/interfaces/User";

type ItemHeaderLoggedLeftProps = { item: User };

const ItemHeaderLoggedLeft = ({ item }: ItemHeaderLoggedLeftProps) => {
  const navigation = useNavigate();
  return (
    <ul
      aria-hidden
      onClick={() => navigation(PAGE_PROFILE + "/" + item.id)}
      className="w-full relative flex py-2 hover:bg-gray-200 dark:hover:bg-dark-third"
    >
      <li className="pl-3">
        <img
          className="w-11 h-11 object-cover rounded-full p-0.5"
          src={item.avatar}
          alt=""
        />
      </li>
      <li className="pl-3 items-center font-bold dark:text-white py-2.5">
        {`${item.name}`}
      </li>
    </ul>
  );
};

export default ItemHeaderLoggedLeft;
