import * as React from "react";
import { Link } from "react-router-dom";
import ContentComment from "./ContentComment";
import moment from "moment";
import { CommentDTO } from "@/interfaces/Comment";
import { PostDTO } from "@/interfaces/Post";
import EditOrDeleteComment from "./EditOrDeleteComment";

type ItemCommentProps = {
  commentPost: CommentDTO;
  postDetail: PostDTO;
  setReply: Function;
  parent?: string;
};

const ItemComment = ({
  commentPost,
  postDetail,
  setReply,
  parent,
}: ItemCommentProps) => {
  //
  const refFeelComment = React.useRef<HTMLDivElement>(null);
  const refText = React.useRef<HTMLDivElement>(null);
  const refContentComment = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if (
      !refFeelComment.current ||
      !refText.current ||
      !refContentComment.current
    )
      return;
    if (commentPost.item.content.type === 1) {
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
    <div
      className={`w-full p-2 bg-white dark:bg-dark-second flex my-0.5 ${
        commentPost.item.loading ? "opacity-50" : ""
      }`}
    >
      <Link to="">
        <img
          className="w-12 h-12 p-0.5 mt-2 object-cover rounded-full"
          src={commentPost.item.user.avatar}
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
            commentPost.item.content.type !== 2 ? "bg-gray-100" : ""
          } ml-1 relative rounded-lg w-11/12`}
        >
          <p>
            <Link to="" className="font-semibold dark:text-white">
              {commentPost.item.user.name}
            </Link>
          </p>
          {commentPost.item.content.type !== 2 && (
            <p className="dark:text-gray-300 break-words w-full">
              {commentPost.item.content.type === 3
                ? JSON.parse(commentPost.item.content.text)?.text
                : commentPost.item.content.text}
            </p>
          )}
        </div>
        <div className="my-0.5">
          <ContentComment ref={refContentComment} commentPost={commentPost} />
        </div>
        {!commentPost.item.loading && (
          <ul className="flex pl-2 items-center font-semibold text-gray-800 dark:text-white text-xs">
            <li
              aria-hidden
              onClick={() => setReply(true)}
              className="pr-2 cursor-pointer"
            >
              Reply
            </li>
            <li className="pr-2 cursor-pointer">
              {moment(commentPost.item.time_created).fromNow(true)}
            </li>
          </ul>
        )}
        {commentPost.item.loading && (
          <i className="fas fa-circle-notch text-xs text-gray-500 mx-9 fa-spin" />
        )}
        <EditOrDeleteComment
          commentPost={commentPost}
          ref={refText}
          postId={postDetail.post.id}
          parent={parent}
        />
      </div>
    </div>
  );
};

export default ItemComment;
