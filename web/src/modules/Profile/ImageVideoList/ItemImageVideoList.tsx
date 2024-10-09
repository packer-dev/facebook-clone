import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import { ImageVideoProps } from ".";
import ItemMedia from "@/modules/MediaDisplay/ItemMedia";

const DataImageVideo = ({ imageVideo }: { imageVideo: ImageVideoProps }) => {
  switch (imageVideo.media.type) {
    case 1:
      return (
        <img
          src={imageVideo.media.url}
          className="w-full h-full object-cover"
          alt=""
        />
      );
    case 2:
      return (
        <>
          <div className="w-full absolute top-0 left-0 bg-black bg-opacity-50 h-full news__view">
            <div className="w-full relative h-full">
              <div className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex justify-center flex-wrap">
                <i className="bx bx-play-circle text-6xl cursor-pointer text-white " />
              </div>
            </div>
          </div>
          <i
            className="bx bx-play-circle text-6xl cursor-pointer text-white absolute top-1/2  
            left-1/2 transform -translate-y-1/2 -translate-x-1/2 news_bntPlay"
          />
          <ItemMedia
            type="video"
            src={imageVideo.media.url}
            single
            className="w-full max-h-148 h-full object-cover"
          />
        </>
      );
    default:
      return <></>;
  }
};

const ItemImageVideoList = ({
  imageVideo,
}: {
  imageVideo: ImageVideoProps;
}) => {
  //

  //
  return (
    <div className="relative case" style={{ paddingTop: "100%" }}>
      <Link
        to={PAGE_VIEW_POST + "/" + imageVideo.post_id}
        className="block absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
      >
        <DataImageVideo imageVideo={imageVideo} />
      </Link>
      <div
        className="cursor-pointer edit top-4 right-4 absolute w-10 h-10 rounded-full pt-1.5 pl-2.5 text-lg"
        style={{ backgroundColor: "rgba(256, 256, 256, 0.2)" }}
      >
        <i className="fas fa-pencil-alt text-gray-100" />
      </div>
    </div>
  );
};

export default ItemImageVideoList;
