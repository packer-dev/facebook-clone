import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import InformationMain from "./InformationMain";
import DescriptionIntroduction from "./DescriptionIntroduction";
import ItemFavorite from "@/modals/Profile/ModalFavorite/ItemFavorite";
import { AppDispatch, RootState, getUser, getUserProfile } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";
import {
  updateDataUserProfile,
  UserProfileReduxProps,
} from "@/reducers/userProfile";

const Introduction = () => {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const { userProfile } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const user = useSelector<RootState, User>(getUser);
  const dispatch = useDispatch<AppDispatch>();
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
                (user) =>
                  dispatch(
                    updateDataUserProfile({ key: "userProfile", value: user })
                  ),
                userProfile
              )
            )
          }
          className="w-full text-sm my-2"
        >
          Edit detail
        </Button>
      )}
      {favorites.length > 0 && (
        <div className="w-full flex flex-wrap my-1.5 gap-1.5">
          {favorites.map((item) => (
            <ItemFavorite item={item} key={item.id} disabled />
          ))}
        </div>
      )}
      {user.id === userProfile.id && (
        <Button
          onClick={() => {
            modalsDispatch(
              modalsAction.openModalFavorite(
                (data) =>
                  dispatch(
                    updateDataUserProfile({ key: "userProfile", value: data })
                  ),
                userProfile
              )
            );
          }}
          className="w-full my-2"
        >
          {favorites.length > 0 ? "Edit" : "Add"} favorite
        </Button>
      )}
    </>
  );
};

export default Introduction;
