import * as React from "react";
import MoreThanComment from "./MoreThanComment";
import ItemComment from "./ItemComent";
import TypeCommentInput from "./TypeCommentInput";

export default function ItemCommentPostMain(props: any) {
  //
  const { commentDetail, postDetail, setPostDetail } = props;
  const [dataComment, setDataComment] = React.useState({
    value: null,
    content: "",
    type: 0,
  });
  const [reply, setReply] = React.useState();
  const [index, setIndex] = React.useState(0);
  //
  return (
    <>
      <ItemComment
        setReply={setReply}
        commentPost={commentDetail.commentPostLevel1}
        key={commentDetail.commentPostLevel1.id}
        setPostDetail={setPostDetail}
        postDetail={postDetail}
        level={1}
      />
      <div className="w-11/12 ml-auto">
        {reply && (
          <TypeCommentInput
            dataComment={dataComment}
            setDataComment={setDataComment}
            postDetail={postDetail}
            setPostDetail={setPostDetail}
            reply={true}
            commentDetail={commentDetail}
          />
        )}
        {commentDetail.commentPostLevel2List.map((commentPost) => (
          <ItemComment
            setReply={setReply}
            commentPost={commentPost}
            key={commentPost.commentPost.id}
            setPostDetail={setPostDetail}
            postDetail={postDetail}
            level={2}
          />
        ))}
        {commentDetail.commentLevel2Length -
          commentDetail.commentPostLevel2List.length >
          0 && (
          <MoreThanComment
            postDetail={postDetail}
            setPostDetail={setPostDetail}
            index={index}
            setIndex={setIndex}
            reply={true}
            idComment={commentDetail.commentPostLevel1.commentPost.id}
          />
        )}
      </div>
    </>
  );
}
