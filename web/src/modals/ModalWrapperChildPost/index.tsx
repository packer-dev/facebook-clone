import React, { ReactNode, useContext } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapper from "../ModalWrapper";

const ModalWrapperChildPost = ({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) => {
  //
  const { postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <ModalWrapper>
      <div className="flex flex-row items-center justify-between">
        <p className="p-3.5 flex-1 -mt-4 block text-center text-xl font-bold dark:text-white">
          {title}
        </p>
        <div
          aria-hidden
          onClick={() => postsDispatch(postsAction.returnModalPost())}
          className="w-10 h-10 cursor-pointer absolute top-2.5 left-2 flex items-center dark:bg-dark-main
        justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 dark:hover:bg-dark-third"
        >
          <i className="bx bxs-left-arrow-alt cursor-pointer text-2xl dark:text-white" />
        </div>
        <div />
      </div>
      <hr className="dark:border-dark-third" />
      {children}
    </ModalWrapper>
  );
};

export default ModalWrapperChildPost;
