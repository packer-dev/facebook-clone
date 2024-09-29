import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PAGE_CREATE_STORY } from "@/constants/Config";
import { UserProfileContext } from "@/contexts/UserProfileContext";
import ButtonRelationshipUser from "./ButtonRelationshipUser";
import { RootState, getUser } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";
import { checkRelationship, sendRelationship } from "@/apis/userAPIs";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

export default function RelationshipUserStatus() {
  //
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  const {
    state: { userProfile },
    updateData,
  } = useContext(UserProfileContext);
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [userRelationship, setUserRelationship] = useState(null);
  const process = async (status: number) => {
    let payloadStatusAPI = status === 1 ? "" : "accept";
    await sendRelationship({
      user1: user?.id,
      user2: userProfile?.id,
      status: status === 0 ? "send" : payloadStatusAPI,
    });
    switch (status) {
      case 0:
        setUserRelationship(1);
        break;
      case 1:
        setUserRelationship(null);
        break;
      case 2:
        setUserRelationship(3);
        break;
      case 3:
        setUserRelationship(null);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    //
    const fetch = async () => {
      const result = await checkRelationship(user?.id, userProfile?.id ?? "");
      if (result === 3) {
        updateData("isFriend", true);
      }
      setUserRelationship(result);
    };
    if (user.id !== userProfile.id) fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  //
  return (
    <div className="flex md:justify-end justify-start items-center w-full md:w-auto">
      {!userRelationship && userProfile.id !== user.id && (
        <ButtonRelationshipUser
          onClick={process}
          status={0}
          icon="bx bxs-user-plus"
          label="Add friend"
          show
        />
      )}
      {userRelationship === 2 && (
        <div className="flex-row flex gap-1">
          <ButtonRelationshipUser
            onClick={process}
            status={2}
            icon="bx bx-user-check"
            label="Accept"
            show={false}
          />
          <ButtonRelationshipUser
            onClick={process}
            status={1}
            icon="bx bx-user-x"
            label="Cancel"
            show={false}
          />
        </div>
      )}
      {(userRelationship === 1 || userRelationship === 3) &&
        user.id !== userProfile.id && (
          <ButtonRelationshipUser
            onClick={async (status) => {
              if (status === 3) {
                modalsDispatch(
                  modalsAction.openModalDeletePost(
                    `Notice`,
                    `If you agree, you and ${userProfile.name} will not be able to interact with each other on facebook or messenger. Please note this.`,
                    "OK",
                    () => process(1)
                  )
                );
              } else {
                process(status);
              }
            }}
            status={userRelationship}
            show
            icon={userRelationship === 3 ? "bx bx-user-check" : "bx bxs-user-x"}
            label={userRelationship === 3 ? "Friend" : "Cancel request"}
          />
        )}
      {user.id === userProfile.id && (
        <>
          <Button
            onClick={() => navigation(PAGE_CREATE_STORY)}
            className="mr-2 font-semibold text-sm"
          >
            <div className="w-5 h-5 mr-1.5 rounded-full bg-white flex justify-center items-center">
              <i className="bx bx-plus text-black" />
            </div>
            Add story
          </Button>
          <Button variant="secondary">
            <i className="bx bxs-pencil text-xl mr-2" /> Edit profile
          </Button>
        </>
      )}
    </div>
  );
}
