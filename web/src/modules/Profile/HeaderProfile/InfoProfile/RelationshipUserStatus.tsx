import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAGE_CREATE_STORY } from "@/constants/Config";
import ButtonRelationshipUser from "./ButtonRelationshipUser";
import { AppDispatch, RootState, getUser, getUserProfile } from "@/reducers";
import { User } from "@/interfaces/User";
import { Button } from "@/components/ui/button";
import { sendRelationship } from "@/apis/userAPIs";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";
import {
  updateDataUserProfile,
  UserProfileReduxProps,
} from "@/reducers/userProfile";

const RelationshipUserStatus = () => {
  //
  const user = useSelector<RootState, User>(getUser);
  const navigation = useNavigate();
  const { userProfile, status } = useSelector<RootState, UserProfileReduxProps>(
    getUserProfile
  );
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const dispatch = useDispatch<AppDispatch>();
  const process = async (status: number) => {
    let payloadStatusAPI = status === 1 ? "" : "accept";
    await sendRelationship({
      user1: user?.id,
      user2: userProfile?.id,
      status: status === 0 ? "send" : payloadStatusAPI,
    });
    switch (status) {
      case 0:
        dispatch(updateDataUserProfile({ key: "status", value: 1 }));
        break;
      case 1:
        dispatch(updateDataUserProfile({ key: "status", value: null }));
        break;
      case 2:
        dispatch(updateDataUserProfile({ key: "status", value: 3 }));
        break;
      case 3:
        dispatch(updateDataUserProfile({ key: "status", value: null }));
        break;
      default:
        break;
    }
  };
  //
  return (
    <div className="flex md:justify-end justify-start items-center w-full md:w-auto">
      {!status && userProfile.id !== user.id && (
        <ButtonRelationshipUser
          onClick={process}
          status={0}
          icon="bx bxs-user-plus"
          label="Add friend"
          show
        />
      )}
      {status === 2 && (
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
      {(status === 1 || status === 3) && user.id !== userProfile.id && (
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
          status={status}
          show
          icon={status === 3 ? "bx bx-user-check" : "bx bxs-user-x"}
          label={status === 3 ? "Friend" : "Cancel request"}
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
};

export default RelationshipUserStatus;
