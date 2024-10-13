import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "@/modules/ItemPost";
import LoadingPost from "@/modules/ItemPost/LoadingPost";
import { AppDispatch, RootState, getCommon } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

type PostListContainerProps = {
  mode: "home" | "profile";
  user: User;
};

const PostListContainer = ({ mode, user }: PostListContainerProps) => {
  //
  const { homePosts, profilePosts, loadingPost, reloadPost } = useSelector<
    RootState,
    CommonDataProps
  >(getCommon);
  const dispatch = useDispatch<AppDispatch>();
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const limit = 5;
  useEffect(() => {
    //
    const fetch = async () => {
      dispatch(updateDataCommon({ key: "loadingPost", value: true }));
      const result = await getPostByIdUser(
        user.id,
        mode === "home" ? "false" : "true",
        offset,
        limit
      );
      dispatch(
        updateDataCommon({
          key: mode === "home" ? "homePosts" : "profilePosts",
          value:
            mode === "home"
              ? [...homePosts, ...(result?.list || [])]
              : [...profilePosts, ...(result?.list || [])],
        })
      );
      setTotal(result?.total || 0);
      dispatch(updateDataCommon({ key: "loadingPost", value: false }));
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, offset, reloadPost]);
  //
  return (
    <>
      {!loadingPost &&
        (mode === "home" ? homePosts : profilePosts)?.map(
          (postDetail, index) => (
            <ItemPost
              postDetail={postDetail}
              key={postDetail.post.id + index}
            />
          )
        )}
      {!loadingPost &&
        !(mode === "home" ? homePosts : profilePosts)?.length && (
          <p className="my-4 text-center text-gray-600 font-semibold dark:text-gray-300">
            There are no posts yet.
          </p>
        )}
      {loadingPost && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
      {!loadingPost && limit * (offset || 1) < total ? (
        <Button
          className="w-full"
          onClick={() => setOffset(offset + 1)}
          loading={loadingPost}
        >
          View more
        </Button>
      ) : (
        total > 0 && <p className="font-semibold py-4 text-center">End.</p>
      )}
      <div className="h-4 w-full" />
    </>
  );
};

export default PostListContainer;
