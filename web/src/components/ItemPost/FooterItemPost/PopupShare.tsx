import * as React from "react";

const PopupShare = React.forwardRef((props: any, ref: any) => {
  //
  const categories = [
    {
      icon: "bx bx-share",
      name: "Chia sẽ ngay (Công khai)",
      handleClick: () => "",
    },
    {
      icon: "bx bx-share",
      name: "Chia sẽ ngay (Bạn bè)",
      handleClick: () => "",
    },
    {
      icon: "bx bx-share",
      name: "Chia sẽ ngay (Chỉ mình tôi)",
      handleClick: () => "",
    },
    {
      icon: "fas fa-user-edit",
      name: "Chia sẽ lên bản tin",
      handleClick: () => "",
    },
    {
      icon: "bx bx-copy",
      name: "Sao chép liên kết",
      handleClick: () => "",
    },
    {
      icon: "bx bxl-messenger",
      name: "Gửi qua messenger",
      handleClick: () => "",
    },
  ];
  //
  return (
    <div
      ref={ref}
      className="hidden bg-white my-4 bottom-full absolute w-80 p-1 animate__animated animate__fadeIn
        rounded-lg dark:bg-dark-second z-50 shadow-lv1"
    >
      <ul className="w-full">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => {}}
            className="w-full flex p-2 cursor-pointer dark:text-white dark:hover:bg-dark-third 
                    hover:bg-gray-200"
          >
            <i className={`text-2xl pr-2 ${category.icon}`}></i>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default PopupShare;
