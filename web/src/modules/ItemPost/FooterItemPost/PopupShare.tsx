import * as React from "react";

const PopupShare = React.forwardRef((props: any, ref: any) => {
  const categories = [
    {
      icon: "bx bx-share",
      name: "Share Now (Public)",
      handleClick: () => "",
    },
    {
      icon: "bx bx-share",
      name: "Share Now (Friends)",
      handleClick: () => "",
    },
    {
      icon: "bx bx-share",
      name: "Share Now (Only Me)",
      handleClick: () => "",
    },
    {
      icon: "fas fa-user-edit",
      name: "Share to News Feed",
      handleClick: () => "",
    },
    {
      icon: "bx bx-copy",
      name: "Copy Link",
      handleClick: () => "",
    },
    {
      icon: "bx bxl-messenger",
      name: "Send via Messenger",
      handleClick: () => "",
    },
  ];
  return (
    <div
      ref={ref}
      className="hidden bg-white my-4 bottom-full absolute w-80 p-1 animate__animated animate__fadeIn
        rounded-lg dark:bg-dark-second z-50 shadow-lv1"
    >
      <ul className="w-full">
        {categories.map((category, index) => (
          <li
            aria-hidden
            key={category.name}
            className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third hover:bg-gray-200"
          >
            <i className={`text-2xl pr-2 ${category.icon}`} />
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default PopupShare;
