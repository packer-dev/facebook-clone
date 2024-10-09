import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import { PostDTO } from "@/interfaces/Post";

const CoverPost = ({ postDetail }: { postDetail: PostDTO }) => {
  return (
    <div className="w-full my-1">
      <Link to={`${PAGE_VIEW_POST}/${postDetail.post.id}`}>
        <img
          src={postDetail.medias.length > 0 && postDetail.medias[0].url}
          alt=""
          className="w-full h-64 object-cover"
        />
      </Link>
    </div>
  );
};
export default CoverPost;
