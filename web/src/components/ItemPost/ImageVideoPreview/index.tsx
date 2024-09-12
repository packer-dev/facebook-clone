import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "@/contexts/PostContext/PostContext";
import ButtonComponent from "../../ButtonComponent";
import NotImageVideoPreview from "./NotImageVideoPreview";

export default function ImageVideoPreview() {
  //
  const { posts, postsDispatch, postsAction } = useContext(PostContext);
  const refContainer = useRef<HTMLDivElement>();
  const refLastNumber = useRef<HTMLDivElement>();
  const [data, setData] = useState("");
  useEffect(() => {
    //
    // if (refContainer.current && posts.imageVideo.length > 0) {
    //   const result = Array.from(posts.imageVideo)
    //     .slice(0, 5)
    //     .map((element, index) => {
    //       const extension = element.id
    //         ? element.src
    //             .split(".")
    //             [element.src.split(".").length - 1].toLowerCase()
    //         : element.name
    //             .split(".")
    //             [element.name.split(".").length - 1].toLowerCase();
    //       if (
    //         extension === "jpg" ||
    //         extension === "jpeg" ||
    //         extension === "png"
    //       ) {
    //         return (props: any) => {
    //           return (
    //             <img
    //               src={props.src}
    //               style={props.style}
    //               className={props.className}
    //               alt=""
    //             />
    //           );
    //         };
    //       } else {
    //         if (extension === "mp4" || extension === "mov") {
    //           return (props: any) => {
    //             return (
    //               <video
    //                 src={props.src}
    //                 style={props.style}
    //                 className={props.className}
    //               />
    //             );
    //           };
    //         }
    //       }
    //       const div = (index, length, widthOrHeight) => {
    //         switch (index) {
    //           case 1:
    //             return 2;
    //           case 2:
    //             return 2;
    //           case 3:
    //             return length === 4
    //               ? 2
    //               : length === 3
    //               ? widthOrHeight
    //                 ? 1
    //                 : 2
    //               : 3;
    //           case 4:
    //             return length === 4 ? 2 : 3;
    //           case 5:
    //             return 3;
    //           default:
    //             return 1;
    //         }
    //       };
    //       const length = posts.imageVideo.length;
    //       const width = refContainer.current.offsetWidth;
    //       if (refLastNumber.current) {
    //         if (length > 4) {
    //           refLastNumber.current.style.width =
    //             Math.floor(width / 3) - 12 + "px";
    //           refLastNumber.current.style.height =
    //             Math.floor(width / 3) - 12 + "px";
    //           refLastNumber.current.className = `bg-black bg-opacity-50 flex justify-center items-center text-3xl
    //                     font-bold absolute bottom-0 shadow-lv1 text-white right-1.5`;
    //         }
    //       }
    //       return (
    //         <ImageVideo
    //           key={index}
    //           src={element.id ? element.src : URL.createObjectURL(element)}
    //           style={{
    //             width:
    //               (length === 1
    //                 ? width
    //                 : Math.floor(width / div(index + 1, length, true)) -
    //                   (index === 1 ? 20 : 13)) + "px",
    //             height:
    //               (length === 1
    //                 ? width
    //                 : Math.floor(width / div(index + 1, length, false)) - 13) +
    //               "px",
    //           }}
    //           className={"object-cover"}
    //         />
    //       );
    //     });
    //   setData(result);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.imageVideo, refContainer]);
  //
  return (
    <div className="w-full px-3 -mt-2">
      <div
        ref={refContainer}
        className="w-full relative p-2 border border-solid border-gray-200  dark:border-dark-third
             rounded-lg"
      >
        <span
          onClick={() => {
            postsDispatch(postsAction.updateData("imageVideoUpload", false));
            postsDispatch(postsAction.updateData("imageVideo", []));
          }}
          className="w-7 h-7 flex justify-center items-center text-xl rounded-full bg-white cursor-pointer absolute 
                top-3 right-3 border-gray-200 border-solid font-bold text-gray-600 z-10 hover:bg-gray-300"
        >
          &times;
        </span>
        {posts.imageVideo.length > 0 && (
          <div className="flex absolute gap-2 items-center top-3 left-3 z-20">
            <ButtonComponent
              handleClick={() =>
                postsDispatch(postsAction.openModalImageVideoEdit())
              }
              className="flex items-center px-3 text-sm py-1 bg-gray-100 text-gray-600 
                     hover:text-gray-800 hover:bg-gray-200 rounded-md font-semibold"
            >
              <i className="bx bxs-pencil text-xl mr-2"></i>
              <span>Chỉnh sửa tất cả</span>
            </ButtonComponent>
            <label htmlFor="inputFileUpload">
              <span
                className="flex items-center px-3 text-sm py-1 bg-gray-100 text-gray-600 cursor-pointer  
                        hover:text-gray-800 hover:bg-gray-200 rounded-md font-semibold"
              >
                <i className="bx bxs-add-to-queue text-xl mr-2"></i>
                <span>Thêm ảnh/video</span>
              </span>
            </label>
          </div>
        )}
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files.length > 0) {
              postsDispatch(
                postsAction.updateData("imageVideo", [
                  ...posts.imageVideo,
                  // ...event.target.files,
                ])
              );
            }
          }}
          multiple={true}
          className="hidden"
          id="inputFileUpload"
          accept="image/*,video/*"
        />
        {posts.imageVideo.length === 0 ? (
          <NotImageVideoPreview />
        ) : (
          <div className="w-full gap-1.5 flex flex-wrap relative">
            {data}
            {posts.imageVideo.length > 5 && (
              <div className="" ref={refLastNumber}>
                {`+${posts.imageVideo.length - 5}`}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
