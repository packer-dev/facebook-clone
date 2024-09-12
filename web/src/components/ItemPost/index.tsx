import React, { memo, useEffect, useState } from "react";
import TypeCommentInput from "../Comment/TypeCommentInput";
import ItemPostTop from "./ItemPostTop/ItemPostTop";
import ContentPost from "./ContentPost";
import LoadingPost from "./LoadingPost";
// import { useSelector } from "react-redux";
// import ItemCommentPostMain from "../Comment/ItemCommentPostMain";
// import MoreThanComment from "../Comment/MoreThanComment";
// import { RootState } from "@/reducers";
import { PostDTO } from "@/interfaces/Post";
import FooterItemPost from "./FooterItemPost";
// import { CommentDTO } from "@/interfaces/Comment";

type ItemPostProps = {
  postDetail: PostDTO;
  margin?: boolean;
  hideContent?: boolean;
  setPostDetails?: (list: PostDTO[]) => void;
};
const ItemPost = (props: ItemPostProps) => {
  //
  const [postDetail, setPostDetail] = useState(props.postDetail);
  const [dataComment, setDataComment] = useState({
    value: null,
    content: "",
    type: 0,
  });
  useEffect(() => {
    setPostDetail(props.postDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.postDetail]);
  //
  return postDetail ? (
    <div
      className={`w-full bg-white dark:bg-dark-second shadow-lv1 ${
        props.margin ? "my-4" : ""
      } 
        py-4 px-2 rounded-lg mb-3`}
    >
      <ItemPostTop postDetail={postDetail} />
      {/* {postDetail.post.content && !postDetail.post.backgroundPost && ( */}
      {postDetail.post.content && (
        <p
          className="my-1 dark:text-gray-300 w-full p-1 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: postDetail.post.content.text,
          }}
        ></p>
      )}
      {!props.hideContent && postDetail.medias.length > 0 && (
        <ContentPost postDetail={props.postDetail} />
      )}
      <div className="w-full mb-4 mx-0">
        <FooterItemPost postDetail={postDetail} setPostDetail={setPostDetail} />
      </div>
      {/* <div className="w-full">
        {postDetail
          ? postDetail.commentDetailList.map((commentDetail) => (
              <ItemCommentPostMain
                key={commentDetail.commentPostLevel1.commentPost.id}
                commentDetail={commentDetail}
                postDetail={postDetail}
                setPostDetail={setPostDetail}
              />
            ))
          : ""}
      </div> */}
      {/* {postDetail.commentLevel1Length - postDetail.commentDetailList.length >
        0 && (
        <MoreThanComment
          postDetail={postDetail}
          setPostDetail={setPostDetail}
          index={index}
          setIndex={setIndex}
        />
      )} */}
      <TypeCommentInput
        dataComment={dataComment}
        setDataComment={setDataComment}
        postDetail={postDetail}
        setPostDetail={setPostDetail}
      />
    </div>
  ) : (
    <LoadingPost />
  );
};

export default memo(ItemPost);
