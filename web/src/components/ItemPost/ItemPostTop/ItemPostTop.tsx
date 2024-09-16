import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { PAGE_PROFILE } from "@/constants/Config";
import PostTopRight from "./PostTopRight";
import InfoPostHeader from "@/components/Modals/ModalPost/TopWritePostModal/InfoPostHeader";
import { RootState, getUser } from "@/reducers";
import { PostDTO } from "@/interfaces/Post";
import { User } from "@/interfaces/User";

type ItemPostTopProps = {
  postDetail: PostDTO;
};

const ItemPostTop = ({ postDetail }: ItemPostTopProps) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const info = (() => {
    if (postDetail.post.type === 2) return `updated avatar.`;
    if (postDetail.post.type === 3) return "updated cover.";
    return (
      <InfoPostHeader
        post={postDetail.post}
        user={postDetail.post.user}
        tagList={[]}
        hideName={true}
        tagMain={true}
        itemPost={true}
      />
    );
  })();
  //
  return (
    <div className="w-full flex mb-2 relative">
      <div className="w-12 h-12 relative">
        <Link to={`${PAGE_PROFILE}/${postDetail.post.user.id}`}>
          <img
            className="w-12 h-12 rounded-full object-cover border-4 border-solid border-gray-200"
            alt=""
            src={postDetail.post.user.avatar}
          />
        </Link>
        <span className="w-3 h-3 rounded-full absolute bottom-0 right-0 bg-green-500"></span>
      </div>
      <div
        className="relative ml-3 pl-3 lg:-ml-1"
        style={{ width: "calc(100% - 56px)" }}
      >
        <p className=" dark:text-white pr-5">
          <Link
            to={`${PAGE_PROFILE}/${postDetail.post.user.id}`}
            className="font-semibold mr-2"
          >
            {`${postDetail.post.user.name}`}
          </Link>
          {info}
        </p>
        <div className="w-full flex">
          <div className="text-xs pt-0.5 pr-2">
            <ul className="flex items-center dark:text-gray-300 text-sm text-gray-600">
              <li className="">
                <Link to="" className="mr-1">
                  {moment(postDetail.post.time_created).fromNow(true)}
                </Link>
              </li>
              <li className="">
                <span>·</span>
                <i className="cursor-pointer ml-1 text-sm fas fa-globe-europe"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PostTopRight user={user} post={postDetail.post} />
    </div>
  );
};

export default ItemPostTop;
