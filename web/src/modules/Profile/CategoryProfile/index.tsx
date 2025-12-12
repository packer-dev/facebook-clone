import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_PROFILE } from "@/constants/Config";
import { Button } from "@/components/ui/button";

const CategoryProfile = ({ id }: { id: string | number }) => {
  const categories = [
    {
      id: 0,
      label: "Posts",
      slug: "",
      link: `${PAGE_PROFILE}/${id}`, // Link to the profile page
    },
    {
      id: 1,
      label: "Friends",
      slug: "friends",
      link: `${PAGE_PROFILE}/${id}/friends`, // Link to the friends page of the profile
    },
    {
      id: 2,
      label: "Photos",
      slug: "images",
      link: `${PAGE_PROFILE}/${id}/images`, // Link to the images page of the profile
    },
    {
      id: 3,
      label: "Videos",
      slug: "videos",
      link: `${PAGE_PROFILE}/${id}/videos`, // Link to the videos page of the profile
    },
    {
      id: 4,
      label: "Stories",
      slug: "stories",
      link: `${PAGE_PROFILE}/${id}/stories`, // Link to the stories page of the profile
    },
  ];
  const location = useLocation();
  const navigation = useNavigate();
  const [active, setActive] = useState(
    categories.findIndex((dt) => location.pathname.indexOf(dt.slug))
  );
  useEffect(() => {
    const index = categories.findIndex(
      (item) => item.slug && location.pathname?.includes(item.slug)
    );
    if (index !== -1) {
      setActive(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <div className="w-full relative flex-row flex justify-between items-center">
      <ul className="w-full flex py-1 gap-1">
        {categories.map((category) => (
          <li
            aria-hidden
            onClick={() => {
              setActive(category.id);
              navigation(category.link);
            }}
            key={category.id}
            className={`text-center py-4 px-4 cursor-pointer border-b-4 dark:text-white font-semibold  ${
              active === category.id
                ? `text-blue-500 border-blue-500 rounded-t-lg`
                : "rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-third border-white dark:border-dark-second"
            }`}
          >
            {category.label}
          </li>
        ))}
      </ul>
      <Button>
        <i className="bx bx-dots-horizontal-rounded text-2xl" />
      </Button>
    </div>
  );
};

export default CategoryProfile;
