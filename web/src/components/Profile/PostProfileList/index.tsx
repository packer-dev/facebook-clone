import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { AppDispatch, RootState } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { updateDataCommon } from "@/reducers/common";

export default function PostProfileList() {
  //
  const {
    common: { profilePosts },
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
        updateDataCommon({
          key: "profilePosts",
          value: [],
        })
      );
      const result = await getPostByIdUser(userProfile?.id, "true");
      dispatch(
        updateDataCommon({
          key: "profilePosts",
          value: result?.list || [],
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
      {profilePosts.length > 0
        ? profilePosts.map((postDetail) => (
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
