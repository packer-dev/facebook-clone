import React from "react";

const DeletedPost = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/12">
        <i className="fas fa-lock text-xl dark:text-white"></i>
      </div>
      <div className="w-11/12">
        <p className="pb-2 font-bold text-xl dark:text-white">
          This content is currently unavailable
        </p>
        <p className="text-sm dark:text-gray-300">
          This error is usually because the owner has shared the content with a
          small group, changed the viewers, or deleted the content.
        </p>
      </div>
    </div>
  );
};

export default DeletedPost;
