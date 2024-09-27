import React, { useContext } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";
import Input from "@/components/Input";
import { useSelector } from "react-redux";
import { getCommon, RootState } from "@/reducers";
import { CommonDataProps } from "@/reducers/common";

const ModalTagPost = () => {
  //
  const { friends } = useSelector<RootState, CommonDataProps>(getCommon);
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <ModalWrapperChildPost title="Tag friend">
      <div className="w-full my-2 flex items-center">
        <Input
          className="w-10/12"
          search
          type="text"
          placeholder="Modal search friends"
        />
        &nbsp;&nbsp;&nbsp;
        <span
          aria-hidden
          onClick={() => {
            postsDispatch(postsAction.returnModalPost());
          }}
          className="font-bold ml-4 text-blue-500 cursor-pointer"
        >
          Done
        </span>
      </div>
      {posts.tags.length > 0 && (
        <div className="w-full pb-3">
          <p className="w-full mx-auto dark:text-gray-300 font-bold py-1">
            Tagged
          </p>
          <div className="w-full mx-auto p-2 border-2 border-solid border-gray-300 rounded-lg">
            <div className="w-auto gap-2 flex flex-wrap max-h-32 overflow-y-auto">
              {posts.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="break-all text-sm w-auto rounded-md cursor-pointer p-1.5 bg-blue-100 text-blue-500 font-semibold 
                  items-center flex gap-2"
                >
                  {`${tag.name}`}
                  <span
                    aria-hidden
                    onClick={() => {
                      postsDispatch(
                        postsAction.updateData(
                          "tags",
                          [...posts.tags].filter((item) => item.id !== tag.id)
                        )
                      );
                    }}
                    className="text-xl cursor-pointer -mt-1"
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="tac-user wrapper-content-right">
        <p className="w-11/12 mx-auto dark:text-gray-300 font-bold py-2">
          Suggest
        </p>
        {friends.map((user) => (
          <div
            aria-hidden
            onClick={() => {
              postsDispatch(
                postsAction.updateData(
                  "tags",
                  [...posts.tags].findIndex((item) => item.id === user.id) ===
                    -1
                    ? [...posts.tags, user]
                    : [...posts.tags].filter((item) => item.id !== user.id)
                )
              );
            }}
            key={user.id}
            className="w-full relative flex py-1.5 px-4 cursor-pointer hover:bg-gray-200 
                    rounded-lg dark:hover:bg-dark-third"
          >
            <div className="text-center pr-2.5">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={user.avatar}
                alt=""
              />
            </div>
            <div
              className="tac-user-2"
              style={{ paddingTop: "1%", paddingLeft: "2%" }}
            >
              <p className="font-bold dark:text-white">{user.name}</p>
            </div>
            {[...posts.tags].findIndex((item) => item.id === user.id) !==
              -1 && (
              <span className="absolute top-1/2 transform -translate-y-1/2 right-8">
                <i className="fas fa-check text-green-400 text-xl" />
              </span>
            )}
          </div>
        ))}
      </div>
    </ModalWrapperChildPost>
  );
};

export default ModalTagPost;
