import * as React from "react";
import ItemWatchChildren from "../ItemWatchChildren";

export default function ListItemWatchLeft({ images }) {
  //
  //
  return (
    <div className="w-full flex my-3">
      <div className="w-full h-full overflow-y-auto">
        <div className="w-full md:block flex items-center gap-2">
          <ItemWatchChildren name={"Trang chủ"} position={151} index={0} />
          <ItemWatchChildren name={"Trực tiếp"} position={66} index={1} />
          <ItemWatchChildren name={"Chương trình"} position={88} index={2} />
          <ItemWatchChildren name={"Video đã lưu"} position={25} index={3} />
          <span
            className="bx bx-dots-horizontal-rounded px-3 text-2xl rounded-full md:hidden
            bg-gray-300 dark:bg-dark-third cursor-pointer flex items-center justify-center"
          />
        </div>
        <hr className="border-gray-300 my-2 hidden md:flex" />
        <div className="w-full hidden md:flex justify-between items-center">
          <span className="font-bold dark:text-gray-300">Đang theo dõi</span>
          <span className="text-main">Quản lí</span>
        </div>
        <div className="my-2 hidden md:block">
          <ItemWatchChildren
            name={"Video mới nhất"}
            image="icon"
            data="far fa-play"
          />
          {images.map((item) => (
            <ItemWatchChildren
              name={"Đậu Phộng TV"}
              image={true}
              key={item}
              multiline={`9+ video mới`}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
