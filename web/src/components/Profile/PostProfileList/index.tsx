import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import ItemPost from "../../ItemPost";
import LoadingPost from "../../ItemPost/LoadingPost";
import { RootState } from "@/reducers";

export default function PostProfileList() {
  //
  const {
    posts: { list },
    user,
  } = useSelector<RootState, RootState>((state) => state);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {
    userProfilesDispatch,
    userProfilesAction,
    userProfile: { userProfile },
  } = useContext(UserProfileContext);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      dispatch({
        type: "UPDATE_DATA_POST_LIST",
        key: "list",
        value: [],
      });
      const result = { data: [] };
      if (unmounted) return;
      userProfilesDispatch(
        userProfilesAction.updateData("postList", result.data)
      );
      dispatch({
        type: "UPDATE_DATA_POST_LIST",
        key: "list",
        value: result.data,
      });
      dispatch({
        type: "UPDATE_DATA_POST_LIST",
        key: "add",
        value: userProfile.id === user.id,
      });
      setLoading(false);
    };
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.id]);
  //
  return (
    <div className="w-full my-2">
      {list.length > 0 ? (
        list.map((postDetail) => (
          <ItemPost
            key={postDetail.post.id}
            postDetail={postDetail}
            setPostDetails={(list) => {}}
          />
        ))
      ) : (
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
