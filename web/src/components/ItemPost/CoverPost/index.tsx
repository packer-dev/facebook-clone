import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "../../../constants/Config";

export default function CoverPost(props) {
  //
  const {
    postDetail: { imageVideoPostList, post },
  } = props;
  //
  return (
    <div className="w-full my-1">
      <Link to={`${PAGE_VIEW_POST}/${post.id}`}>
        <img
          src={imageVideoPostList.length > 0 && imageVideoPostList[0].src}
          alt=""
          className="w-full h-64 object-cover"
        />
      </Link>
    </div>
  );
}
