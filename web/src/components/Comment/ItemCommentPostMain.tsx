import * as React from "react";
import ItemComment from "./ItemComent";
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
        commentPost={commentDetail.item}
        key={commentDetail.item.id}
        postDetail={postDetail}
        level={1}
      />
      <div className="w-11/12 ml-auto">
        {reply && <TypeCommentInput />}
        {commentDetail.child.map((commentPost) => (
          <ItemComment
            setReply={setReply}
            commentPost={commentPost}
            key={commentPost.id}
            postDetail={postDetail}
            level={2}
          />
        ))}
      </div>
    </>
  );
};

export default ItemCommentPostMain;
