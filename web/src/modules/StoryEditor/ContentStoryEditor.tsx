import React, {
  forwardRef,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { StoryEditorContext } from "@/contexts/StoryEditorContext";

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
      className="text-xl text-gray-100 break-all content-story-text w-80 min-h-8 absolute content_edit_table__story  
      top-1/2 left-1/2 rounded-2xl px-2 text-center font-bold outline-none transform -translate-y-1/2 -translate-x-1/2"
      spellCheck={false}
      style={{ color: color ? color.color : "white" }}
    />
  );
};

export default forwardRef(function ContentStoryEditor(
  props,
  ref: RefObject<HTMLDivElement>
) {
  //
  const refCanvas = useRef<HTMLCanvasElement>();
  const {
    state: { data, audio },
  } = useContext(StoryEditorContext);
  useEffect(() => {
    if (!ref.current || !refCanvas.current) return;

    refCanvas.current.width = ref.current.offsetWidth;
    refCanvas.current.height = ref.current.offsetHeight;
  }, [data, refCanvas, ref]);
  //
  return (
    <div
      className="w-11/12 flex-1 flex flex-col top-1 mx-auto rounded-2xl dark:bg-dark-main bg-white relative 
      border-2 border-solid border-gray-200 dark:border-dark-third"
    >
      <div className="w-97per text-center flex-1 relative bg-black">
        <div
          ref={ref}
          id="outer"
          className="w-1/2 absolute left-1/2 rounded-lg bg-gray-300
          dark:bg-dark-third justify-center flex top-0 bottom-0 items-center transform -translate-x-1/2"
        >
          <div
            className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50"
            style={{ zIndex: -1 }}
          >
            <img
              src={data?.name ? URL.createObjectURL(data) : data?.src}
              alt=""
              className="w-full h-full object-cover opacity-30"
              style={{ filter: "blur(8px)" }}
            />
          </div>
          <img
            id="myImage"
            className="w-full rounded-lg h-4/5 object-cover"
            src={data?.name ? URL.createObjectURL(data) : data?.src}
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
        ref={refCanvas}
        id="myCanvas"
        className="hidden justify-center items-center"
      />
    </div>
  );
});
