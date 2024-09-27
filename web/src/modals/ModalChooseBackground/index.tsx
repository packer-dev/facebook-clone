import React, { useContext } from "react";
import backgrounds from "@/config/backgrounds"; // Import backgrounds configuration
import { PostContext } from "@/contexts/PostContext/PostContext"; // Import Post context
import ModalWrapperChildPost from "../ModalWrapperChildPost"; // Import Modal Wrapper component

const GroupChooseBackground = (props) => {
  const { title, list } = props;
  const { postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <div className="mt-2 mb-12 w-full">
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

const ModalChooseBackground = () => {
  return (
    <ModalWrapperChildPost title="Choose Background">
      <div className="w-full overflow-y-auto scrollbar-css h-[400px] max-h-[400px]">
        <GroupChooseBackground
          title="Popular"
          list={backgrounds.filter((item) => item.type === 0).slice(0, 8)}
        />
        <GroupChooseBackground
          title="New"
          list={backgrounds.filter((item) => item.type === 1).slice(0, 8)}
        />
        <GroupChooseBackground
          title="See More"
          list={backgrounds.filter((item) => item.type === 2)}
        />
      </div>
    </ModalWrapperChildPost>
  );
};

export default ModalChooseBackground;
