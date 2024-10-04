import React, { memo, useContext, useEffect, useState } from "react";
import TypeCommentInput from "../Comment/TypeCommentInput";
import ItemPostTop from "./ItemPostTop/ItemPostTop";
import ContentPost from "./ContentPost";
import LoadingPost from "./LoadingPost";
import { PostDTO } from "@/interfaces/Post";
import FooterItemPost from "./FooterItemPost";
import { ItemPostContext, ItemPostProvider } from "@/contexts/ItemPostContext";
import ItemCommentPostMain from "../Comment/ItemCommentPostMain";
import { getCommentByPost } from "@/apis/commentAPIs";
import useListeningComment from "@/hooks/realtime/useListeningComment";
import useFeelPost from "@/hooks/realtime/useFeelPost";
import SharePost from "./SharePost";

type ItemPostProps = {
  postDetail: PostDTO;
  margin?: boolean;
  hideContent?: boolean;
  hideToolbar?: boolean;
  hideComment?: boolean;
};
const ItemPost = ({
  postDetail: postDetailProps,
  margin,
  hideContent,
  hideToolbar,
  hideComment,
}: ItemPostProps) => {
  //
  const {
    state: { postDetail },
    updateData,
  } = useContext(ItemPostContext);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 5;
  const handleViewMore = () => {
    setOffset(offset + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!postDetail) return;
      setLoading(true);
      const result = await getCommentByPost(postDetail.post?.id, offset, limit);
      updateData("postDetail", {
        ...postDetail,
        comments: {
          ...postDetail.comments,
          list: [...postDetail.comments.list, ...(result.list || [])],
          total: result.total,
        },
      });
      setLoading(false);
    };
    offset && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  useEffect(() => {
    updateData("postDetail", postDetailProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postDetailProps]);
  useListeningComment(postDetail?.post?.id);
  useFeelPost(postDetail?.post?.id);
  //
  return postDetail ? (
    <div
      className={`w-full bg-white dark:bg-dark-second shadow-lv1 ${
        margin ? "my-4" : ""
      } 
        py-4 px-2 rounded-lg mb-3`}
    >
      <ItemPostTop postDetail={postDetail} />
      {postDetail.post.content && !postDetail.post.background && (
        <p
          className="my-1 dark:text-gray-300 w-full p-1 whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: postDetail.post.content.text,
          }}
        />
      )}
      {!hideContent && postDetail?.post?.type === 4 ? (
        <SharePost postDetail={postDetail} />
      ) : (
        <ContentPost postDetail={postDetail} />
      )}
      {!hideToolbar && (
        <div className="w-full mb-4 mx-0">
          <FooterItemPost postDetail={postDetail} />
        </div>
      )}
      {!hideComment && (
        <div>
          <TypeCommentInput />
          {postDetail?.comments?.list?.map?.((comment) => (
            <ItemCommentPostMain
              key={comment.item.id}
              commentDetail={comment}
              postDetail={postDetail}
            />
          ))}
          {!!postDetail.comments.total &&
            limit * (offset || 1) < postDetail.comments.total && (
              <p
                aria-hidden
                onClick={handleViewMore}
                className="text-main text-sm font-semibold cursor-pointer"
              >
                {loading ? "Loading..." : "View more"}
              </p>
            )}
        </div>
      )}
    </div>
  ) : (
    <LoadingPost />
  );
};

const ItemPostWrapper = (props: ItemPostProps) => {
  return (
    <ItemPostProvider>
      <ItemPost {...props} />
    </ItemPostProvider>
  );
};

export default memo(ItemPostWrapper);
