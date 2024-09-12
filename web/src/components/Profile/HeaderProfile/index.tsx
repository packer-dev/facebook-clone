import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import InfoProfile from "./InfoProfile";
import UpdateCoverImage from "./UpdateCoverImage";
import { RootState } from "@/reducers";

export default memo(function HeaderProfile() {
  //
  const { user } = useSelector<RootState, RootState>((state) => state);
  const { userProfile, userProfilesDispatch, userProfilesAction } =
    useContext(UserProfileContext);
  const [cover, setCover] = useState(userProfile.userProfile.cover);
  const refLoadingCover = useRef();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  useEffect(() => {
    setCover(userProfile.userProfile.cover);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.userProfile, setCover]);
  //
  return (
    <>
      {cover?.name && (
        <UpdateCoverImage
          setCover={setCover}
          cover={cover}
          user={userProfile.userProfile}
          refLoadingCover={refLoadingCover}
        />
      )}
      <div className="dark:bg-dark-second pt-10 w-full md:w-4/5 lg:w-3/4 md:mx-auto xl:w-63%">
        <div className="w-full relative">
          <div
            className=" relative h-60 lg:h-96 mx-auto"
            style={{ width: "110%", left: "-4.5%" }}
          >
            <img
              className="w-full h-60 bg-white dark:bg-dark-third object-cover lg:h-96 rounded-lg"
              src={cover?.name ? URL.createObjectURL(cover) : cover}
              alt=""
            />
            {user.id === userProfile.userProfile.id && (
              <>
                <div
                  ref={refLoadingCover}
                  className="w-full h-60 lg:h-96 absolute top-0 left-0 z-20 bg-opacity-50 bg-black hidden justify-center items-center"
                >
                  <i className="fas fa-spinner fa-pulse text-5xl text-main"></i>
                </div>
                <div className="z-40 p-1.5 bg-gray-50 absolute text-center rounded-lg bottom-3 right-10 md:right-3">
                  <input
                    type={"file"}
                    className="hidden"
                    id="changeCover"
                    onChange={(event) => {
                      if (event.target.files.length > 0) {
                        setCover(event.target.files[0]);
                      }
                    }}
                  />
                  <label htmlFor="changeCover" className="flex items-center">
                    <i className="fas fa-camera text-2xl md:pl-1"></i>
                    <span className="hidden lg:inline pt-1 lg:ml-2 text-sm font-semibold">
                      Chỉnh sửa ảnh bìa
                    </span>
                  </label>
                </div>
              </>
            )}
          </div>
          <div className="w-full relative z-10 flex pb-2 border-b-6 border-solid border-gray-200">
            <div className="-mt-9 relative" style={{ width: 180, height: 180 }}>
              <img
                className="w-full h-full rounded-full border-4 border-solid border-white object-cover"
                src={userProfile.userProfile.avatar}
                alt=""
              />
              {user.id === userProfile.userProfile.id && (
                <div
                  className="text-2xl absolute bottom-2 right-2 z-40 bg-gray-200 w-11 h-11 flex justify-center 
                            items-center rounded-full shadow-lv1 border-2 border-solid border-gray-300"
                >
                  <input
                    name="fileAvatar"
                    id="changeAvatar"
                    onChange={(event) => {
                      if (event.target.files.length > 0) {
                        modalsDispatch(
                          modalsAction.openModalPreviewAvatar(
                            event.target.files[0],
                            userProfile,
                            userProfilesDispatch,
                            userProfilesAction
                          )
                        );
                      }
                    }}
                    type="file"
                    accept="image"
                    className="hidden"
                  />
                  <label htmlFor="changeAvatar">
                    <i className="fas fa-camera"></i>
                  </label>
                </div>
              )}
            </div>
            <InfoProfile user={userProfile.userProfile} />
          </div>
        </div>
      </div>
    </>
  );
});
