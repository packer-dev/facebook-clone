import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostDTO } from "@/interfaces/Post";
import { RootState, getHeaders, getUser } from "@/reducers";
import { getPostByIdUser } from "@/apis/postAPIs";
import { User } from "@/interfaces/User";

const useScrollLoadPost = () => {
  // Correctly typed selectors
  const user = useSelector<RootState, User | null>(getUser);
  const headers = useSelector<RootState, any>(getHeaders); // Replace `any` with a specific type if possible

  // Corrected typo
  const [postDetails, setPostDetails] = useState<PostDTO[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Ensure user.id exists and handle possible null values
    const fetch = async () => {
      if (user?.id) {
        const result = await getPostByIdUser(user.id, "false");
        setPostDetails((prevDetails) => [...prevDetails, ...result]);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headers, user]); // Depend on headers and user; also consider including postDetails if needed

  return { index, postDetails, setIndex };
};

export default useScrollLoadPost;
