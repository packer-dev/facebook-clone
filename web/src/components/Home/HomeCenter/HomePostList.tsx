import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { AppDispatch, RootState } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { updateDataPostList } from "@/reducers/posts";
import { PostDTO } from "@/interfaces/Post";

export default forwardRef(function HomePostList() {
  //
  const {
    user,
    headers,
    posts: { list },
  } = useSelector<RootState, RootState>((state) => state);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //
    const fetch = async () => {
      dispatch(
        updateDataPostList({
          key: "list",
          value: [],
        })
      );
      const result = await getPostByIdUser(user.id, "false");
      dispatch(
        updateDataPostList({
          key: "list",
          value: result?.list || [],
        })
      );
      dispatch(
        updateDataPostList({
          key: "add",
          value: true,
        })
      );
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user]);
  //
  return (
    <>
      {list?.map((postDetail) => (
        <ItemPost
          postDetail={postDetail}
          key={postDetail.post.id}
          setPostDetails={(list: PostDTO[]) => {
            dispatch(updateDataPostList({ key: "list", value: list }));
          }}
        />
      ))}
      {!list.length && (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      )}
    </>
  );
});
