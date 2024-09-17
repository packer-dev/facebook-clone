import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ModalWrapperChildPost from "../ModalWrapperChildPost";
import ImageVideoEditComponent from "./ImageVideoEditComponent";
import ButtonComponent from "@/components/ButtonComponent";

const ImageVideo = (props: { src: string; type: 1 | 2 }) => {
  return props.type === 1 ? (
    <img
      src={props.src}
      className="w-auto max-w-full mx-auto h-full object-cover"
      alt=""
    />
  ) : (
    <video className="w-auto max-w-full mx-auto h-full object-cover">
      <track src={props.src} default kind="captions" srcLang="en" />
    </video>
  );
};

export default function ModalEditImageVideo() {
  //
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  const length = posts.imageVideo.length;
  const refContainer = useRef<HTMLDivElement>();
  const [data, setData] = useState<any>();
  useEffect(() => {
    const combineImageVideo = [
      ...Array.from(posts.imageVideo.old),
      ...Array.from(posts.imageVideo.new),
    ];
    const result = combineImageVideo.map((element, index) => {
      let extension = "";
      if ("url" in element) {
        extension = element.url.split(".")[element.url.split(".").length - 1];
      } else {
        extension = element.name.split(".")[element.name.split(".").length - 1];
      }
      let type: 1 | 2 = 1;
      if (extension === "mp4" || extension === "mov") {
        type = 2;
      }
      const width = refContainer.current.offsetWidth;
      const widthImage = length === 3 || length === 4 ? 2 : 3;
      const heightLengthImage = length === 3 || length === 4 ? 3 : 4;
      return (
        <ImageVideoEditComponent
          key={"url" in element ? element.url : element.name}
          index={index}
          src={"url" in element ? element.url : URL.createObjectURL(element)}
          style={{
            width:
              length === 1 || length === 2
                ? width
                : Math.floor(width / widthImage) - 6 + "px",
            height:
              Math.floor(
                width / (length === 1 || length === 2 ? 2 : heightLengthImage)
              ) - (length === 1 || length === 2 ? 20 : 60),
          }}
          component={
            <ImageVideo
              src={
                "url" in element ? element.url : URL.createObjectURL(element)
              }
              type={type}
            />
          }
          file={element}
        />
      );
    });
    setData(result);
  }, [refContainer, posts.imageVideo, length]);
  const containerLength =
    length === 3 || length === 4 ? "xl:w-3/5" : "xl:w-3/4";
  //
  return (
    <ModalWrapperChildPost
      customerClass={`shadow-sm border border-solid border-gray-200 bg-white w-full absolute  
        dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-2 sm:w-10/12 md:w-2/3 lg:w-2/3 
        ${length <= 2 ? "xl:w-36%" : containerLength} shadow-lv1 
        z-50 top-1/2 left-1/2 `}
      title={`Ảnh/Video`}
    >
      <div ref={refContainer} className="w-full relative pt-3 pb-12">
        <div
          className="w-full h-full flex flex-wrap gap-1 max-h-full overflow-x-hidden overflow-y-auto"
          style={{ maxHeight: length > 4 ? "80vh" : 650 }}
        >
          {posts.imageVideo.length > 0 ? (
            data
          ) : (
            <div className="w-full h-60 flex justify-center items-center">
              <div className="-mt-6">
                <img
                  src="https://www.facebook.com/images/comet/empty_states_icons/media/null_states_media_gray_wash.svg"
                  alt=""
                  className="w-28 mx-auto object-cover"
                />
                <p className="text-center text-gray-600 text-sm">
                  Add image/video to start
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          className="w-full absolute z-50 bottom-0 border-t-2 border-solid border-gray-200 
          left-0 p-2 pb-0 flex justify-end items-center gap-2 bg-white dark:bg-dark-second dark:border-dark-second"
        >
          <input
            type="file"
            onChange={(event) => {
              if (event.target.files.length > 0) {
                postsDispatch(
                  postsAction.updateData("imageVideo", {
                    ...posts.imageVideo,
                    new: [
                      ...Array.from(posts.imageVideo.new),
                      ...Array.from(event.target.files),
                    ],
                  })
                );
              }
            }}
            multiple={true}
            className="hidden"
            id="inputFileUpload"
            accept="image/*,video/*"
          />
          <label htmlFor="inputFileUpload">
            {" "}
            <span className="px-5 py-2 text-main font-semibold flex items-center">
              <i className="bx bxs-add-to-queue text-xl mr-2" />
              <span>Add image/video</span>
            </span>
          </label>
          <ButtonComponent
            handleClick={() => postsDispatch(postsAction.returnModalPost())}
            className="px-5 py-2 rounded-lg bg-main text-white font-semibold"
          >
            Done
          </ButtonComponent>
        </div>
      </div>
    </ModalWrapperChildPost>
  );
}
