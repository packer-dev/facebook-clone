import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "../../../constants/Config";

export default function CategoryProfile(props: any) {
  //
  const id = props.id;
  const categories = [
    {
      id: 0,
      label: "Bài viết",
      slug: "",
      link: `${PAGE_PROFILE}/${id}`,
    },
    {
      id: 1,
      label: "Bạn bè",
      slug: "friends",
      link: `${PAGE_PROFILE}/${id}/friends`,
    },
    {
      id: 2,
      label: "Ảnh",
      slug: "images",
      link: `${PAGE_PROFILE}/${id}/images`,
    },
    {
      id: 3,
      label: "Video",
      slug: "videos",
      link: `${PAGE_PROFILE}/${id}/videos`,
    },
    {
      id: 4,
      label: "Stories",
      slug: "stories",
      link: `${PAGE_PROFILE}/${id}/stories`,
    },
  ];
  const location = useLocation();
  const navigation = useNavigate();
  const [active, setActive] = useState(
    categories.findIndex((dt) => location.pathname.indexOf(dt.slug))
  );
  //
  return (
    <div className="w-full relative">
      <ul className="w-full flex py-1">
        {categories.map((category) => (
          <li
            aria-hidden
            onClick={() => {
              setActive(category.id);
              navigation(category.link);
            }}
            key={category.id}
            className={`text-center py-4 px-4 cursor-pointer 
                    border-b-4 dark:text-white font-semibold  ${
                      active === category.id
                        ? `text-blue-500 border-blue-500 
                    rounded-t-lg`
                        : "rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-third border-white dark:border-dark-second"
                    }  `}
          >
            {category.label}
          </li>
        ))}
      </ul>
      <div className="px-4 py-1.5 cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 absolute top-1/2 transform -translate-y-1/2 right-2">
        <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
      </div>
    </div>
  );
}
