import React, { useContext } from "react";
import backgrounds from "@/config/backgrounds";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";

const GroupChooseBackground = (props) => {
  //
  const { title, list } = props;
  const { postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <div className="mt-2 mb-12 w-full px-3">
      <p className="text-xm font-semibold my-3">{title}</p>
      <ul className="w-full flex gap-2 flex-wrap">
        {list.map((item) => (
          <li
            aria-hidden
            key={item.id}
            onClick={() => {
              postsDispatch(postsAction.updateData("background", item));
              postsDispatch(postsAction.updateData("usingBackground", item));
              postsDispatch(postsAction.returnModalPost());
            }}
            className="w-20 h-20 bg-contain cursor-pointer rounded-lg"
            style={{ [item.key]: item.value }}
          />
        ))}
      </ul>
    </div>
  );
};

export default function ModalChooseBackground() {
  return (
    <ModalWrapperChildPost title="Chọn phông nền">
      <div
        className="w-full overflow-y-auto scrollbar-css"
        style={{ height: 400, maxHeight: 400 }}
      >
        <GroupChooseBackground
          title={`Phổ biến`}
          list={backgrounds.filter((item) => item.type === 0).slice(0, 8)}
        />
        <GroupChooseBackground
          title={`Mới`}
          list={backgrounds.filter((item) => item.type === 1).slice(0, 8)}
        />
        <GroupChooseBackground
          title={`Xem thêm`}
          list={backgrounds.filter((item) => item.type === 2)}
        />
      </div>
    </ModalWrapperChildPost>
  );
}
