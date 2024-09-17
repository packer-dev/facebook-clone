import * as React from "react";
import { Link } from "react-router-dom";
import { PAGE_VIEW_POST } from "@/constants/Config";
import { PostDTO } from "@/interfaces/Post";

const AvatarPost = ({ postDetail }: { postDetail: PostDTO }) => {
  //
  //
  return (
    <div className="w-full mx-0 my-2.5">
      <div className="w-full relative block h-[430px]">
        <img
          className="w-full h-60 object-cover"
          src={postDetail.post.user.cover}
          alt=""
          loading="lazy"
        />
        <Link to={`${PAGE_VIEW_POST}/${postDetail.post.id}`}>
          <img
            className="absolute bg-white rounded-full object-cover left-1/2 transform -translate-x-1/2 border-4 border-solid border-white 
            w-[390px] h-[390px] top-[5%]"
            src={postDetail.medias.length > 0 ? postDetail.medias[0].url : ""}
            alt=""
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};
export default AvatarPost;
