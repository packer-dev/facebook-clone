import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import InformationMain from "./InformationMain";
import DescriptionIntroduction from "./DescriptionIntroduction";
import ItemFavorite from "@/modals/Profile/ModalFavorite/ItemFavorite";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const {
    state: { userProfile },
    updateData,
  } = useContext(UserProfileContext);
  const user = useSelector<RootState, User>(getUser);
  const favorites = JSON.parse(userProfile.favorites || "[]");
  //
  return (
    <>
      <p className="font-bold text-xl py-2 dark:text-white">Introduction</p>
      <DescriptionIntroduction />
      <InformationMain userProfile={userProfile} />
      {user.id === userProfile.id && (
        <Button
          onClick={() =>
            modalsDispatch(
              modalsAction.openModalEditInformation(
                (user) => updateData("userProfile", user),
                userProfile
              )
            )
          }
          className="w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold 
            dark:bg-dark-second dark:text-white rounded-lg"
        >
          Edit detail
        </Button>
      )}
      {favorites.length > 0 && (
        <div className="w-full flex flex-wrap my-1.5 gap-1.5">
          {favorites.map((item) => (
            <ItemFavorite item={item} key={item.id} disabled={true} />
          ))}
        </div>
      )}
      {user.id === userProfile.id && (
        <Button
          onClick={() => {
            modalsDispatch(
              modalsAction.openModalFavorite(
                (data) => updateData("userProfile", data),
                userProfile
              )
            );
          }}
          className="w-full text-sm my-2 p-2 bg-gray-200 hover:bg-gray-300 font-semibold 
            dark:bg-dark-second dark:text-white rounded-lg"
        >
          {favorites.length > 0 ? "Edit" : "Add"} favorite
        </Button>
      )}
    </>
  );
}
