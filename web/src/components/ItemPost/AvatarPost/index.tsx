import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";

export default function AvatarPost(props: any) {
  //
  const {
    postDetail: { post, imageVideoPostList },
  } = props;
  //
  return (
    <div className="w-full mx-0 my-2.5">
      <div className="w-full relative block" style={{ height: 430 }}>
        <img
          className="w-full h-60 object-cover"
          src={post.userPost.cover}
          alt=""
          loading="lazy"
        />
        <Link to={`${PAGE_VIEW_POST}/${post.id}`}>
          <img
            className="absolute bg-white rounded-full object-cover left-1/2 transform -translate-x-1/2 border-4 border-solid border-white"
            style={{ height: 390, width: 390, top: "5%" }}
            src={imageVideoPostList.length > 0 ? imageVideoPostList[0].src : ""}
            alt=""
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
}
