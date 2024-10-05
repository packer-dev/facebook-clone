import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getCommon, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { updateProfileUser } from "@/apis/userAPIs";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { login } from "@/reducers/user";
import { Button } from "@/components/ui/button";

type UpdateCoverImageProps = {
  setCover: Function;
  cover: File;
  setLoadingCover: Function;
  loadingCover: boolean;
};

const UpdateCoverImage = ({
  setCover,
  cover,
  setLoadingCover,
  loadingCover,
}: UpdateCoverImageProps) => {
  //
  const { profilePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
  const handleUpdateCoverImage = async () => {
    setLoadingCover(true);
    const formData = new FormData();
    formData.append("file", cover);
    formData.append("folder", "Covers");
    formData.append("user_id", user?.id);
    formData.append("is_cover", "True");
    const res = await updateProfileUser(formData);
    let newUser = {
      ...user,
      cover: res.url,
    };
    dispatch(
      updateDataCommon({
        key: "profilePosts",
        value: [res.data_post, ...profilePosts],
      })
    );
    dispatch(login(newUser));
    setLoadingCover(false);
    setCover(res.url);
  };
  //
  return (
    <div className="w-full p-4 flex bg-black bg-opacity-50 fixed top-16 z-50 justify-between items-center">
      <p className="text-white flex items-center text-sm">
        <i className="bx bx-globe text-2xl mr-2" />
        <span>Your cover photo is publicly visible.</span>
      </p>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setCover(user.cover)}
          className="rounded-md p-1.5 md:px-8 md:py-2 font-semibold text-white bg-black bg-opacity-20"
        >
          Cancel
        </Button>
        <Button
          onClick={handleUpdateCoverImage}
          className="rounded-md md:px-10 md:py-2 p-1.5 font-semibold bg-main text-white"
        >
          {loadingCover ? (
            <i className="bx bx-shape-circle fa-spin" />
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </div>
  );
};

export default UpdateCoverImage;
