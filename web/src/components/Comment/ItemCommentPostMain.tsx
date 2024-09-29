import * as React from "react";
import ItemComment from "./ItemComment";
import TypeCommentInput from "./TypeCommentInput";
import { CommentDTO } from "@/interfaces/Comment";
import { PostDTO } from "@/interfaces/Post";

const ItemCommentPostMain = ({
  commentDetail,
  postDetail,
}: {
  commentDetail: CommentDTO;
  postDetail: PostDTO;
}) => {
  //
  const [reply, setReply] = React.useState(false);
  //
  return (
    <>
      <ItemComment
        setReply={setReply}
        commentPost={commentDetail}
        postDetail={postDetail}
        key={commentDetail.item.id}
      />
      <div className="w-11/12 ml-auto">
        {reply && <TypeCommentInput parent={commentDetail.item.id} />}
        {commentDetail.child.map((commentPost) => (
          <ItemComment
            setReply={setReply}
            commentPost={{ item: commentPost, child: [] } as CommentDTO}
            postDetail={postDetail}
            key={commentPost.id}
            parent={commentDetail.item.id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemCommentPostMain;
