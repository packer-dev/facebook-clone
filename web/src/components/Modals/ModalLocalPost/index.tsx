import React, { useContext } from "react";
import locals from "@/config/locals";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";
import InputComponent from "@/components/InputComponent";

export default function ModalLocalPost() {
  //
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <ModalWrapperChildPost title="Tìm kiếm vị trí">
      <div className="w-full my-2 px-2">
        <InputComponent
          className="dark:text-white w-full p-2.5 border border-gray-300 
          pl-4 bg-transparent dark:bg-dark-third rounded-3xl"
          type="text"
          placeholder="Tìm kiếm"
          search={true}
        />
      </div>
      <div className="tac-user wrapper-content-right">
        {locals.map((local) => (
          <div
            aria-hidden
            onClick={() => {
              postsDispatch(
                postsAction.updateData("local", posts?.local ? null : local)
              );
              postsDispatch(postsAction.returnModalPost());
            }}
            key={local.id}
            className={`w-full pl-4 rounded-lg cursor-pointer relative flex py-1.5
                        ${
                          posts?.local?.id === local?.id
                            ? "bg-gray-200 dark:bg-dark-third"
                            : "hover:bg-gray-200 dark:hover:bg-dark-third"
                        } `}
          >
            <div className=" w-12 h-12 flex justify-center items-center mr-3 bg-gray-300 rounded-full dark:bg-dark-main">
              <i className="fas fa-map-marker-alt text-red-500 text-2xl " />
            </div>
            <p className="dark:text-white flex items-center">{local?.name}</p>
            <span className="absolute top-4 right-6" />
          </div>
        ))}
      </div>
    </ModalWrapperChildPost>
  );
}
