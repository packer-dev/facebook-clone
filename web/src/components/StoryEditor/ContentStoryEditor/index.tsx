import React, { forwardRef, useContext, useEffect, useRef } from "react";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";
import imageAsset from "@/assets/images/51655920_280807142616755_4913279188888190976_n_aj6bex.jpeg";

const ContentTextEdit = () => {
  //
  const {
    state: { content, color },
  } = useContext(StoryEditorContext);
  const refContent = useRef<HTMLDivElement>();
  useEffect(() => {
    //
    refContent.current.innerText = content;
    //
  }, [content, refContent]);
  //
  return (
    <div
      ref={refContent}
      className="text-xl text-gray-100 break-all content-story-text w-80 min-h-8 absolute contentedittable__story  
                    top-1/2 left-1/2 rounded-2xl px-2 text-center font-bold outline-none transform -transtate-y-1/2 -translate-x-1/2"
      spellCheck={false}
      style={{ color: color ? color.color : "white" }}
    ></div>
  );
};

export default forwardRef(function ContentStoryEditor(props, ref: any) {
  //
  const {
    state: { data, audio },
  } = useContext(StoryEditorContext);
  //
  return (
    <div
      className="w-11/12 top-1 mx-auto rounded-2xl mt-6 dark:bg-dark-main bg-white relative 
                        border-2 border-solid border-gray-200 dark:border-dark-third"
      style={{ height: 630 }}
    >
      <div
        className="w-97per text-center relative bg-black rounded-2xl"
        style={{ height: 625 }}
      >
        <div
          ref={ref}
          id="outer"
          className="w-1/2 relative left-1/2 rounded-lg bg-gray-300 -translate-y-1/2 
                                dark:bg-dark-third justify-center flex top-1/2 items-center transform -translate-x-1/2"
          style={{ height: 612 }}
        >
          <div
            className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50"
            style={{ zIndex: -1 }}
          >
            <img
              src={data?.name ? URL.createObjectURL(data) : imageAsset}
              alt=""
              className="w-full h-full object-cover opacity-30"
              style={{ filter: "blur(8px)" }}
            />
          </div>
          <img
            id="myImage"
            className="w-full rounded-lg"
            style={
              data?.name ? { maxHeight: 612 } : { maxHeight: 612, height: 612 }
            }
            src={data?.name ? URL.createObjectURL(data) : imageAsset}
            alt=""
          />
          {audio && (
            <div
              className="w-1/3 bg-white text-left flex p-1.5 absolute top-32 left-24 rounded-lg"
              style={{ transform: "rotate(-25deg)" }}
            >
              <div className="w-1/4 pr-2">
                <img src="/images/mp3.png" alt="" />
              </div>
              <div className="w-3/4">
                <p className="font-bold" style={{ fontSize: 7 }}>
                  {audio.name}
                </p>
                <p className="font-sm" style={{ fontSize: 5 }}>
                  {audio.author}
                </p>
              </div>
            </div>
          )}
          <ContentTextEdit />
        </div>
      </div>
      <canvas
        id="myCanvas"
        className=" justify-center flex items-center"
        width="345"
        height="612"
      ></canvas>
    </div>
  );
});
