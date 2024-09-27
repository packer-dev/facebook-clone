import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "@/components/ItemPost";
import LoadingPost from "@/components/ItemPost/LoadingPost";
import {
  AppDispatch,
  RootState,
  getCommon,
  getHeaders,
  getUser,
} from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

const HomePostList = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const headers = useSelector<RootState, any>(getHeaders);
  const { homePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const dispatch = useDispatch<AppDispatch>();
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 5;
  useEffect(() => {
    //
    const fetch = async () => {
      setLoading(true);
      const result = await getPostByIdUser(user.id, "false", offset, limit);
      dispatch(
        updateDataCommon({
          key: "homePosts",
          value: result?.list || [],
        })
      );
      setTotal(result?.total || 0);
      setLoading(false);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user, offset]);
  //
  return (
    <>
      {homePosts?.map((postDetail) => (
        <ItemPost postDetail={postDetail} key={postDetail.post.id} />
      ))}
      {!loading && !homePosts?.length && (
        <p className="my-4 text-center text-gray-600 font-semibold dark:text-gray-300">
          There are no posts yet.
        </p>
      )}
      {!homePosts.length && loading && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
      {!loading && total < limit * offset && (
        <Button onClick={() => setOffset(offset + 1)} loading={loading}>
          View more
        </Button>
      )}
    </>
  );
};

export default HomePostList;
