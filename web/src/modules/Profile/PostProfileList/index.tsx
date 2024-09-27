import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ItemPost from "@/components/ItemPost";
import LoadingPost from "@/components/ItemPost/LoadingPost";
import { AppDispatch, RootState, getCommon } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { Button } from "@/components/ui/button";

const PostProfileList = () => {
  const { profilePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const limit = 20;
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
      setTotal(result?.total || 0);
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
      {loading && (
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
    </div>
  );
};

export default PostProfileList;
