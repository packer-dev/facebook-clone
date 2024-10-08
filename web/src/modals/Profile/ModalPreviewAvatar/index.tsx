import React, { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { updateProfileUser } from "@/apis/userAPIs";
import { User } from "@/interfaces/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getCommon, RootState } from "@/reducers";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { login } from "@/reducers/user";
import { Button } from "@/components/ui/button";
import ModalWrapper from "@/modals/ModalWrapper";

type ModalPreviewAvatarProps = {
  image: File;
  user: User;
};

const ModalPreviewAvatar = ({ image, user }: ModalPreviewAvatarProps) => {
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const dispatch = useDispatch<AppDispatch>();
  const { profilePosts } = useSelector<RootState, CommonDataProps>(getCommon);
  const handleUpdateAvatar = async () => {
    modalsDispatch(modalsAction.loadingModal(true));
    const formData = new FormData();
    formData.append("file", image);
    formData.append("folder", "Avatars");
    formData.append("user_id", user?.id);
    formData.append("is_cover", "False");
    const res = await updateProfileUser(formData);
    let newUser = {
      ...user,
      avatar: res.url,
    };
    dispatch(
      updateDataCommon({
        key: "profilePosts",
        value: [res.data_post, ...profilePosts],
      })
    );
    dispatch(login(newUser));
    modalsDispatch(modalsAction.closeModal());
    modalsDispatch(modalsAction.loadingModal(false));
  };
  return (
    <ModalWrapper title="Update Profile Picture">
      <div className="w-full mx-auto my-5">
        <div className="mx-auto relative w-full flex justify-center max-h-[450px] min-h-[320px]">
          <img
            src={image?.name && URL.createObjectURL(image)}
            alt=""
            className="h-full"
            style={{
              maxHeight: 450,
              minHeight: 320,
              minWidth: 320,
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-around w-3/4 mx-auto gap-1">
        <span className="bx bx-minus text-2xl" />
        <input
          type="range"
          min={0}
          max={100}
          className="flex-1"
          value={0}
          onChange={(e) => ""}
        />
        <span className="bx bx-plus text-2xl" />
      </div>
      <p className="text-gray-600 py-2 pl-5 border-b-2 border-solid border-gray-200 font-semibold flex items-center">
        <i className="bx bx-globe text-2xl mr-2" />
        <span>Your cover image is publicly visible.</span>
      </p>
      <div className="w-full py-2 mt-2 flex items-center px-4 justify-end ">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => modalsDispatch(modalsAction.closeModal())}
            className=" rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateAvatar}
            className=" rounded-md px-10 py-2 font-semibold bg-main text-white"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalPreviewAvatar;
