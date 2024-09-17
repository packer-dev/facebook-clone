import React, { useContext } from "react";
import { PostContext } from "../../../../contexts/PostContext/PostContext";

export default function BottomWritePostModal() {
  //
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  //
  return (
    <div className="w-full flex p-2 border-2 border-solid border-gray-300 dark:border-dark-third mt-4 rounded-lg">
      <div className="cursor-pointer w-40 flex">
        <p className="pl-2.5 dark:text-white font-bold text-sm flex items-center">
          Add into post
        </p>
      </div>
      <ul className="ml-auto flex" id="placeSelection">
        <li
          aria-hidden
          onClick={() => {
            if (posts.background) return;
            postsDispatch(postsAction.updateData("imageVideoUpload", true));
          }}
          className={`cursor-pointer flex w-10 h-10 mx-1 rounded-full ${
            posts.background ? "" : "hover:bg-gray-200 dark:hover:bg-dark-third"
          } justify-center`}
        >
          <i
            className={`far fa-image text-2xl text-${
              posts.background ? "gray" : "green"
            }-500 flex items-center`}
          />
        </li>
        <li
          aria-hidden
          onClick={() => postsDispatch(postsAction.openModalFeel())}
          className={`cursor-pointer flex w-10 h-10 mx-1 rounded-full ${
            posts.feel ? "bg-yellow-100" : " "
          } hover:bg-gray-200 dark:hover:bg-dark-third justify-center `}
        >
          <i className="fas fa-smile text-2xl text-yellow-500 flex items-center" />
        </li>
        <li
          aria-hidden
          onClick={() => postsDispatch(postsAction.openModalTag())}
          className={`cursor-pointer flex w-10 h-10 mx-1 rounded-full ${
            posts.tags.length > 0 ? "bg-blue-100" : " "
          } hover:bg-gray-200 dark:hover:bg-dark-third justify-center`}
        >
          <i className="fas fa-user-tag text-2xl text-blue-500 flex items-center" />
        </li>
        <li
          aria-hidden
          onClick={() => postsDispatch(postsAction.openModalLocal())}
          className={`cursor-pointer flex w-10 h-10 mx-1 rounded-full ${
            posts.local ? "bg-red-100" : " "
          } hover:bg-gray-200 dark:hover:bg-dark-third justify-center`}
        >
          <i className="fas fa-map-marker-alt text-2xl text-red-500 flex items-center" />
        </li>
        <li
          aria-hidden
          onClick={() => {
            if (posts.background) return;
            postsDispatch(postsAction.openModalAnswerQuestion());
          }}
          className={`cursor-pointer flex w-10 h-10 mx-1 rounded-full ${
            posts.background ? "" : "hover:bg-gray-200 dark:hover:bg-dark-third"
          } justify-center`}
        >
          <i
            className={`far fa-question-circle text-2xl text-${
              posts.background ? "gray" : "pink"
            }-500 flex items-center`}
          />
        </li>
      </ul>
    </div>
  );
}
