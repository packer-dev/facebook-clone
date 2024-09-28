import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "@/components/ItemPost";
import LoadingPost from "@/components/ItemPost/LoadingPost";
import { AppDispatch, RootState, getCommon, getHeaders } from "@/reducers";
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
  const headers = useSelector<RootState, any>(getHeaders);
  const { homePosts, profilePosts } = useSelector<RootState, CommonDataProps>(
    getCommon
  );
  const dispatch = useDispatch<AppDispatch>();
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 5;
  useEffect(() => {
    //
    const fetch = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user?.id, offset]);
  //
  return (
    <>
      {(mode === "home" ? homePosts : profilePosts)?.map((postDetail) => (
        <ItemPost postDetail={postDetail} key={postDetail.post.id} />
      ))}
      {!loading && !homePosts?.length && (
        <p className="my-4 text-center text-gray-600 font-semibold dark:text-gray-300">
          There are no posts yet.
        </p>
      )}
      {loading && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
      {!loading && limit * offset < total && (
        <Button
          className="w-full"
          onClick={() => setOffset(offset + 1)}
          loading={loading}
        >
          View more
        </Button>
      )}
      <div className="h-4 w-full" />
    </>
  );
};

export default PostListContainer;
