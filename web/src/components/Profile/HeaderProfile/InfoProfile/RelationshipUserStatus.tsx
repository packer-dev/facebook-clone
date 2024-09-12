import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PAGE_CREATE_STORY } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext/UserProfileContext";
import ButtonRelationshipUser from "./ButtonRelationshipUser";
import ButtonComponent from "@/components/ButtonComponent";
import { RootState } from "@/reducers";

export default function RelationshipUserStatus() {
  //
  const { user } = useSelector<RootState, RootState>((state) => state);
  const navigation = useNavigate();
  const {
    userProfile: { userProfile },
    userProfilesDispatch,
    userProfilesAction,
  } = useContext(UserProfileContext);
  const [userRelationship, setUserRelationship] = useState(null);
  const process = async (status) => {};
  useEffect(() => {
    //
    let unmounted = false;
    const fetch = async () => {
      const result = { data: { status: 3 } };
      if (unmounted) return;
      if (result.data.status === 3) {
        userProfilesDispatch(userProfilesAction.updateData("isFriend", true));
      }
      setUserRelationship(result.data);
    };
    if (user.id !== userProfile.id) fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  //
  return (
    <div className="flex md:justify-end justify-start items-center w-full md:w-auto">
      {!userRelationship && userProfile.id !== user.id && (
        <ButtonRelationshipUser
          handleClick={(status) => process(status)}
          status={1}
          blue={false}
          icon="bx bxs-user-plus"
          label={"Thêm bạn bè"}
          show={true}
        ></ButtonRelationshipUser>
      )}
      {userRelationship?.status === 2 && (
        <>
          <ButtonRelationshipUser
            handleClick={(status) => process(status)}
            status={3}
            blue={true}
            icon="bx bx-user-check"
            label={"Phản hồi"}
            show={false}
          ></ButtonRelationshipUser>
          <ButtonRelationshipUser
            handleClick={(status) => process(status)}
            status={-1}
            blue={false}
            icon="bx bx-user-delete"
            label={"Xoá lời mời"}
            show={false}
          ></ButtonRelationshipUser>
        </>
      )}
      {userRelationship
        ? (userRelationship.status === 1 || userRelationship.status === 3) &&
          user.id !== userProfile.id && (
            <ButtonRelationshipUser
              handleClick={(status) => process(status)}
              status={-1}
              show={true}
              icon={
                userRelationship.status === 3
                  ? "bx bx-user-check"
                  : "bx bxs-user-x"
              }
              label={userRelationship.status === 3 ? "Bạn bè" : "Huỷ lời mời"}
            ></ButtonRelationshipUser>
          )
        : ""}
      {user.id === userProfile.id && (
        <>
          <ButtonComponent
            handleClick={() => navigation(PAGE_CREATE_STORY)}
            className="flex items-center h-10 px-2 bg-main rounded-lg mr-2 text-white font-semibold text-sm"
          >
            <div className="w-5 h-5 mr-1.5 rounded-full bg-white flex justify-center items-center text-main">
              <i className="bx bx-plus"></i>
            </div>
            Thêm vào tin
          </ButtonComponent>
          <ButtonComponent className=" rounded-lg h-10 px-2 font-semibold bg-gray-200 hover:bg-gray-300 text-sm flex items-center">
            <i className="bx bxs-pencil text-xl mr-2"></i> Chỉnh sửa trang cá
            nhân
          </ButtonComponent>
        </>
      )}
    </div>
  );
}
