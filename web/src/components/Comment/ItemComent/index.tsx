import * as React from "react";
import { Link } from "react-router-dom";
import ContentComment from "./ContentComment";
import moment from "moment";
import { useSelector } from "react-redux";
import EditOrDeleteComment from "./EditOrDeleteComment";
import { RootState, getUser } from "@/reducers";

import Feels from "@/components/ItemPost/Feels";
import { User } from "@/interfaces/User";

const ItemComment = ({
  commentPost,
  setReply,
  setPostDetail,
  postDetail,
  level,
}) => {
  //
  const user = useSelector<RootState, User>(getUser);
  const [feel, setFeel] = React.useState<any>(null);
  const refFeelComment = React.useRef<HTMLDivElement>(null);
  const refText = React.useRef<HTMLDivElement>(null);
  const refContentComment = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    //
    const fetch = async () => {
      setFeel(null);
    };
    if (!commentPost.loading) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (
      !refFeelComment.current ||
      !refText.current ||
      !refContentComment.current
    )
      return;
    if (commentPost.commentPost.typeComment === 0) {
      if (refText.current) {
        refFeelComment.current.style.left = refText.current.offsetWidth + "px";
      }
    } else {
      refFeelComment.current.style.left =
        refContentComment.current.offsetWidth + "px";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refFeelComment, commentPost, refText, refContentComment]);
  //
  return (
    <div className="w-full mx-0 flex my-2">
      <Link to="">
        <img
          className="w-12 h-12 p-0.5 mt-2 object-cover rounded-full"
          src={commentPost.commentPost.userCommentPost.avatar}
          alt=""
          loading="lazy"
        />
      </Link>
      <div
        className="relative main-comment item__hover"
        style={{ width: "calc(100% - 54px)" }}
      >
        <div
          ref={refText}
          className={`comment-per dark:bg-dark-third w-max relative p-2 ${
            commentPost.commentPost.typeComment !== 2 ? "bg-gray-100" : ""
          } ml-1 relative rounded-lg`}
          style={{ maxWidth: "91%" }}
        >
          <p>
            <Link to="" className="font-semibold dark:text-white">
              {`${commentPost.commentPost.userCommentPost.firstName} ${commentPost.commentPost.userCommentPost.lastName}`}
            </Link>
          </p>
          {!commentPost.loading ? (
            <>
              {commentPost.commentPost.content && (
                <p className="dark:text-gray-300">
                  {commentPost.commentPost.content}
                </p>
              )}
            </>
          ) : (
            <i className="fas fa-circle-notch text-xs text-gray-500 mx-9 fa-spin"></i>
          )}
        </div>
        {!commentPost.loading && (
          <div className="my-0.5 ">
            <ContentComment ref={refContentComment} commentPost={commentPost} />
          </div>
        )}
        {!commentPost.loading && (
          <ul className="flex pl-2 items-center font-semibold text-gray-800 dark:text-white text-xs">
            <li className="relative flex items-center item__hover pr-2 cursor-pointer ">
              <div
                aria-hidden
                onClick={async () => {
                  if (feel) {
                    setFeel(null);
                  }
                }}
                className="flex items-center"
              >
                {feel ? (
                  <>
                    <img
                      src={JSON.parse(feel.content).image}
                      alt=""
                      className="w-3.5 mr-1.5 h-3.5 rounded-full object-cover"
                    />
                    <span
                      className=""
                      style={{ color: JSON.parse(feel.content).color }}
                    >
                      {JSON.parse(feel.content).label}
                    </span>
                  </>
                ) : (
                  <span className="">Thích</span>
                )}
              </div>
              <Feels />
            </li>
            <li
              aria-hidden
              onClick={() => setReply(true)}
              className="pr-2 cursor-pointer"
            >
              Reply
            </li>
            <li className="pr-2 cursor-pointer">
              {moment(commentPost.commentPost.timeCreated).fromNow(true)}
            </li>
          </ul>
        )}
        {commentPost.feelCommentList.length > 0 && (
          <div
            ref={refFeelComment}
            className="absolute bottom-5 pl-1 bg-white text-sm text-gray-500 flex items-center px-2 p-0.5 rounded-full"
          >
            {commentPost.feelCommentList.map((item) => (
              <img
                key={item.id}
                src={JSON.parse(item.content).image}
                alt=""
                className="w-3.5 -mr-1 h-3.5 rounded-full object-cover"
              />
            ))}
            &nbsp;{" " + commentPost.feelCommentList.length}
          </div>
        )}
        <EditOrDeleteComment
          user={user}
          commentPost={commentPost.commentPost}
          level={level}
          ref={refText}
          setPostDetail={setPostDetail}
          postDetail={postDetail}
        />
      </div>
    </div>
  );
};

export default ItemComment;
