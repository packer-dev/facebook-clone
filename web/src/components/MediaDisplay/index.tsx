import React, { useContext } from "react";
import { Media } from "@/interfaces/Media";
import { Post } from "@/interfaces/Post";
import { useNavigate } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import ItemMedia from "./ItemMedia";
import ButtonComponent from "../ButtonComponent";
import { PostContext } from "@/contexts/PostContext/PostContext";

type MediaDisplayProps = {
  medias: (Media | File)[];
  post?: Post;
  edit?: boolean;
};

const MediaDisplay = ({ medias = [], post, edit }: MediaDisplayProps) => {
  const rowTop = medias.slice(0, 2);
  const rowBottom = medias.slice(2, 5);
  const navigation = useNavigate();
  const { postsDispatch, postsAction } = useContext(PostContext);
  return (
    <div className="w-full relative">
      {medias.length > 0 && edit && (
        <div className="flex absolute gap-2 items-center top-3 left-3 z-20">
          <ButtonComponent
            handleClick={() =>
              postsDispatch(postsAction.openModalImageVideoEdit())
            }
            className="flex items-center px-3 text-sm py-1 bg-gray-100 text-gray-600 
          hover:text-gray-800 hover:bg-gray-200 rounded-md font-semibold"
          >
            <i className="bx bxs-pencil text-xl mr-2" />
            <span>Edit</span>
          </ButtonComponent>
          <label htmlFor="inputFileUpload">
            {" "}
            <span
              className="flex items-center px-3 text-sm py-1 bg-gray-100 text-gray-600 cursor-pointer  
              hover:text-gray-800 hover:bg-gray-200 rounded-md font-semibold"
            >
              <i className="bx bxs-add-to-queue text-xl mr-2" />
              <span>Add image/video</span>
            </span>
          </label>
        </div>
      )}
      <div className={`grid grid-cols-${rowTop.length} gap-1 mb-1`}>
        {rowTop.map((item, index) => {
          const path = "url" in item ? item.url : item.name;
          const extension = path
            .split(".")
            [path.split(".").length - 1].toLowerCase();
          const type =
            extension === "jpg" || extension === "png" ? "image" : "video";
          return "url" in item ? (
            <ItemMedia
              src={item.url}
              key={item.url}
              type={type}
              handle={() => navigation(`${PAGE_VIEW_POST}/${post?.id}`)}
            />
          ) : (
            <ItemMedia
              src={URL.createObjectURL(item)}
              key={item.name}
              type={type}
            />
          );
        })}
      </div>
      <div className={`grid grid-cols-${rowBottom.length} gap-1`}>
        {rowBottom.map((item, index) => {
          const path = "url" in item ? item.url : item.name;
          const extension = path
            .split(".")
            [path.split(".").length - 1].toLowerCase();
          const type =
            extension === "jpg" || extension === "png" ? "image" : "video";
          return "url" in item ? (
            <ItemMedia
              src={item.url}
              key={item.url}
              type={type}
              showDetail={index === 2 && medias.length > 5}
              mode={rowBottom.length === 1 ? "half" : "square"}
            >
              {index === 2 && medias.length > 5 ? `+${medias.length - 5}` : ""}
            </ItemMedia>
          ) : (
            <ItemMedia
              showDetail={index === 2 && medias.length > 5}
              src={URL.createObjectURL(item)}
              key={item.name}
              type={type}
              mode={rowBottom.length === 1 ? "half" : "square"}
            >
              {index === 2 && medias.length > 5 ? `+${medias.length - 5}` : ""}
            </ItemMedia>
          );
        })}
      </div>
    </div>
  );
};

export default MediaDisplay;
