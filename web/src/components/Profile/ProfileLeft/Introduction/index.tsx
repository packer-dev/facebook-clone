import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import InformationMain from "./InformationMain";
import DescriptionIntroduction from "./DescriptionIntroduction";
import ItemFavorite from "@/components/Modals/Profile/ModalFavorite/ItemFavorite";
import ButtonComponent from "@/components/ButtonComponent";
import { RootState } from "@/reducers";

export default function Introduction() {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const {
    userProfile: { userProfile },
    userProfilesDispatch,
    userProfilesAction,
  } = useContext(UserProfileContext);
  const { user } = useSelector<RootState, RootState>((state) => state);
  const favorites = JSON.parse(userProfile.favorites);
  //
  return (
    <>
      <p className="font-bold text-xl py-2 dark:text-white">Giới thiệu</p>
      <DescriptionIntroduction user={user} userProfile={userProfile} />
      <InformationMain userProfile={userProfile} />
      {user.id === userProfile.id && (
        <ButtonComponent
          handleClick={() => {
            modalsDispatch(
              modalsAction.openModalEditInformation((data) => {
                userProfilesDispatch(
                  userProfilesAction.updateData("userProfile", data)
                );
              })
            );
          }}
          className="w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold 
            dark:bg-dark-second dark:text-white rounded-lg"
        >
          Chỉnh sửa chi tiết
        </ButtonComponent>
      )}
      {favorites.length > 0 && (
        <div className="w-full flex flex-wrap my-1.5 gap-1.5">
          {favorites.map((item) => (
            <ItemFavorite item={item} key={item.id} disabled={true} />
          ))}
        </div>
      )}
      {user.id === userProfile.id && (
        <ButtonComponent
          handleClick={() => {
            modalsDispatch(
              modalsAction.openModalFavorite((data) => {
                userProfilesDispatch(
                  userProfilesAction.updateData("userProfile", data)
                );
              })
            );
          }}
          className="w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold 
            dark:bg-dark-second dark:text-white rounded-lg"
        >
          {favorites.length > 0 ? "Sửa" : "Thêm"} sở thích
        </ButtonComponent>
      )}
    </>
  );
}
