import { PostContext } from "@/contexts/PostContext/PostContext";
import { Media } from "@/interfaces/Media";
import React, { useContext } from "react";

type ImageVideoEditComponentProps = {
  component: any;
  element: Media | File;
  src: string;
  style: any;
};

const ImageVideoEditComponent = ({
  component,
  src,
  element,
  style,
}: ImageVideoEditComponentProps) => {
  //
  const {
    posts: { imageVideo },
    postsAction,
    postsDispatch,
  } = useContext(PostContext);
  const handleClick = () => {
    let result: any;
    if ("url" in element) {
      result = [...imageVideo.old].filter((item) => item.id !== element.id);
    } else {
      result = [...Array.from(imageVideo.new || [])].filter(
        (item) => item.name !== element.name
      );
    }
    postsDispatch(
      postsAction.updateData("imageVideo", {
        ...imageVideo,
        ["url" in element ? "old" : "new"]: result,
      })
    );
  };
  //
  return (
    <div className="">
      <div className="relative mb-3">
        <span
          aria-hidden
          onClick={handleClick}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer absolute top-1 right-1  
        text-gray-700 hover:text-gray-800 font-bold bx bx-x text-xl flex justify-center items-center z-20"
        />
        <div className="mx-auto relative" style={style}>
          {component}
        </div>
        <div
          className="w-full h-full absolute top-0 left-0 bg-black"
          style={{ zIndex: -1 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover opacity-30"
            style={{ filter: "blur(6px)" }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center my-3">
        <textarea
          className="w-full mx-auto h-12 p-3 border border-solid border-gray-200 shadow-lv1 dark:bg-dark-main 
          rounded-lg resize-none focus:border-blue-500 dark:border-dark-second"
          spellCheck={false}
          placeholder="Noted"
        />
      </div>
    </div>
  );
};

export default ImageVideoEditComponent;
