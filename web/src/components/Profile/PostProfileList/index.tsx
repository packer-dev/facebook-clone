import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { AppDispatch, RootState, getCommon } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";

const PostProfileList = () => {
  const { profilePosts } = useSelector<RootState, CommonDataProps>(getCommon);
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
  }, [userProfile]);
  //
  return (
    <div className="w-full my-2">
      {profilePosts.length > 0
        ? profilePosts.map((postDetail) => (
            <ItemPost key={postDetail.post.id} postDetail={postDetail} />
          ))
        : !loading && (
            <p className="my-4 text-center text-gray-600 font-semibold dark:text-gray-300">
              There are no posts yet.
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
};

export default PostProfileList;
