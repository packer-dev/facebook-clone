import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userChatsAction from "@/actions/userChat/index";
import { RootState } from "@/reducers";

export default function ItemChatMinize(props) {
  //
  const {
    userChat: { minize, zoom },
  } = useSelector<RootState, RootState>((state) => state);
  const dispatch = useDispatch();
  const { item } = props;
  //
  return (
    <div className="scroll-user w-14 h-14 relative my-3">
      <img
        aria-hidden
        onClick={() => {
          dispatch(
            userChatsAction.updateData(
              "zoom",
              zoom.length > 0 ? [item].concat(zoom[zoom.length - 1]) : [item]
            )
          );
          dispatch(
            userChatsAction.updateData(
              "minize",
              [...minize].filter((data) => data.id !== item.id)
            )
          );
        }}
        className="shadow-2xl w-14 h-14 shadow-lv1 rounded-full mx-auto object-cover"
        src={item.avatar}
        alt=""
      />
      <span
        aria-hidden
        onClick={() => {
          dispatch(
            userChatsAction.updateData(
              "minize",
              [...minize].filter((data) => data.id !== item.id)
            )
          );
        }}
        className="close-scroll-user hidden text-xm py-0.5 px-2 font-bold rounded-full absolute -top-2 -right-1 bg-white"
      >
        &times;
      </span>
      <span className="w-3.5 h-3.5 rounded-full border-2 border-solid  border-white absolute bottom-0 -right-1 bg-green-500"></span>
    </div>
  );
}
