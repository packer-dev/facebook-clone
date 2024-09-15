import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { AppDispatch, RootState } from "@/reducers";
import { updateDataPostList } from "@/reducers/posts";
import { getPostByIdUser } from "@/apis/postAPIs";

export default function PostProfileList() {
  //
  const {
    posts: { list },
    user,
  } = useSelector<RootState, RootState>((state) => state);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const {
    state: { userProfile },
  } = useContext(UserProfileContext);
  useEffect(() => {
    //
    const fetchData = async () => {
      setLoading(true);
      dispatch(
        updateDataPostList({
          key: "list",
          value: [],
        })
      );
      const result = await getPostByIdUser(userProfile?.id, "true");
      dispatch(
        updateDataPostList({
          key: "list",
          value: result?.list || [],
        })
      );
      dispatch(
        updateDataPostList({
          key: "add",
          value: userProfile.id === user.id,
        })
      );
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.id]);
  //
  return (
    <div className="w-full my-2">
      {list.length > 0
        ? list.map((postDetail) => (
            <ItemPost
              key={postDetail.post.id}
              postDetail={postDetail}
              setPostDetails={(list) => {}}
            />
          ))
        : !loading && (
            <p className="my-4 text-center text-gray-600 font-semibold dark:text-gray-300">
              Không có bất kì bài viết nào.
            </p>
          )}
      {loading ? (
        <>
          <LoadingPost />
          <LoadingPost />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
