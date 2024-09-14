import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { AppDispatch, RootState } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { updateDataPostList } from "@/reducers/posts";
import { PostDTO } from "@/interfaces/Post";
import { updateDataCommon } from "@/reducers/common";

export default forwardRef(function HomePostList() {
  //
  const {
    user,
    headers,
    common: { homePosts },
  } = useSelector<RootState, RootState>((state) => state);
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
        <ItemPost
          postDetail={postDetail}
          key={postDetail.post.id}
          setPostDetails={(list: PostDTO[]) => {
            dispatch(updateDataPostList({ key: "list", value: list }));
          }}
        />
      ))}
      {!homePosts.length && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
    </>
  );
});
