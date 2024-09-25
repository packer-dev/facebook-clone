import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
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

const HomePostList = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const headers = useSelector<RootState, any>(getHeaders);
  const { homePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //
    const fetch = async () => {
      const result = await getPostByIdUser(user.id, "false");
      dispatch(
        updateDataCommon({
          key: "homePosts",
          value: result?.list || [],
        })
      );
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user]);
  //
  return (
    <>
      {homePosts?.map((postDetail) => (
        <ItemPost postDetail={postDetail} key={postDetail.post.id} />
      ))}
      {!homePosts.length && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
    </>
  );
};

export default HomePostList;
