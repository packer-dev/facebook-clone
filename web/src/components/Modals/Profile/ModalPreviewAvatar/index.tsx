import React, { useContext } from "react";
import ModalWrapper from "../../ModalWrapper";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import ButtonComponent from "@/components/ButtonComponent";
import { updateProfileUser } from "@/apis/userAPIs";
import { User } from "@/interfaces/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, getCommon, RootState } from "@/reducers";
import { CommonDataProps, updateDataCommon } from "@/reducers/common";
import { login } from "@/reducers/user";

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
    <ModalWrapper
      className="animate__rubberBand shadow-sm border-t border-b border-solid border-gray-200 bg-white absolute  
        z-50 top-1/2 left-1/2 dark:bg-dark-second rounded-lg transform -translate-x-1/2 -translate-y-1/2 py-2 w-11/12 sm:w-10/12 md:w-2/3 
        lg:w-2/3 xl:w-1/2 shadow-lv1 dark:border-dark-third dark:bg-dark-third"
      title={"Update Profile Picture"}
    >
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
          type={"range"}
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
          <ButtonComponent
            handleClick={() => modalsDispatch(modalsAction.closeModal())}
            className=" rounded-md px-8 py-2 font-semibold  text-white bg-black bg-opacity-20"
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent
            handleClick={handleUpdateAvatar}
            className=" rounded-md px-10 py-2 font-semibold bg-main text-white"
          >
            Save Changes
          </ButtonComponent>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalPreviewAvatar;
