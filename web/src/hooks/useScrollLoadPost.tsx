import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostDTO } from "@/interfaces/Post";
import { RootState } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";

const useScrollLoadPost = () => {
  const { user, headers } = useSelector<RootState, RootState>((state) => state);
  const [postDetails, setPostDetais] = useState<PostDTO[]>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = await getPostByIdUser(user?.id, "false");
      if (unmounted) return;
      setPostDetais([...postDetails, ...result]);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user]);
  return { index, postDetails, setIndex };
};

export default useScrollLoadPost;
