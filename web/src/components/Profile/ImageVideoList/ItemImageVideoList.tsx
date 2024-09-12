import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";

export default function ItemImageVideoList(props) {
  //
  const { imageVideo } = props;
  const DataImageVideo = () => {
    switch (imageVideo.typeImageVideoPost) {
      case 0:
        return (
          <img
            src={imageVideo.src}
            className="w-full max-h-148 h-full object-cover"
            alt=""
          />
        );
      case 1:
        return (
          <>
            <div className="w-full absolute top-0 left-0 bg-black bg-opacity-50 h-full news__view">
              <div className="w-full relative h-full">
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-center flex-wrap">
                  <i className="bx bx-play-circle text-6xl cursor-pointer text-white "></i>
                </div>
              </div>
            </div>
            <i
              className="bx bx-play-circle text-6xl cursor-pointer text-white absolute top-1/2  
                    left-1/2 transform -translate-y-1/2 -translate-x-1/2 news_bntPlay"
            ></i>
            <video
              src={imageVideo.src}
              className="w-full max-h-148 h-full object-cover"
            ></video>
          </>
        );
      default:
        return <></>;
    }
  };
  //
  return (
    <div className="w-1/5 relative case">
      <Link to={PAGE_VIEW_POST + "/" + imageVideo.postImageVideoPost.id}>
        <div className="w-44 h-44 m-1.5 cursor-pointer relative">
          <DataImageVideo />
        </div>
      </Link>
      <div
        className="cursor-pointer edit top-4 right-4 absolute w-10 h-10 rounded-full
                    pt-1.5 pl-2.5 text-lg"
        style={{ backgroundColor: "rgba(256, 256, 256, 0.2)" }}
      >
        <i className="fas fa-pencil-alt text-gray-100"></i>
      </div>
    </div>
  );
}
