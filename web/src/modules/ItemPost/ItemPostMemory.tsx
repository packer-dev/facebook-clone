import React, { useContext } from "react";
import ItemPost from ".";
import { PostDTO } from "@/interfaces/Post";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

type ItemPostMemoryProps = { postDetail: PostDTO };

const ItemPostMemory = ({ postDetail }: ItemPostMemoryProps) => {
  const { modalsAction, modalsDispatch } = useContext(ModalContext);
  return (
    <div className="w-full my-3 bg-white dark:bg-dark-second rounded-lg p-2">
      <div className="w-full p-2">
        <p className="text-sm py-0.5 font-bold text-gray-900 dark:text-white">
          ON THIS DAY
        </p>
        <p className="text-xl font-bold dark:text-white">1 year ago</p>
      </div>
      <div className="w-full pt-2">
        <ItemPost postDetail={postDetail} hideToolbar />
      </div>
      <div
        aria-hidden
        onClick={() =>
          modalsDispatch(modalsAction.openModalPost({ share: postDetail }))
        }
        className="dark:text-gray-300 dark:bg-dark-third bg-gray-200
        text-center font-bold w-full py-2 mx-auto cursor-pointer"
      >
        <i className="fas fa-share dark:text-gray-300"></i> &nbsp; Share
      </div>
    </div>
  );
};
export default ItemPostMemory;
